import { Portfolio } from '../Modules/Portfolio.js';
import { User } from "../Modules/User.js";

//  ADD Coin
export const addCoin = async (req, res) => {
  try {
    const { userId, coinName, symbol, quantity, avgBuyPrice, currentPrice } = req.body;

    if (!userId || !coinName || !symbol || !quantity || !avgBuyPrice) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const totalInvested = quantity * avgBuyPrice;
    const currentValue = quantity * currentPrice;
    const profitLoss = currentValue - totalInvested;
    const profitLossPercent = ((currentPrice - avgBuyPrice) / avgBuyPrice) * 100;

    const coin = await Portfolio.create({
      userId,
      coinName,
      symbol,
      quantity,
      avgBuyPrice,
      currentPrice,
      totalInvested,
      currentValue,
      profitLoss,
      profitLossPercent
    });

    // Add to user's portfolio list 
    await User.findByIdAndUpdate(userId, { $push: { portfolio: coin._id } });

    res.status(201).json({ success: true, coin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all user coins
export const getPortfolio = async (req, res) => {
  try {
    const userId = req.params.userId;
    const coins = await Portfolio.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, coins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  DELETE Coin
export const deleteCoin = async (req, res) => {
  try {
    const coinId = req.params.id;
    const coin = await Portfolio.findById(coinId);
    if (!coin) return res.status(404).json({ success: false, message: "Coin not found" });

    await Portfolio.findByIdAndDelete(coinId);
    await User.findByIdAndUpdate(coin.userId, { $pull: { portfolio: coinId } });

    res.status(200).json({ success: true, message: "Coin deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
