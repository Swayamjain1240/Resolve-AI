import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js"

export const register = async (userData, req, res,) => {
    try {

        const { email, name, password } = userData

        const existuser = await User.findOne({ email });
        if (existuser) {
           return res.status(409).json({ message: "User already exist" });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: "customer"
        });

        const token = generateToken(user._id);

        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        };
    } catch (error) {
        console.error("error in register services");
        return res.status(500).json({ message: "internal server error" });
    }
};

export const authenticate = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email }.select('+password'));

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user._id);

        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        }
    } catch (error) {
        console.error("error in authenticate services");
        return res.status(500).json({ message: "internal server error" });
    }
}