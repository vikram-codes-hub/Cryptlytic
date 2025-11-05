import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Modules/User.js";

// -------------------- Signup Function --------------------
export const RegisterUSer = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.json({ success: false, message: "Missing Credentials" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const newuser = new User({
      userName,
      email,
      password: hashedPass, // ✅ store hashed password
    });

    await newuser.save();
    // console.log("User registered:", newuser);

    // ✅ Generate JWT Token
    const token = jwt.sign({ id: newuser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // ✅ Send consistent JSON response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        _id: newuser._id,
        userName: newuser.userName,
        email: newuser.email,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

// -------------------- Login Function --------------------
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.json({ success: false, message: "Missing Email" });
    if (!password) return res.json({ success: false, message: "Missing Password" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    // ✅ Corrected JWT Secret key
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

// -------------------- Get User Function --------------------
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

// -------------------- Check Auth Function --------------------
export const checkAuth = (req, res) => {
  try {
    if (!req.user) {
      return res.json({ success: false, message: "No authenticated user" });
    }

    res.json({ success: true, user: req.user });
    // console.log("Authenticated user:", req.user);
  } catch (err) {
    console.error("CheckAuth error:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};
