// require('dotenv').config({path:'../.env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import DBConnect from "./db/index.js";
import { app } from "./app.js"


dotenv.config({
 path:'/.env'
});

DBConnect()
.then(()=>{
     app.on("error",(error)=>{
        console.log("ERRRR :",error);
        throw error;
     })
     app.listen(process.env.PORT || 8000,()=>{
        console.log(`server started on port:${process.env.PORT}`)
     })
})
.catch((error)=>{
    console.log("Mongo db connection error :",error);
})