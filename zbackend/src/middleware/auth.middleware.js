import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';
import { ManagementUser } from "../models/ManagementUser.model.js";



export const verifyJWT = asyncHandler(async(req,_,next)=>{
     try {
        const token = req.cookies?.accessToken;
        if(!token){
           throw new ApiError(401,"unathorized Token")
        }
       const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
       const user = await ManagementUser.findById(decodedToken?._id).select("-password -refreshToken");
       if(!user){
           //frontENd
           throw new ApiError(401,"Invalid accessToekn");
       }
       req.user = user;
       next();
     } catch (error) {
        throw new ApiError(401 , error?.message ||"Something Went Wrong during validating token");
     }
})