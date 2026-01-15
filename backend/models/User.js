import mongoose from "mongoose";

export default mongoose.model("User", new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  googleId:String,
  resumes:[{ type: mongoose.Schema.Types.ObjectId, ref:"Resume"}]
}));
