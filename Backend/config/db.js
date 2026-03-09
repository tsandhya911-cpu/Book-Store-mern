import mongoose from "mongoose";


export const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Database connect successfully");

    } catch (error) {
        console.log(error);
    }
}