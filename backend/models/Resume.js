import mongoose from "mongoose";

export default mongoose.model("Resume", new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
  jobRole:String,
  skills:[String],
  experience:Array,
  education:Array,
  atsScore:Number,
  aiSuggestions:Array,
  createdAt:{ type:Date, default:Date.now }
}));
