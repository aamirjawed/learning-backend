// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB() // connecting database
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONDO db connection failed !!! : " ,err);
})







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