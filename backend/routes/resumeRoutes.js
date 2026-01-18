// 







import express from "express";
import Resume from "../models/Resume.js";
import isAuth from "../middleware/isAuth.js";
import { analyzeResume } from "../utils/aiEngine.js";

const router = express.Router();

/* ================= CREATE RESUME ================= */
// router.post("/create", isAuth, async (req, res) => {
//   try {
//     const { jobRole, content } = req.body;

//     const resume = await Resume.create({
//       user: req.user.id,
//       jobRole,
//       content,            // ← IMPORTANT: store resume text
//       createdAt: new Date(),
//     });

//     res.json(resume);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create resume" });
//   }
// });



// router.post("/create", isAuth, async (req, res) => {
//   try {
//     const { jobRole, content } = req.body;

//     if (!jobRole || !content) {
//       return res.status(400).json({ message: "Job role and resume content are required" });
//     }

//     const resume = await Resume.create({
//       user: req.user.id,
//       jobRole,
//       content,
//       createdAt: new Date(),
//     });

//     res.json(resume);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create resume" });
//   }
// });



router.post("/create", isAuth, async (req, res) => {
  try {
    const resume = await Resume.create({
      user: req.user.id,
      ...req.body,
      createdAt: new Date(),
    });

    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to create resume" });
  }
});



/* ================= GET MY RESUMES ================= */
router.get("/my", isAuth, async (req, res) => {
  try {
    // const resumes = await Resume.find({ user: req.user.id }).sort({ createdAt: -1 });
    const resumes = await Resume.find({ user: req.user.id })
        .populate("user", "name")
        .sort({ createdAt: -1 });

    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
});

/* ================= CHECK / ANALYZE RESUME ================= */
// router.post("/check", isAuth, async (req, res) => {
//   try {
//     const { resumeText, jobRole } = req.body;
//     const ai = await analyzeResume(resumeText, jobRole);
//     res.json(ai);
//   } catch (err) {
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// });


// router.post("/check", isAuth, async (req, res) => {
//   try {
//     const { resumeText, jobRole, jobDescription } = req.body;
//     if (!resumeText || !jobRole) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
//     const ai = await analyzeResume(resumeText, jobRole, jobDescription);
//     res.json(ai);
//   } catch (err) {
//     console.error("AI Error:", err);
//     res.status(500).json({ message: "AI analysis failed" });
//   }
// });









router.post("/check", isAuth, async (req, res) => {
  try {
    const { resumeText, jobRole, jobDescription } = req.body;

    if (!resumeText || !jobRole) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let ai = await analyzeResume(resumeText, jobRole, jobDescription);

    // 🔥 ENSURE WE ALWAYS SEND CLEAN JSON
    if (typeof ai === "string") {
      const start = ai.indexOf("{");
      const end = ai.lastIndexOf("}");
      if (start !== -1 && end !== -1) {
        ai = JSON.parse(ai.substring(start, end + 1));
      }
    }

    // 🔥 FINAL NORMALIZED RESPONSE (VERY IMPORTANT)
    const finalResponse = {
      atsScore: ai.atsScore ?? 0,
      strengths: Array.isArray(ai.strengths) ? ai.strengths : [],
      weaknesses: Array.isArray(ai.weaknesses) ? ai.weaknesses : [],
      suggestions: Array.isArray(ai.suggestions) ? ai.suggestions : [],
      missingKeywords: Array.isArray(ai.missingKeywords)
        ? ai.missingKeywords
        : [],
    };

    res.json(finalResponse);
  } catch (err) {
    console.error("AI Error:", err);
    res.status(500).json({ message: "AI analysis failed" });
  }
});



// router.get("/:id", isAuth, async (req, res) => {
//   try {
//     const resume = await Resume.findById(req.params.id).populate("user", "name");
//     res.json(resume);
//   } catch (err) {
//     res.status(500).json({ message: "Resume not found" });
//   }
// });

router.get("/:id", isAuth, async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Resume not found" });
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    res.json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete resume" });
  }
});


// router.put("/:id", isAuth, async (req, res) => {
//   try {
//     const updated = await Resume.findOneAndUpdate(
//       { _id: req.params.id, user: req.user.id },
//       req.body,
//       { new: true }
//     );

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Update failed" });
//   }
// });




router.put("/:id", isAuth, async (req, res) => {
  try {
    const updated = await Resume.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // Security: Must own the resume
      { $set: req.body }, // Updates jobRole, content, skills, etc.
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Resume not found or unauthorized" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Update failed" });
  }
});
export default router;
