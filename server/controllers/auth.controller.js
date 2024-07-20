// auth.controller.js
import User from '../models/user.model.js'; 
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'; 

export const signin = async (req, res) => {
  console.log('signin', req.body);
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare provided password with stored hashed password
    const validPassword = bcryptjs.compareSync(password, user.password);
    console.log(validPassword);
    if (!validPassword) {
      // Invalid credentials
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the cookie and send success response
    res.cookie('access_token', token, { httpOnly: true }).status(200).json({ message: 'Signin successful' });

  } catch (err) {
    // Log error and send internal server error response
    console.error('Error during user signin:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const signup = async (req, res) => {
  console.log('Signup request body:', req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving it
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during user signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
