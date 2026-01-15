import Groq from "groq-sdk";

export async function analyzeResume(resumeText, jobRole) {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
  });

  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY missing in .env");
  }

  const prompt = `
You are an ATS resume analyzer.

Job Role: ${jobRole}
Resume:
${resumeText}

Return ONLY JSON:
{
 "atsScore": number,
 "missingSkills": [],
 "grammarFix": [],
 "improvedPoints": [],
 "finalSuggestions": []
}
`;

  const chat = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3
  });

  return JSON.parse(chat.choices[0].message.content);
}
