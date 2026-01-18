// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// import authRoutes from "./routes/authRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

// mongoose.connect(process.env.MONGO_URI)
// .then(()=> app.listen(5000,()=>console.log("Server running")))
// .catch(err=>console.log(err));




// import "dotenv/config";        // ← MUST be first line

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);
// console.log("MONGO URI USED =>", process.env.MONGO_URI);
// mongoose.connect(process.env.MONGO_URI,{family: 4})
// .then(()=> app.listen(5000,()=>console.log("Server running")))
// .catch(err=>console.log(err));






// import "dotenv/config";
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import resumeRoutes from "./routes/resumeRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

// // Database Connection
// const PORT = process.env.PORT || 5000;

// // mongoose.connect(process.env.MONGO_URI, {family: 4})
// //   .then(() => {
// //     console.log("✅ MongoDB Connected Successfully");
// //     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB Connection Error:");
// //     console.error(err.message);
// //     // Log the specific reason if it's a whitelist issue
// //     if (err.message.includes("MongooseServerSelectionError")) {
// //         console.log("👉 Tip: Check your MongoDB Atlas IP Whitelist (Network Access).");
// //     }
// //   });



// // server.js
// mongoose.connect(process.env.MONGO_URI, {
//   family: 4,                  // Forces IPv4 path
//   directConnection: false,    // Allows discovery of the replica set
//   serverSelectionTimeoutMS: 5000 
// })
// .then(() => {
//   console.log("✅ Successfully connected via Direct Nodes");
//   app.listen(5000, () => console.log("Server running"));
// })
// .catch(err => {
//   console.error("❌ Connection failed details:");
//   console.error(err.message);
// });









// import "dotenv/config";
// import express from "express";
// import mongoose from "mongoose";

// const app = express();

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//   console.log("✅ MongoDB Connected");
//   app.listen(5000, () => console.log("Server running"));
// })
// .catch(err => {
//   console.error("❌ MongoDB Error:", err.message);
// });





import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ✅ FIX CORS (VERY IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Allow JSON bodies
app.use(express.json());

// Your API routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch(err => {
    console.error("❌ MongoDB Error:", err.message);
  });
