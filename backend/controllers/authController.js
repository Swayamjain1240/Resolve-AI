import * as authService from "../services/authServices.js"

export const Signup = async (req, res) => {
    try {

        const { email, password, name } = req.body;
        if (!email, !password, !name) {
            res.status(400).json({ message: "All field required" });
        }

        const data = await authService.registerUser({ name, email, password });

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data,
        });

    } catch (error) {
        console.error("error in Signup");
        res.status(500).json({ message: "internal server error" });
    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email, !password) {
            return res.status(401).json({ message: "all fields required" });
        }

        const data = await authService.authenticate({ email, password });

        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            data,
        });
    } catch (error) {
        console.error("error in Login");
        res.status(500).json({ message: "internal server error" });
    }
}
export const Logout = async (req, res) => {
    try {

    } catch (error) {
        console.error("error in Logout");
        res.status(500).json({ message: "internal server error" });
    }
}