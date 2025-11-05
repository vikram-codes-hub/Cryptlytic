import mongoose from 'mongoose'

const portfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  coinName: { type: String, required: true },         
  symbol: { type: String, required: true },           
  quantity: { type: Number, required: true },        
  avgBuyPrice: { type: Number, required: true },     
  currentPrice: { type: Number, required: true },   

  // Computed fields (optional)
  totalInvested: { type: Number },                 
  currentValue: { type: Number },                     
  profitLoss: { type: Number },                      
  profitLossPercent: { type: Number },              

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
