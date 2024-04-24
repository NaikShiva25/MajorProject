import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const ManagementUserSchema =new mongoose.Schema({

     username :{
        type : String,
        required : true
     },
     password :{
        type : String,
        required:true
     },
     refreshtoken :{
        type:String
     }
})
ManagementUserSchema.pre('save',async function (next){
       this.password = bcrypt.hash(this.password,10);
       next();
})
ManagementUserSchema.methods.isPasswordCorrect = async function (password){
      return await bcrypt.compare(password,this.password);
}
ManagementUserSchema.methods.generateAccessToken = function(){
   return jwt.sign(
        {
            _id : this._id,
            username : this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
           expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
     )
}
ManagementUserSchema.methods.generateRefreshToken = function(){
   return jwt.sign(
        {username : this.username},
        process.env.REFRESH_TOKEN_SECRET,
        {
           expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
     )
}
export const ManagementUser = mongoose.model('ManagementUser',ManagementUserSchema);