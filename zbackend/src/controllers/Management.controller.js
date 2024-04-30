import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ManagementUser } from "../models/ManagementUser.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Accomodation } from "../models/Guest.model.js";
import jwt from "jsonwebtoken";

const generateAccessTokenandRefreshToken = async (userID) => {
  try {
    const user = await ManagementUser.findById(userID);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshtoken = refreshToken;
    await user.save({ validateBeforeSave: true });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("ERR:", error);
    throw new ApiError(500, "something went wrong during generation tokens");
  }
};
const createUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if ([username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await ManagementUser.findOne({ username });
  if (existedUser) {
    throw new ApiError(409, "User with username already exists");
  }

  const user = await ManagementUser.create({
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await ManagementUser.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ApiError(400, "username and password are required");
  }
  const user = await ManagementUser.findOne({ username });
  if (!user) {
    throw new ApiError(404, "user Not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Password Incorrect");
  }
  const { accessToken, refreshToken } =
    await generateAccessTokenandRefreshToken(user._id);

  const loggedUser = await ManagementUser.findById(user._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  // const result = new ApiResponse(200,{},"User logged in succesfully");
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, loggedUser, "Userlogged in succesfully"));
});
const logoutUser = asyncHandler(async (req, res, next) => {
  //clear cookies
  //refreshToken reset
  console.log("ID", req.user._id);
  await ManagementUser.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshtoken: 1, // this removes the field from document
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "User loggedOut"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshToken;
  console.log(token)
  if (!token) {
    throw new ApiError(401, "unauthorized request");
  }
  const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

  const user = ManagementUser.findById(decodedToken?._id);
  if (!user) {
    throw new ApiError(401, "Invalid refresh Token");
  }

  if (token !== user?.refreshToken) {
    throw new ApiError(401, "tocken expired or used");
  }
  const options = {
    httpOnly: true,
    secure: true,
  };

  const { accessToken, newrefreshToken } = generateAccessTokenandRefreshToken(
    user._id
  );
  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", newrefreshToken, options)
    .json(new ApiResponse(200, { user }, "token refresh successfull"));
});

const managementAllBookings = asyncHandler(async (req, res) => {
  try {
    const { fromDate, toDate, rollno } = req.body;

    let query = {};

    // Add fromDate and toDate to the query if provided
    if (fromDate) {
      query.fromDate = { $gte: new Date(fromDate) };
    }
    if (toDate) {
      query.toDate = { $lte: new Date(toDate) };
    }
    // Add studentId to the query if provided
    if (rollno) {
      query.rollno = rollno;
    }
    const accommodations = await Accomodation.find(query);
    res.json(accommodations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export {
  loginUser,
  logoutUser,
  refreshAccessToken,
  managementAllBookings,
  createUser,
};
