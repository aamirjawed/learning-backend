// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();






/*
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MOnGODB_URI}/${DB_NAME}`)
    }
    catch(err){
        console.log("ERROR : ",err)
        throw err
    }
})()
*/