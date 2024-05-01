import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//connection with database and handling error and also using async and await if the database is far away from the user
//as data processing takes time if the database is far from the user

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection FAILED : ", error);
        process.exit(1)
    }
}

export default connectDB;