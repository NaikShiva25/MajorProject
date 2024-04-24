import mongoose from "mongoose"

const AccomodationSchema = new mongoose.Schema({
   fromDate:{
       type:Date,
       required:true
   },
   toDate:{
    type:Date,
    required:true
   },
   noOfRoomsRequired:{
     type:Number,
     required:true
   },
   studentId: {
     type:String,
     required:true
   }
},{timestamps:true});

export const Accomodation = mongoose.model('Accomodation',AccomodationSchema);


