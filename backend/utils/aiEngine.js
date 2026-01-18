import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeResume = async (resumeText, jobRole, jobDescription) => {
  try {
    const prompt = `
You are an ATS (Applicant Tracking System) expert.

Analyze the resume below for the given job role and job description.

JOB ROLE:
${jobRole}

JOB DESCRIPTION:
${jobDescription}

RESUME TEXT:
${resumeText}

Provide your response in strict JSON format like this:

{
  "atsScore": number between 0-100,
  "strengths": [list of strengths],
  "weaknesses": [list of weaknesses],
  "missingKeywords": [list of missing keywords],
  "suggestions": [list of actionable suggestions]
}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are a professional ATS analyzer." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    const resultText = response.choices[0].message.content;

    // Try to parse AI response as JSON
    let result;
    try {
      result = JSON.parse(resultText);
    } catch (err) {
      // Fallback if AI didn't return perfect JSON
      result = {
        atsScore: 50,
        strengths: ["AI could not format strengths properly"],
        weaknesses: ["AI could not format weaknesses properly"],
        missingKeywords: [],
        suggestions: [resultText],
      };
    }

    return result;
  } catch (error) {
    console.error("Groq AI Error:", error);
    throw new Error("AI analysis failed");
  }
};




// import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export const analyzeResume = async (resumeText, jobRole, jobDescription) => {
//   try {
//     const chatCompletion = await groq.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content: "You are an ATS expert. Output ONLY a JSON object. Do not include any conversational text."
//         },
//         {
//           role: "user",
//           content: `Analyze this resume for the role: ${jobRole}. 
//           JD: ${jobDescription}. 
//           Resume: ${resumeText}. 
//           Return JSON with keys: 'score' (number), 'suggestions' (array), 'strengths' (array).`
//         },
//       ],
//       model: "llama-3.3-70b-versatile",
//       response_format: { type: "json_object" }, // 👈 Crucial: Forces JSON mode
//     });

//     return JSON.parse(chatCompletion.choices[0].message.content);
//   } catch (error) {
//     console.error("Groq API Error:", error);
//     throw new Error("AI Analysis failed to generate a valid response.");
//   }
// };