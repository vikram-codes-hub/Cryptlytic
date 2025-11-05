import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
userName:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true,},
portfolios: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }
  ],
 createdAt: {
    type: Date,
    default: Date.now,
  }
})

export const User = mongoose.model("User", userSchema);