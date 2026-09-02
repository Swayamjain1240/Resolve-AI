import jwt from "jsonwebtoken"

export const generateToken = async (userId) => {
    try {
        return jwt.sign({id:userId}, process.env.JWT_SECRET,{expiresIn:"7d"} )
    } catch (error) {
        console.error("error in generate token");
        res.status(500).json({message:"internal server error"});
    }
}