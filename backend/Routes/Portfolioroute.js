import express from "express";
import { addCoin, getPortfolio, deleteCoin } from "../Controllers/Portfoliocontroller.js";
import { authMiddelware } from "../Middelware/UserMiddel.js";

const Porouter = express.Router();

Porouter.post("/add",authMiddelware, addCoin);
Porouter.get("/:userId",authMiddelware, getPortfolio);
Porouter.delete("/:id",authMiddelware, deleteCoin);

export default Porouter;
