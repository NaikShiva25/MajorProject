import mongoose from "mongoose";
const DateSchema =new mongoose.Schema({

    Date:{
        type: Date,
        unique: true,
        required:true
    },
    RoomsAvailable:{
       type:Number,
       default:20,
    }
    
})

export const checkDate = mongoose.model('checkDate',DateSchema);