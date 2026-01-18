// import mongoose from "mongoose";

// export default mongoose.model("Resume", new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
//   jobRole:String,
//   skills:[String],
//   experience:Array,
//   education:Array,
//   atsScore:Number,
//   aiSuggestions:Array,
//   createdAt:{ type:Date, default:Date.now }
// }));


// import mongoose from "mongoose";

// export default mongoose.model(
//   "Resume",
//   new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     jobRole: { type: String, required: true },

//     content: { type: String, required: true },   // ← IMPORTANT: store resume text

//     skills: [String],
//     experience: Array,
//     education: Array,

//     atsScore: Number,
//     aiSuggestions: Array,

//     createdAt: { type: Date, default: Date.now },
//   })
// );





// import mongoose from "mongoose";

// export default mongoose.model(
//   "Resume",
//   new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true },
//     location: { type: String, required: true },
//     linkedin: String,
//     github: String,
//     summary: { type: String, required: true },

//     education: {
//       degree: { type: String, required: true },
//       college: { type: String, required: true },
//       year: { type: String, required: true },
//       cgpa: String,
//     },

//     skills: String,
//     projects: String,
//     experience: String,
//     achievements: String,
//     hobbies: String,

//     atsScore: Number,
//     aiSuggestions: Array,

//     createdAt: { type: Date, default: Date.now },
//   })
// );





// import mongoose from "mongoose";

// export default mongoose.model(
//   "Resume",
//   new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true },
//     location: { type: String, required: true },
//     linkedin: String,
//     github: String,
//     summary: { type: String, required: true },

//     education: {
//       degree: { type: String, required: true },
//       college: { type: String, required: true },
//       year: { type: String, required: true },
//       cgpa: String,
//     },

//     skills: String,
//     projects: String,
//     experience: String,
//     achievements: String,
//     hobbies: String,

//     atsScore: Number,
//     aiSuggestions: Array,

//     createdAt: { type: Date, default: Date.now },
//   })
// );




import mongoose from "mongoose";

export default mongoose.model(
  "Resume",
  new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    jobRole: String,
    content: String,   // ✅ VERY IMPORTANT
    skills: [String],
    experience: Array,
    image: String,
    education: Array,
    atsScore: Number,
    aiSuggestions: Array,
    details: Object,
    createdAt: { type: Date, default: Date.now }
  })
);
