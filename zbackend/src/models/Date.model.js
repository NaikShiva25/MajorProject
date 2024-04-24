import mongoose from "mongoose";
const DateSchema =new mongoose.Schema({

    Date:{
        type: String,
        unique: true,
        required:true
    },
    RoomsAvailable:{
       type:Number,
       default:20,
    }
    
})

export const checkDate = mongoose.model('checkDate',DateSchema);