import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./Config/db.js";
import Userrouter from "./Routes/UserRoute.js";
import Porouter from "./Routes/Portfolioroute.js";

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// User routes
app.use("/api/user", Userrouter);

//Porfolio routes
app.use('/api/portfolio',Porouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
