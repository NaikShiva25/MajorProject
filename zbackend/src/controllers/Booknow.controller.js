import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { checkDate } from "../models/Date.model.js";
import { Accomodation } from "../models/Guest.model.js";

const BookAccomodation = asyncHandler(async (req, res, next) => {
  try {
    const { fromDate, toDate, noOfRoomsRequired, studentId } = req.body;
    const endDate = new Date(toDate);
    const currentDate = new Date(fromDate);
    if (currentDate > endDate) {
      throw new ApiError(400, "please select valid dates");
    }
    while (currentDate <= endDate) {
      const date = await checkDate.findOne({ Date: currentDate });
      if (!date || date.RoomsAvailable >= noOfRoomsRequired) {
        currentDate.setDate(currentDate.getDate() + 1);
      } else {
        throw new ApiError(
          400,
          "Insuffecient Availability of rooms in selected dates"
        );
        console.log("Errr:");
      }
    }
    // console.log(fromDate,toDate);
    const temp = new Date(fromDate);
    // console.log(temp);
    while (temp <= endDate) {
      console.log(temp, endDate);
      // const { fromDate ,toDate , noOfRoomsRequired } = req.body;
      const check = await checkDate.findOne({ Date: temp });
      console.log(check);
      if (!check) {
        const result = 20 - noOfRoomsRequired;
        const newBooking = new checkDate({
          Date: temp,
          RoomsAvailable: result,
        });
        await newBooking.save();
        console.log("PLEASE CHECK HERE:", newBooking);
      } else {
        const updatedBooking = await checkDate.findOneAndUpdate(
          { Date: temp },
          {
            $set: { RoomsAvailable: check.RoomsAvailable - noOfRoomsRequired },
          },
          { new: true }
        );
        console.log(updatedBooking);
      }
      temp.setDate(temp.getDate() + 1);
    }
    const newAccomodation = new Accomodation({
      fromDate: currentDate,
      toDate: endDate,
      noOfRoomsRequired,
      studentId,
    });

    await newAccomodation.save();
    res.status(201).json(new ApiResponse(200, Accomodation, "ok"));
  } catch (error) {
    console.error(error);
    throw new ApiError(
      500,
      "Something went wrong while booking your accomodation plz try later"
    );
  }
});

export { BookAccomodation };
//stop this yrr learning git hub