// import Groq from "groq-sdk";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// export const analyzeResume = async (resumeText, jobRole, jobDescription) => {
//   try {
//     const prompt = `
// You are an ATS (Applicant Tracking System) expert.

// Analyze the resume below for the given job role and job description.

// JOB ROLE:
// ${jobRole}

// JOB DESCRIPTION:
// ${jobDescription}

// RESUME TEXT:
// ${resumeText}

// Provide your response in strict JSON format like this:

// {
//   "atsScore": number between 0-100,
//   "strengths": [list of strengths],
//   "weaknesses": [list of weaknesses],
//   "missingKeywords": [list of missing keywords],
//   "suggestions": [list of actionable suggestions]
// }
// `;

//     const response = await groq.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         { role: "system", content: "You are a professional ATS analyzer." },
//         { role: "user", content: prompt },
//       ],
//       temperature: 0.3,
//     });

//     const resultText = response.choices[0].message.content;

//     // Try to parse AI response as JSON
//     let result;
//     try {
//       result = JSON.parse(resultText);
//     } catch (err) {
//       // Fallback if AI didn't return perfect JSON
//       result = {
//         atsScore: 50,
//         strengths: ["AI could not format strengths properly"],
//         weaknesses: ["AI could not format weaknesses properly"],
//         missingKeywords: [],
//         suggestions: [resultText],
//       };
//     }

//     return result;
//   } catch (error) {
//     console.error("Groq AI Error:", error);
//     throw new Error("AI analysis failed");
//   }
// };










import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeResume = async (resumeText, jobRole, jobDescription) => {
  try {
    const prompt = `
You are an ATS (Applicant Tracking System) expert.

STRICT RULES:
- You MUST return ONLY valid JSON.
- NO markdown, NO backticks, NO explanations outside JSON.
- strengths, weaknesses, suggestions, and missingKeywords MUST be ARRAYS.
- Each item in the arrays must be a SHORT single sentence (not a paragraph).

Analyze the resume below for the given job role and job description.

JOB ROLE:
${jobRole}

JOB DESCRIPTION:
${jobDescription}

RESUME TEXT:
${resumeText}

Return JSON in this EXACT format:

{
  "atsScore": number between 0 and 100,
  "strengths": [
    "short sentence",
    "short sentence"
  ],
  "weaknesses": [
    "short sentence",
    "short sentence"
  ],
  "missingKeywords": [
    "keyword1",
    "keyword2"
  ],
  "suggestions": [
    "short sentence",
    "short sentence"
  ]
}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are a strict ATS analyzer that ONLY returns JSON." },
        { role: "user", content: prompt },
      ],
      temperature: 0.2, // lower = more structured output
    });

    let resultText = response.choices[0].message.content;

    // ---- EXTRA SAFETY: extract JSON if model still adds text ----
    const jsonMatch = resultText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      resultText = jsonMatch[0];
    }

    let result = JSON.parse(resultText);

    // ---- FINAL NORMALIZATION (guarantee correct shape) ----
    result = {
      atsScore: result.atsScore ?? 0,
      strengths: Array.isArray(result.strengths) ? result.strengths : [],
      weaknesses: Array.isArray(result.weaknesses) ? result.weaknesses : [],
      suggestions: Array.isArray(result.suggestions) ? result.suggestions : [],
      missingKeywords: Array.isArray(result.missingKeywords)
        ? result.missingKeywords
        : [],
    };

    return result;
  } catch (error) {
    console.error("Groq AI Error:", error);

    // Clean fallback so frontend never breaks
    return {
      atsScore: 50,
      strengths: ["AI response parsing failed"],
      weaknesses: ["AI response parsing failed"],
      missingKeywords: [],
      suggestions: ["Please try again"],
    };
  }
};
