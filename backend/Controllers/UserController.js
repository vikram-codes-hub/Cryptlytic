import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { User } from "../Modules/User.js";


//Signup function
export const RegisterUSer=async(req,res)=>{
    try {
        const {userName,email,password}=req.body

        if(!userName || !email || !password)return res.json({mssg:"Missing Credentials"})

            const existingUser=await User.findOne({email});
            if (existingUser) return res.status(400).json({ message: "User already exists" });


            const hashedPass=await bcrypt.hash(password,10);
            const newuser=new User({
                userName,email,password
            })

            await newuser.save()
      res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



//Login function
export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body

        if(!email)return res.json({mssg:"Missing email"});
        if(!password)return res.json({mssg:"Missing Password"});

          const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch=await bcrypt.compare(password,user.password)
     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

     const token=jwt.sign({id:user._id},process.env.process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

export const checkAuth = (req, res) => {
  res.json({ success: true, user: req.user });
};