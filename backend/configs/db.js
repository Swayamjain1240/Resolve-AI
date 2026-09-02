import mongoose from "mongoose";

export const connectDB = async (req,res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected...")
    } catch (error) {
        console.error("error in connecting database")
        res.status(500).json({message:"internal server error"})
    }
}