 
import express, { urlencoded } from 'express'
import cors from 'cors'
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import { asyncHandler } from './utils/asyncHandler.js';
import { ApiError } from './utils/ApiError.js';
import { ManagementUser } from './models/ManagementUser.model.js';


const app=express();
//-------------middle-wares for configuration of npm modules-------------------//
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
//to allow express to read input json data and limit it
app.use(express.json({limit: "16kb"}))
//to read data from url
app.use(express.urlencoded())
//to store files in server temporarly
app.use(express.static("public"));
app.use(cookieParser())


// const createManagementUser = asyncHandler(async()=>{
//     try {
//         const newUser = new ManagementUser ({
//             username :"guesthouse3",
//             password : "123456"
//         })
//         await newUser.save();
//         return
//     } catch (error) {
//         throw new ApiError(200,"user creation failed");
//     }
// })
// createManagementUser();


import  bookingRouter  from "./routes/booking.js"
import managementRouter from './routes/Management.js'


app.use(morgan("tiny"))
app.use('/book',bookingRouter);
app.use('/api',managementRouter);

app.get("/", (req, res) => {
    res.status(200).send("API is live!")
});





export {app}