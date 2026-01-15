import express from "express";
import Resume from "../models/Resume.js";
import isAuth from "../middleware/isAuth.js";
import { analyzeResume } from "../utils/aiEngine.js";

const router = express.Router();

router.post("/create", isAuth, async(req,res)=>{
 const { jobRole, skills, experience, education } = req.body;
 const resume = await Resume.create({ user:req.user.id, jobRole, skills, experience, education });
 res.json(resume);
});

router.post("/check", isAuth, async(req,res)=>{
 const { resumeText, jobRole } = req.body;
 const ai = await analyzeResume(resumeText, jobRole);
 res.json(ai);
});

export default router;
