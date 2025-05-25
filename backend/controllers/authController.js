const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');  


const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log('Request body:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Email:', email);
    console.log('Hashed Password:', hashedPassword);

    const newUser = new User({ email, password: hashedPassword });  
    console.log("Attempting to create new user");
    await newUser.save();
    console.log("New user created", newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error occurred in creating user" });
  }
};


const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    console.log("Searching email:", email);
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Email not found or user not found");
      return res.status(400).json({ message: 'User not found' });
    }

    console.log("Email found, checking password");

    
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Is password match:", isMatch);

    console.log("Plaintext password:", password);
    console.log("Stored hashed password:", user.password);
    console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      console.log("Password not correct");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("Password correct, generating token");
    const token = jwt.sign({ email: user.email, userId: user._id }, 'secretKey', { expiresIn: '1h' });
    console.log("Token generated:", token);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error in login:', error);
    return res.status(500).json({ message: 'Error in logging in', error: error.message });
  }
};

module.exports = { signup, login };