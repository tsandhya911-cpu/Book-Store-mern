// import mongoose from "mongoose";


// export const connectDB = async (url) => {
//     try {
//         await mongoose.connect(url);
//         console.log("Database connect successfully");

//     } catch (error) {
//         console.log(error);
//     }
// }


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI not found in .env");
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
    process.exit(1);
  }
};