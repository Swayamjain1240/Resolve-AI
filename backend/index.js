import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import connectDB from "./configs/db.js"

dotenv.config()


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/health", (req,res)=>{
    try {
        res.status(200).json({message:"server is healthy"})
    } catch (error) {
        console.error("error in health route");
        res.status(500).json({message:"internal server error"});
    }
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on PORT: ${PORT}`)
})