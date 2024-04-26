import mongoose from "mongoose";

const AccomodationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    student: {
      type: String,
    },
    rollno: {
      type: String,
      required: true,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    pin: {
      type: String,
    },
    state: {
      type: String,
    },
    mobileno :{
      type:String,
      required:true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    noOfRoomsRequired: {
      type: Number,
      required: true,
    },
    // studentId: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export const Accomodation = mongoose.model("Accomodation", AccomodationSchema);
