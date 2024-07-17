import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const Signup = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = bcryptjs.hashSync(password,  10); 
        const newUser = new User({ username, password: hashedPassword, email });
        
        await newUser.save();
        res.json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
