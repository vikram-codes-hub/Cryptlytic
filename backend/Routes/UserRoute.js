import express from "express";
import { RegisterUSer, Login, getUser, checkAuth } from "../Controllers/UserController.js"
import { authMiddelware } from "../Middelware/UserMiddel.js";


const Userrouter = express.Router();

// Signup route
Userrouter.post("/signup", RegisterUSer);

// Login route
Userrouter.post("/login", Login);

// Get current logged-in user
Userrouter.get("/me", authMiddelware , getUser);

// Check if user is authenticated
Userrouter.get("/checkauth",  authMiddelware , checkAuth);

export default Userrouter;
