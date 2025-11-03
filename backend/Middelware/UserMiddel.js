import jwt from "jsonwebtoken";
import { User } from "../Modules/User.js";

//auth middelware for users
export const authMiddelware=async(req,resizeBy,next)=>{
    try {
        const {token}=req.header("Authorization");
        if(!token)return res.status(401).json({ message: "No token, authorization denied" });

        const decoded_token=jwt.verify(token,process.env.JWT_SECRET)

        const user=await User.findby(decoded_token.id).select("password")
        if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user; 
    next();
    } catch (err) {
    res.status(401).json({ message: "Token is not valid", error: err.message });
  }
};