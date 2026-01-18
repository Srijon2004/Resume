// import { useState } from "react";
// import { api } from "../api/api";

// export default function Checker(){
//  const [text,setText]=useState("");
//  const [result,setResult]=useState(null);

//  const check=async()=>{
//    const res=await api.post("/resume/check",
//     { resumeText:text, jobRole:"Developer"},
//     { headers:{ Authorization:localStorage.getItem("token")}}
//    );
//    setResult(res.data);
//  };

//  return(
//   <div className="p-10">
//    <textarea onChange={e=>setText(e.target.value)}/>
//    <button onClick={check}>Check</button>
//    {result && <pre>{JSON.stringify(result,null,2)}</pre>}
//   </div>
//  );
// }

// import { useState } from "react";
// import { api } from "../api/api";
// // import { Sparkles, Loader2, Target, CheckCircle2, AlertCircle, FileText, BarChart3 } from "lucide-react";
// // import { useState } from "react";
// // import { api } from "../api/api";
// import {
//   Sparkles,
//   Loader2,
//   Target,
//   CheckCircle2,
//   AlertCircle,
//   FileText,
//   BarChart3,
//   Briefcase // Added this
// } from "lucide-react";
// export default function Checker() {
//   const [resumeText, setResumeText] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCheck = async () => {
//     if (!resumeText || !jobRole || !jobDescription) {
//       return alert("Please fill in all fields (Role, JD, and Resume) for a complete analysis!");
//     }

//     setLoading(true);
//     try {
//       // Sending all three pieces of data to your Groq backend
//       const res = await api.post(
//         "/resume/check",
//         {
//           resumeText: resumeText,
//           jobRole: jobRole,
//           jobDescription: jobDescription // Your backend must handle this new field
//         },
//         { headers: { Authorization: localStorage.getItem("token") } }
//       );
//       setResult(res.data);
//     } catch (err) {
//       console.error("AI Analysis Error:", err);
//       alert("Analysis failed. Ensure your backend /check route is ready.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans">
//       <div className="max-w-6xl mx-auto">

//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
//             <Sparkles className="text-blue-600 animate-pulse" /> AI ATS Optimizer
//           </h1>
//           <p className="text-slate-500 mt-3 text-lg">Compare your resume with a specific job description using Groq AI.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* LEFT: INPUT AREA (7 Cols) */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div>
//                   <label className="text-xs font-black uppercase text-slate-400 mb-2 block">Target Job Role</label>
//                   <div className="relative">
//                     <Target className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//                     <input
//                       type="text"
//                       placeholder="e.g. MERN Stack Developer"
//                       className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//                       onChange={(e) => setJobRole(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="text-xs font-black uppercase text-slate-400 mb-2 block">Resume Text</label>
//                   <div className="text-[10px] text-blue-500 bg-blue-50 px-2 py-1 rounded inline-block">Paste text from your PDF</div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="text-xs font-black uppercase text-slate-400 mb-2 block flex items-center gap-2">
//                     <FileText size={14}/> Job Description (JD)
//                   </label>
//                   <textarea
//                     rows={6}
//                     className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
//                     placeholder="Paste the full job description here..."
//                     onChange={(e) => setJobDescription(e.target.value)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-black uppercase text-slate-400 mb-2 block flex items-center gap-2">
//                     <Briefcase size={14}/> Your Resume Content
//                   </label>
//                   <textarea
//                     rows={10}
//                     className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm leading-relaxed"
//                     placeholder="Paste your resume text here..."
//                     onChange={(e) => setResumeText(e.target.value)}
//                   />
//                 </div>

//                 <button
//                   onClick={handleCheck}
//                   disabled={loading}
//                   className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
//                 >
//                   {loading ? <Loader2 className="animate-spin" /> : <BarChart3 size={20} />}
//                   {loading ? "Analyzing with Groq..." : "Check ATS Compatibility"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: RESULTS AREA (5 Cols) */}
//           <div className="lg:col-span-5">
//             {!result && !loading ? (
//               <div className="h-full border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center text-slate-400">
//                 <Sparkles size={60} className="mb-4 opacity-10" />
//                 <p className="font-medium">Enter your details and click check to see your AI-driven score and suggestions.</p>
//               </div>
//             ) : loading ? (
//               <div className="h-full bg-white border border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center">
//                  <div className="relative w-24 h-24 mb-6">
//                     <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
//                     <div className="absolute inset-0 border-4 border-t-blue-600 rounded-full animate-spin"></div>
//                  </div>
//                  <h3 className="text-xl font-bold text-slate-800">Analyzing Your Resume</h3>
//                  <p className="text-slate-500 text-sm mt-2 italic">Groq AI is scanning for keyword matches and missing skills...</p>
//               </div>
//             ) : (
//               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
//                 {/* MATCH SCORE CARD */}
//                 <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-xl border-b-8 border-blue-500">
//                   <h4 className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">ATS Match Rate</h4>
//                   <div className="text-7xl font-black text-white">{result.score || 0}%</div>
//                   <p className="text-slate-400 text-xs mt-4 italic">
//                     {result.score > 75 ? "Excellent! Your resume is highly compatible." : "Needs work to pass the ATS filters."}
//                   </p>
//                 </div>

//                 {/* SUGGESTIONS CARD */}
//                 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
//                   <h4 className="flex items-center gap-2 font-black text-slate-800 uppercase text-xs tracking-widest mb-4">
//                     <AlertCircle size={16} className="text-orange-500" /> Critical Improvements
//                   </h4>
//                   <ul className="space-y-3">
//                     {(result.suggestions || []).map((s, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed border-b border-slate-50 pb-2">
//                         <span className="text-orange-500 font-bold">•</span> {s}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* SKILLS DETECTED */}
//                 <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
//                   <h4 className="flex items-center gap-2 font-black text-slate-800 uppercase text-xs tracking-widest mb-4">
//                     <CheckCircle2 size={16} className="text-green-500" /> Matched Keywords
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {(result.strengths || []).map((skill, i) => (
//                       <span key={i} className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-green-100">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { api } from "../api/api";
// import * as pdfjsLib from "pdfjs-dist";
// // import * as pdfjsLib from "pdfjs-dist";
// // This import tells Vite to treat the worker as a separate file
// import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
// import {
//   Sparkles,
//   Loader2,
//   Target,
//   CheckCircle2,
//   AlertCircle,
//   FileText,
//   BarChart3,
//   Briefcase,
//   UploadCloud,
// } from "lucide-react";

// // Set worker for PDF.js
// // pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// export default function Checker() {
//   const [resumeText, setResumeText] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isParsing, setIsParsing] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");

//   // Function to extract text from PDF
//   // const handleFileUpload = async (e) => {
//   //   const file = e.target.files[0];
//   //   if (file && file.type === "application/pdf") {
//   //     setIsParsing(true);
//   //     const reader = new FileReader();

//   //     reader.onload = async (event) => {
//   //       const typedarray = new Uint8Array(event.target.result);
//   //       const pdf = await pdfjsLib.getDocument(typedarray).promise;
//   //       let fullText = "";

//   //       for (let i = 1; i <= pdf.numPages; i++) {
//   //         const page = await pdf.getPage(i);
//   //         const content = await page.getTextContent();
//   //         const strings = content.items.map(item => item.str);
//   //         fullText += strings.join(" ") + "\n";
//   //       }
//   //       setResumeText(fullText);
//   //       setIsParsing(false);
//   //     };
//   //     reader.readAsArrayBuffer(file);
//   //   } else {
//   //     alert("Please upload a valid PDF file.");
//   //   }
//   // };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];

//     if (file && file.type === "application/pdf") {
//       setIsParsing(true);
//       setUploadedFileName(file.name); // ✅ STORE FILE NAME

//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const typedarray = new Uint8Array(event.target.result);
//         const pdf = await pdfjsLib.getDocument(typedarray).promise;
//         let fullText = "";

//         for (let i = 1; i <= pdf.numPages; i++) {
//           const page = await pdf.getPage(i);
//           const content = await page.getTextContent();
//           const strings = content.items.map((item) => item.str);
//           fullText += strings.join(" ") + "\n";
//         }
//         setResumeText(fullText);
//         setIsParsing(false);
//       };

//       reader.readAsArrayBuffer(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleCheck = async () => {
//     if (!resumeText || !jobRole || !jobDescription) {
//       return alert("Ensure Role, JD, and Resume (Text or PDF) are provided!");
//     }

//     setLoading(true);
//     try {
//       const res = await api.post(
//         "/resume/check",
//         { resumeText, jobRole, jobDescription },
//         { headers: { Authorization: localStorage.getItem("token") } },
//       );
//       setResult(res.data);
//     } catch (err) {
//       console.error("AI Analysis Error:", err);
//       alert("Analysis failed. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
//             <Sparkles className="text-blue-600" /> AI Resume Checker
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-7 space-y-6">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
//               {/* JOB ROLE INPUT */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block">
//                   Target Job Role
//                 </label>
//                 <div className="relative">
//                   <Target
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     size={16}
//                   />
//                   <input
//                     type="text"
//                     placeholder="e.g. MERN Stack Developer"
//                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
//                     onChange={(e) => setJobRole(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* PDF UPLOAD AREA */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block">
//                   Upload Resume (PDF)
//                 </label>
//                 <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
//                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     {isParsing ? (
//                       <Loader2 className="animate-spin text-blue-500" />
//                     ) : (
//                       <>
//                         <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
//                         <p className="text-sm text-slate-500">
//                           Click to upload or drag and drop
//                         </p>
//                       </>
//                     )}
//                   </div>
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept=".pdf"
//                     onChange={handleFileUpload}
//                   />
//                 </label>
//               </div>

//               <div className="space-y-4">
//                 <textarea
//                   rows={4}
//                   className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm"
//                   placeholder="Paste Job Description..."
//                   onChange={(e) => setJobDescription(e.target.value)}
//                 />

//                 <textarea
//                   rows={6}
//                   value={resumeText}
//                   className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm leading-relaxed"
//                   placeholder="Resume text will appear here after upload or you can paste it manually..."
//                   onChange={(e) => setResumeText(e.target.value)}
//                 />

//                 <button
//                   onClick={handleCheck}
//                   disabled={loading || isParsing}
//                   className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
//                 >
//                   {loading ? (
//                     <Loader2 className="animate-spin" />
//                   ) : (
//                     <BarChart3 size={20} />
//                   )}
//                   {loading ? "Analyzing..." : "Analyze ATS Match"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RESULTS AREA - Keep same as previous code */}
//           <div className="lg:col-span-5">
//             {/* ... Same result rendering as before ... */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { api } from "../api/api";
// import * as pdfjsLib from "pdfjs-dist";
// import { XIcon } from "lucide-react";
// import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
// import { useNavigate } from "react-router-dom";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// import {
//   Sparkles,
//   Loader2,
//   Target,
//   AlertCircle,
//   CheckCircle2,
//   BarChart3,
//   UploadCloud,
//   FileText,
//   Briefcase,
// } from "lucide-react";

// export default function Checker() {
//   const [resumeText, setResumeText] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isParsing, setIsParsing] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const navigate = useNavigate();

//   // ===== PDF UPLOAD & TEXT EXTRACTION =====
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];

//     if (file && file.type === "application/pdf") {
//       setIsParsing(true);
//       setUploadedFileName(file.name); // ✅ SHOW FILE NAME

//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const typedarray = new Uint8Array(event.target.result);
//         const pdf = await pdfjsLib.getDocument(typedarray).promise;
//         let fullText = "";

//         for (let i = 1; i <= pdf.numPages; i++) {
//           const page = await pdf.getPage(i);
//           const content = await page.getTextContent();
//           const strings = content.items.map((item) => item.str);
//           fullText += strings.join(" ") + "\n";
//         }

//         setResumeText(fullText);
//         setIsParsing(false);
//       };

//       reader.readAsArrayBuffer(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   // ===== SEND TO AI =====
//   const handleCheck = async () => {
//     if (!resumeText || !jobRole || !jobDescription) {
//       return alert("Ensure Role, JD, and Resume are provided!");
//     }

//     setLoading(true);
//     try {
//       const res = await api.post(
//         "/resume/check",
//         { resumeText, jobRole, jobDescription },
//         {
//           headers: { Authorization: localStorage.getItem("token") },
//         },
//       );
//       setResult(res.data);
//     } catch (err) {
//       console.error("AI Analysis Error:", err);
//       alert("Analysis failed. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
//             <Sparkles className="text-blue-600" /> AI Resume Checker
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* LEFT PANEL */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
//               {/* JOB ROLE */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block">
//                   Target Job Role
//                 </label>
//                 <div className="relative">
//                   <Target
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                     size={16}
//                   />
//                   <input
//                     type="text"
//                     placeholder="e.g. MERN Stack Developer"
//                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
//                     onChange={(e) => setJobRole(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* PDF UPLOAD */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block">
//                   Upload Resume (PDF)
//                 </label>

//                 <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
//                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     {isParsing ? (
//                       <Loader2 className="animate-spin text-blue-500" />
//                     ) : (
//                       <>
//                         <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
//                         <p className="text-sm text-slate-500">
//                           Click to upload or drag and drop
//                         </p>
//                       </>
//                     )}
//                   </div>
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept=".pdf"
//                     onChange={handleFileUpload}
//                   />
//                 </label>

//                 {/* ✅ FILE UPLOADED CONFIRMATION */}
//                 {uploadedFileName && (
//                   <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
//                     <CheckCircle2 size={16} />
//                     Uploaded:{" "}
//                     <span className="font-semibold">{uploadedFileName}</span>
//                   </p>
//                 )}

//                 {/* ✅ EXTRACTING STATUS */}
//                 {isParsing && (
//                   <p className="text-sm text-blue-600 flex items-center gap-2 mt-1">
//                     <Loader2 className="animate-spin" size={14} /> Extracting
//                     text from PDF...
//                   </p>
//                 )}
//               </div>

//               {/* JOB DESCRIPTION & RESUME TEXT */}
//               <div className="space-y-4">
//                 <textarea
//                   rows={4}
//                   className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm"
//                   placeholder="Paste Job Description..."
//                   onChange={(e) => setJobDescription(e.target.value)}
//                 />

//                 {/* <textarea
//                   rows={6}
//                   value={resumeText}
//                   className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm leading-relaxed"
//                   placeholder="Resume text will appear here after upload..."
//                   onChange={(e) => setResumeText(e.target.value)}
//                 /> */}

//                 <button
//                   onClick={handleCheck}
//                   disabled={loading || isParsing}
//                   className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
//                 >
//                   {loading ? (
//                     <Loader2 className="animate-spin" />
//                   ) : (
//                     <BarChart3 size={20} />
//                   )}
//                   {loading ? "Analyzing..." : "Analyze ATS Match"}
//                 </button>
                
                
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL (RESULTS) */}
//           {/* <div className="lg:col-span-5">
//             {result ? (
//               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
//                 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <FileText /> Analysis Result
//                 </h2>

//                 <p className="text-lg font-semibold">
//                   ATS Score: {result.atsScore || "N/A"}%
//                 </p>

//                 <div className="mt-4">
//                   <h3 className="font-semibold">Suggestions:</h3>
//                   <ul className="list-disc ml-5">
//                     {result.suggestions?.map((s, i) => (
//                       <li key={i}>{s}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 text-center text-slate-500">
//                 Upload resume and analyze to see results here.
//               </div>
//             )}
//           </div> */}
//           {/* RIGHT PANEL (RESULTS) */}
//           <div className="lg:col-span-5">
//             {result ? (
//               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
//                 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <FileText /> Analysis Result
//                 </h2>

//                 {/* ATS SCORE BADGE */}
//                 <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
//                   <p className="text-sm text-blue-700 font-semibold uppercase">
//                     ATS Match Score
//                   </p>
//                   <p className="text-3xl font-extrabold text-blue-800">
//                     {result.atsScore || 0}%
//                   </p>
//                 </div>

//                 {/* STRENGTHS */}
//                 {result.strengths && result.strengths.length > 0 && (
//                   <div className="mb-4">
//                     <h3 className="font-bold text-green-700 flex items-center gap-2">
//                       <CheckCircle2 size={18} /> Strengths
//                     </h3>
//                     <ul className="list-disc ml-5 mt-2 text-sm">
//                       {result.strengths.map((s, i) => (
//                         <li key={i}>{s}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* WEAKNESSES */}
//                 {result.weaknesses && result.weaknesses.length > 0 && (
//                   <div className="mb-4">
//                     <h3 className="font-bold text-red-700 flex items-center gap-2">
//                       <AlertCircle size={18} /> Weaknesses
//                     </h3>
//                     <ul className="list-disc ml-5 mt-2 text-sm">
//                       {result.weaknesses.map((w, i) => (
//                         <li key={i}>{w}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {/* MISSING KEYWORDS */}
//                 {result.missingKeywords &&
//                   result.missingKeywords.length > 0 && (
//                     <div className="mb-4">
//                       <h3 className="font-bold text-orange-700 flex items-center gap-2">
//                         <Briefcase size={18} /> Missing Keywords
//                       </h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {result.missingKeywords.map((k, i) => (
//                           <span
//                             key={i}
//                             className="bg-orange-100 text-orange-800 px-3 py-1 text-xs rounded-full"
//                           >
//                             {k}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                 {/* SUGGESTIONS */}
//                 {result.suggestions && result.suggestions.length > 0 && (
//                   <div>
//                     <h3 className="font-bold text-blue-700">
//                       Actionable Suggestions
//                     </h3>
//                     <ul className="list-disc ml-5 mt-2 text-sm">
//                       {result.suggestions.map((s, i) => (
//                         <li key={i}>{s}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 text-center text-slate-500">
//                 Upload resume and analyze to see results here.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















// import { useState } from "react";
// import { api } from "../api/api";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
// import { useNavigate } from "react-router-dom";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// import {
//   Sparkles,
//   Loader2,
//   Target,
//   AlertCircle,
//   CheckCircle2,
//   BarChart3,
//   UploadCloud,
//   FileText,
//   Briefcase,
//   LayoutDashboard,
//   PlusCircle,
//   ArrowLeft
// } from "lucide-react";

// export default function Checker() {
//   const [resumeText, setResumeText] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isParsing, setIsParsing] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const navigate = useNavigate();

//   // ===== PDF UPLOAD & TEXT EXTRACTION =====
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];

//     if (file && file.type === "application/pdf") {
//       setIsParsing(true);
//       setUploadedFileName(file.name);

//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         try {
//           const typedarray = new Uint8Array(event.target.result);
//           const pdf = await pdfjsLib.getDocument(typedarray).promise;
//           let fullText = "";

//           for (let i = 1; i <= pdf.numPages; i++) {
//             const page = await pdf.getPage(i);
//             const content = await page.getTextContent();
//             const strings = content.items.map((item) => item.str);
//             fullText += strings.join(" ") + "\n";
//           }

//           setResumeText(fullText);
//         } catch (error) {
//           console.error("PDF Parsing Error:", error);
//           alert("Failed to extract text from PDF.");
//         } finally {
//           setIsParsing(false);
//         }
//       };

//       reader.readAsArrayBuffer(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   // ===== SEND TO AI =====
//   const handleCheck = async () => {
//     if (!resumeText || !jobRole || !jobDescription) {
//       return alert("Ensure Role, JD, and Resume are provided!");
//     }

//     setLoading(true);
//     try {
//       const res = await api.post(
//         "/resume/check",
//         { resumeText, jobRole, jobDescription },
//         {
//           headers: { Authorization: localStorage.getItem("token") },
//         },
//       );
//       setResult(res.data);
//     } catch (err) {
//       console.error("AI Analysis Error:", err);
//       alert("Analysis failed. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      
//       {/* ✅ NEW ACTION HEADER */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center shadow-sm">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors"
//         >
//           <ArrowLeft size={20} /> Back
//         </button>
        
//         <div className="flex gap-3">
//           <button 
//             onClick={() => navigate("/dashboard")} 
//             className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2 rounded-xl font-bold hover:bg-slate-200 transition-all border border-slate-200"
//           >
//             <LayoutDashboard size={18} /> Dashboard
//           </button>
//           <button 
//             onClick={() => navigate("/create")} 
//             className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
//           >
//             <PlusCircle size={18} /> Create Resume
//           </button>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto mt-10 px-4">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
//             <Sparkles className="text-blue-600 animate-pulse" /> AI Resume Checker
//           </h1>
//           <p className="text-slate-500 mt-2">Optimize your resume against specific job requirements</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* LEFT PANEL */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
//               {/* JOB ROLE */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">
//                   Target Job Role
//                 </label>
//                 <div className="relative">
//                   <Target className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//                   <input
//                     type="text"
//                     placeholder="e.g. MERN Stack Developer"
//                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
//                     onChange={(e) => setJobRole(e.target.value)}
//                   />
//                 </div>
//               </div>

//               {/* PDF UPLOAD */}
//               <div className="mb-6">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">
//                   Upload Resume (PDF)
//                 </label>

//                 <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-200 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all group">
//                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     {isParsing ? (
//                       <div className="flex flex-col items-center gap-3">
//                         <Loader2 className="animate-spin text-blue-500" size={32} />
//                         <p className="text-sm font-semibold text-blue-600">Extracting Text...</p>
//                       </div>
//                     ) : (
//                       <>
//                         <UploadCloud className="w-10 h-10 mb-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
//                         <p className="text-sm text-slate-600 font-medium">
//                           Click to upload or drag and drop
//                         </p>
//                         <p className="text-xs text-slate-400 mt-1">PDF files only (Max 10MB)</p>
//                       </>
//                     )}
//                   </div>
//                   <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
//                 </label>

//                 {uploadedFileName && !isParsing && (
//                   <div className="mt-3 p-3 bg-green-50 rounded-xl border border-green-100 flex items-center justify-between">
//                     <p className="text-sm text-green-700 flex items-center gap-2">
//                       <CheckCircle2 size={16} />
//                       Selected: <span className="font-bold">{uploadedFileName}</span>
//                     </p>
//                     <button onClick={() => {setUploadedFileName(""); setResumeText("");}} className="text-green-700 hover:text-red-500">
//                       <PlusCircle className="rotate-45" size={18} />
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* JOB DESCRIPTION */}
//               <div className="space-y-4">
//                 <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">
//                   Job Description
//                 </label>
//                 <textarea
//                   rows={6}
//                   className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
//                   placeholder="Paste the Job Description from LinkedIn, Indeed, etc..."
//                   onChange={(e) => setJobDescription(e.target.value)}
//                 />

//                 <button
//                   onClick={handleCheck}
//                   disabled={loading || isParsing}
//                   className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
//                 >
//                   {loading ? <Loader2 className="animate-spin" /> : <BarChart3 size={20} />}
//                   {loading ? "Analyzing with Groq..." : "Analyze ATS Match"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL (RESULTS) */}
//           <div className="lg:col-span-5">
//             {result ? (
//               <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 animate-in fade-in slide-in-from-right-5">
//                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
//                   <FileText className="text-blue-600" /> Analysis Result
//                 </h2>

//                 {/* ATS SCORE BADGE */}
//                 <div className="bg-slate-900 rounded-2xl p-6 mb-8 text-center shadow-inner">
//                   <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-2">
//                     ATS Match Score
//                   </p>
//                   <p className={`text-6xl font-black ${result.atsScore > 70 ? 'text-green-400' : 'text-blue-400'}`}>
//                     {result.atsScore || 0}%
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   {/* STRENGTHS */}
//                   {result.strengths && result.strengths.length > 0 && (
//                     <div className="p-4 bg-green-50/50 rounded-2xl border border-green-100">
//                       <h3 className="font-bold text-green-800 flex items-center gap-2 mb-3">
//                         <CheckCircle2 size={18} /> Strengths
//                       </h3>
//                       <ul className="space-y-2">
//                         {result.strengths.map((s, i) => (
//                           <li key={i} className="text-sm text-green-700 flex items-start gap-2">
//                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" /> {s}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* WEAKNESSES / SUGGESTIONS */}
//                   {result.suggestions && result.suggestions.length > 0 && (
//                     <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
//                       <h3 className="font-bold text-blue-800 flex items-center gap-2 mb-3">
//                         <AlertCircle size={18} /> Suggestions
//                       </h3>
//                       <ul className="space-y-2">
//                         {result.suggestions.map((s, i) => (
//                           <li key={i} className="text-sm text-blue-700 flex items-start gap-2">
//                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" /> {s}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   {/* MISSING KEYWORDS */}
//                   {result.missingKeywords && result.missingKeywords.length > 0 && (
//                     <div>
//                       <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
//                         <Briefcase size={16} /> Missing Keywords
//                       </h3>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {result.missingKeywords.map((k, i) => (
//                           <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 text-xs font-bold rounded-lg border border-slate-200 uppercase tracking-tighter">
//                             {k}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white h-[600px] p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
//                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
//                   <BarChart3 size={40} className="text-slate-200" />
//                 </div>
//                 <h3 className="text-slate-800 font-bold text-lg">Ready to Scan</h3>
//                 <p className="text-slate-400 max-w-[200px] mx-auto text-sm mt-2">
//                   Upload your resume and provide a job description to see AI insights.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




























// ok
// import { useState } from "react";
// import { api } from "../api/api";
// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
// import { useNavigate } from "react-router-dom";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

// import {
//   Sparkles,
//   Loader2,
//   Target,
//   AlertCircle,
//   CheckCircle2,
//   BarChart3,
//   UploadCloud,
//   FileText,
//   Briefcase,
//   LayoutDashboard,
//   PlusCircle,
//   ArrowLeft,
//   ChevronRight
// } from "lucide-react";

// export default function Checker() {
//   const [resumeText, setResumeText] = useState("");
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isParsing, setIsParsing] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const navigate = useNavigate();

//   // ===== PDF UPLOAD & TEXT EXTRACTION =====
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setIsParsing(true);
//       setUploadedFileName(file.name);
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         try {
//           const typedarray = new Uint8Array(event.target.result);
//           const pdf = await pdfjsLib.getDocument(typedarray).promise;
//           let fullText = "";
//           for (let i = 1; i <= pdf.numPages; i++) {
//             const page = await pdf.getPage(i);
//             const content = await page.getTextContent();
//             const strings = content.items.map((item) => item.str);
//             fullText += strings.join(" ") + "\n";
//           }
//           setResumeText(fullText);
//         } catch (error) {
//           alert("Failed to extract text from PDF.");
//         } finally {
//           setIsParsing(false);
//         }
//       };
//       reader.readAsArrayBuffer(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleCheck = async () => {
//     if (!resumeText || !jobRole || !jobDescription) {
//       return alert("Ensure Role, JD, and Resume are provided!");
//     }
//     setLoading(true);
//     try {
//       const res = await api.post("/resume/check", 
//         { resumeText, jobRole, jobDescription },
//         { headers: { Authorization: localStorage.getItem("token") } }
//       );
//       setResult(res.data);
//     } catch (err) {
//       alert("Analysis failed. Please check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
//       {/* ACTION HEADER */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <button 
//             onClick={() => navigate(-1)} 
//             className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"
//           >
//             <ArrowLeft size={20} /> Back
//           </button>
          
//           <div className="flex gap-3">
//             <button 
//               onClick={() => navigate("/dashboard")} 
//               className="flex items-center gap-2 bg-white text-slate-700 px-5 py-2 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all"
//             >
//               <LayoutDashboard size={18} /> Dashboard
//             </button>
//             <button 
//               onClick={() => navigate("/create")} 
//               className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95"
//             >
//               <PlusCircle size={18} /> Create Resume
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto mt-10 px-6">
//         {/* <header className="text-center mb-12">
//             <div className="inline-flex p-3 bg-blue-50 rounded-2xl mb-4">
//               <Sparkles className="text-blue-600 animate-pulse" size={32} />
              
//             </div>
//             <h1 className="text-4xl font-black text-slate-900 tracking-tight">AI Resume Checker</h1>
//           <p className="text-slate-500 mt-2 font-medium">Get real-time feedback and ATS optimization suggestions</p>
//         </header> */}

//         <header className="text-center mb-12 flex flex-col items-center justify-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="p-3 bg-blue-50 rounded-2xl">
//               <Sparkles className="text-blue-600 animate-pulse" size={32} />
//             </div>
//             <h1 className="text-4xl font-black text-slate-900 tracking-tight">
//               AI Resume Checker
//             </h1>
//           </div>
//           <p className="text-slate-500 font-medium">
//             Get real-time feedback and ATS optimization suggestions
//           </p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//           {/* LEFT PANEL: INPUTS */}
//           <div className="lg:col-span-7 space-y-8">
//             <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              
//               <div className="space-y-6">
//                 {/* JOB ROLE */}
//                 <div className="group">
//                   <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 mb-2 block">Target Job Role</label>
//                   <div className="relative">
//                     <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={18} />
//                     <input
//                       type="text"
//                       placeholder="e.g. Senior Frontend Developer"
//                       className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner"
//                       onChange={(e) => setJobRole(e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {/* PDF UPLOAD */}
//                 <div>
//                   <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 mb-2 block">Upload Resume (PDF)</label>
//                   <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-slate-200 border-dashed rounded-[2rem] cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all group overflow-hidden relative">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       {isParsing ? (
//                         <div className="flex flex-col items-center gap-3">
//                           <Loader2 className="animate-spin text-blue-500" size={40} />
//                           <p className="text-sm font-bold text-blue-600">Extracting Content...</p>
//                         </div>
//                       ) : (
//                         <>
//                           <div className="p-4 bg-white rounded-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform">
//                             <UploadCloud className="w-8 h-8 text-blue-500" />
//                           </div>
//                           <p className="text-sm text-slate-600 font-bold">Drop your PDF here</p>
//                           <p className="text-xs text-slate-400 mt-1">Maximum file size 10MB</p>
//                         </>
//                       )}
//                     </div>
//                     <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
//                   </label>

//                   {uploadedFileName && !isParsing && (
//                     <div className="mt-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between animate-in slide-in-from-top-2">
//                       <div className="flex items-center gap-3">
//                         <FileText className="text-blue-600" />
//                         <div>
//                           <p className="text-sm font-bold text-slate-800">{uploadedFileName}</p>
//                           <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Ready for analysis</p>
//                         </div>
//                       </div>
//                       <button onClick={() => {setUploadedFileName(""); setResumeText("");}} className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors">
//                         <PlusCircle className="rotate-45" size={20} />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* JOB DESCRIPTION */}
//                 <div>
//                   <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 mb-2 block">Job Description</label>
//                   <textarea
//                     rows={6}
//                     className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-[1.5rem] outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium leading-relaxed shadow-inner"
//                     placeholder="Paste the full job description from LinkedIn or Indeed..."
//                     onChange={(e) => setJobDescription(e.target.value)}
//                   />
//                 </div>

//                 <button
//                   onClick={handleCheck}
//                   disabled={loading || isParsing}
//                   className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98]"
//                 >
//                   {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
//                   {loading ? "AI is Thinking..." : "Start AI Analysis"}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL: RESULTS */}
//           <div className="lg:col-span-5 sticky top-28">
//             {result ? (
//               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-10 duration-500">
//                 <header className="flex justify-between items-center mb-8">
//                   <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
//                     <BarChart3 className="text-blue-600" /> Results
//                   </h2>
//                   <span className="px-4 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full">Groq AI Powered</span>
//                 </header>

//                 <div className="bg-slate-900 rounded-[2rem] p-8 mb-8 text-center relative overflow-hidden shadow-2xl">
//                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
//                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">ATS Compatibility Score</p>
//                   <p className={`text-7xl font-black ${result.atsScore > 70 ? 'text-green-400' : 'text-blue-400'}`}>
//                     {result.atsScore || 0}<span className="text-3xl">%</span>
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   <ResultSection icon={<CheckCircle2 className="text-green-500"/>} title="Strengths" items={result.strengths} bgColor="bg-green-50/50" textColor="text-green-800" />
//                   <ResultSection icon={<AlertCircle className="text-blue-500"/>} title="Suggestions" items={result.suggestions} bgColor="bg-blue-50/50" textColor="text-blue-800" />
                  
//                   {result.missingKeywords?.length > 0 && (
//                     <div className="pt-4">
//                       <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
//                         <Briefcase size={14} /> Missing Skills/Keywords
//                       </h3>
//                       <div className="flex flex-wrap gap-2">
//                         {result.missingKeywords.map((k, i) => (
//                           <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1.5 text-[11px] font-bold rounded-xl border border-slate-200">
//                             {k}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white h-[680px] p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
//                 <div className="w-32 h-32 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner group-hover:rotate-12 transition-transform">
//                   <BarChart3 size={60} className="text-slate-200" />
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-800 tracking-tight">Ready for Optimization</h3>
//                 <p className="text-slate-400 max-w-[280px] mx-auto text-sm mt-3 font-medium leading-relaxed">
//                   Upload your professional resume and the job listing to see how you rank against recruiters' expectations.
//                 </p>
//                 <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-6 py-3 rounded-2xl">
//                   AI match analysis <ChevronRight size={14}/>
//                 </div>
//               </div>
//             )}
//           </div>
    
          
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Sub-component for result sections
// // function ResultSection({ icon, title, items, bgColor, textColor }) {
// //   if (!items || items.length === 0) return null;
// //   return (
// //     <div className={`p-5 ${bgColor} rounded-2xl border border-white/50 shadow-sm`}>
// //       <h3 className={`font-black text-xs uppercase tracking-widest flex items-center gap-2 mb-3 ${textColor}`}>
// //         {icon} {title}
// //       </h3>
// //       <ul className="space-y-2.5">
// //         {items.map((item, i) => (
// //           <li key={i} className="text-sm text-slate-700 flex items-start gap-2 leading-snug font-medium">
// //             <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
// //             {item}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// function ResultSection({ icon, title, items, bgColor, textColor, badgeColor }) {
//   if (!items || items.length === 0) return null;

//   return (
//     <div className={`p-6 ${bgColor} rounded-[2rem] border border-white/50 shadow-sm mb-6 animate-in slide-in-from-right-4`}>
//       <h3 className={`font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 mb-5 ${textColor}`}>
//         {icon} {title}
//       </h3>

//       <div className="space-y-4">
//         {items.map((item, i) => {
//           // Logic to split "Title: Description" from AI response
//           const parts = item.split(":");
//           const heading = parts.length > 1 ? parts[0] : null;
//           const description = parts.length > 1 ? parts.slice(1).join(":") : item;

//           return (
//             <div
//               key={i}
//               className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80 hover:shadow-md transition-all group"
//             >
//               {/* Step Number Badge */}
//               <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${badgeColor} text-white text-xs font-black shadow-sm group-hover:scale-110 transition-transform`}>
//                 {i + 1}
//               </span>

//               <div>
//                 {heading && (
//                   <p className="text-sm font-black text-slate-800 mb-1 leading-tight">
//                     {heading.trim()}
//                   </p>
//                 )}
//                 <p className="text-sm text-slate-600 font-medium leading-relaxed">
//                   {description.trim()}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import { api } from "../api/api";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
import { useNavigate } from "react-router-dom";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

import {
  Sparkles, Loader2, Target, AlertCircle, CheckCircle2,
  BarChart3, UploadCloud, FileText, Briefcase,
  LayoutDashboard, PlusCircle, ArrowLeft, ChevronRight
} from "lucide-react";

export default function Checker() {
  const [resumeText, setResumeText] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setIsParsing(true);
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const typedarray = new Uint8Array(event.target.result);
          const pdf = await pdfjsLib.getDocument(typedarray).promise;
          let fullText = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map((item) => item.str).join(" ") + "\n";
          }
          setResumeText(fullText);
        } catch (error) {
          alert("Failed to extract text from PDF.");
        } finally {
          setIsParsing(false);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // const handleCheck = async () => {
  //   if (!resumeText || !jobRole || !jobDescription) {
  //     return alert("Ensure Role, JD, and Resume are provided!");
  //   }
  //   setLoading(true);
  //   try {
  //     const res = await api.post("/resume/check", 
  //       { resumeText, jobRole, jobDescription },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     );
      
  //     // ✅ FIX: Clean AI response if it contains markdown code blocks
  //     let data = res.data;
  //     if (typeof data === 'string') {
  //       const jsonMatch = data.match(/\{[\s\S]*\}/);
  //       if (jsonMatch) data = JSON.parse(jsonMatch[0]);
  //     }
  //     setResult(data);
  //   } catch (err) {
  //     alert("Analysis failed. Please check your connection.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };




  // const handleCheck = async () => {
  //   if (!resumeText || !jobRole || !jobDescription) {
  //     return alert("Ensure Role, JD, and Resume are provided!");
  //   }
  //   setLoading(true);
  //   try {
  //     const res = await api.post("/resume/check", 
  //       { resumeText, jobRole, jobDescription },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     );

  //     // ✅ NEW CLEANER LOGIC: Extracts JSON even if wrapped in markdown
  //     let data = res.data;
  //     if (typeof data === 'string') {
  //       const jsonMatch = data.match(/\{[\s\S]*\}/); // Finds content between first { and last }
  //       if (jsonMatch) {
  //         data = JSON.parse(jsonMatch[0]);
  //       }
  //     }
      
  //     setResult(data);
  //   } catch (err) {
  //     console.error("Analysis Error:", err);
  //     alert("AI Analysis failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  // const handleCheck = async () => {
  //   if (!resumeText || !jobRole || !jobDescription) {
  //     return alert("Ensure Role, JD, and Resume are provided!");
  //   }
  //   setLoading(true);
  //   try {
  //     const res = await api.post("/resume/check", 
  //       { resumeText, jobRole, jobDescription },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     );

  //     let data = res.data;

  //     // If the backend sends a string (because JSON.parse failed there), 
  //     // we clean it here. If it's already an object, we use it directly.
  //     if (typeof data === 'string') {
  //       const jsonMatch = data.match(/\{[\s\S]*\}/);
  //       if (jsonMatch) {
  //         data = JSON.parse(jsonMatch[0]);
  //       }
  //     }
      
  //     setResult(data);
  //   } catch (err) {
  //     console.error("Analysis Error:", err);
  //     alert("AI Analysis failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // const handleCheck = async () => {
  //   if (!resumeText || !jobRole || !jobDescription) {
  //     return alert("Ensure Role, JD, and Resume are provided!");
  //   }

  //   setLoading(true);
  //   try {
  //     const res = await api.post(
  //       "/resume/check",
  //       { resumeText, jobRole, jobDescription },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     );

  //     let data = res.data;

  //     // ---- CLEAN & EXTRACT JSON IF AI SENT TEXT + MARKDOWN ----
  //     if (typeof data === "string") {
  //       const jsonMatch = data.match(/\{[\s\S]*\}/);
  //       if (jsonMatch) {
  //         data = JSON.parse(jsonMatch[0]);
  //       }
  //     }

  //     // ---- NORMALIZE SHAPE SO UI NEVER BREAKS ----
  //     data = {
  //       atsScore: data.atsScore ?? 0,
  //       strengths: Array.isArray(data.strengths) ? data.strengths : [],
  //       suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
  //       missingKeywords: Array.isArray(data.missingKeywords)
  //         ? data.missingKeywords
  //         : [],
  //       weaknesses: Array.isArray(data.weaknesses)
  //         ? data.weaknesses
  //         : [],
  //     };

  //     console.log("FINAL CLEANED RESULT:", data); // <-- Keep this for debugging
  //     setResult(data);
  //   } catch (err) {
  //     console.error("Analysis Error:", err);
  //     alert("Invalid AI response format.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleCheck = async () => {
    if (!resumeText || !jobRole || !jobDescription) {
      return alert("Ensure Role, JD, and Resume are provided!");
    }

    setLoading(true);
    try {
      const res = await api.post(
        "/resume/check",
        { resumeText, jobRole, jobDescription },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      let data = res.data;

      // 🔥 STRONG CLEANING LOGIC (fixes your exact screenshot issue)
      if (typeof data === "string") {
        // 1) Remove everything before the first {
        const start = data.indexOf("{");
        const end = data.lastIndexOf("}");

        if (start !== -1 && end !== -1) {
          const jsonText = data.substring(start, end + 1);
          data = JSON.parse(jsonText);
        }
      }

      // 🔥 Normalize shape so UI never breaks
      // data = {
      //   atsScore: data.atsScore ?? 0,
      //   strengths: Array.isArray(data.strengths) ? data.strengths : [],
      //   suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
      //   missingKeywords: Array.isArray(data.missingKeywords)
      //     ? data.missingKeywords
      //     : [],
      //   weaknesses: Array.isArray(data.weaknesses)
      //     ? data.weaknesses
      //     : [],
      // };


      data = {
          atsScore: data.atsScore ?? 0,

          strengths:
            typeof data.strengths === "string"
              ? data.strengths
                  .split(/\n|•|-|1\.|2\.|3\.|4\./) // break into lines
                  .map(s => s.trim())
                  .filter(s => s.length > 2)
              : Array.isArray(data.strengths)
              ? data.strengths
              : [],

          suggestions:
            typeof data.suggestions === "string"
              ? data.suggestions
                  .split(/\n|•|-|1\.|2\.|3\.|4\./) // VERY IMPORTANT LINE
                  .map(s => s.trim())
                  .filter(s => s.length > 2)
              : Array.isArray(data.suggestions)
              ? data.suggestions
              : [],

          missingKeywords: Array.isArray(data.missingKeywords)
            ? data.missingKeywords
            : [],

          weaknesses:
            typeof data.weaknesses === "string"
              ? [data.weaknesses]
              : Array.isArray(data.weaknesses)
              ? data.weaknesses
              : [],
        };


      console.log("FINAL CLEANED RESULT:", data);
      setResult(data);
    } catch (err) {
      console.error("Analysis Error:", err);
      alert("Invalid AI response format.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      {/* HEADER NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-all">
          <ArrowLeft size={20} /> Back
        </button>
        <div className="flex gap-3">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2 rounded-xl font-bold hover:bg-slate-200 transition-all border border-slate-200">
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button onClick={() => navigate("/create")} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95 transition-all">
            <PlusCircle size={18} /> Create Resume
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto mt-10 px-6">
        {/* ✅ FIXED TITLE: ICON AND TEXT IN ONE LINE */}
        <header className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-2xl">
              <Sparkles className="text-blue-600 animate-pulse" size={32} />
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">AI Resume Checker</h1>
          </div>
          <p className="text-slate-500 font-medium">Get real-time feedback and ATS optimization suggestions</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT PANEL: INPUTS */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2 block ml-1">Target Job Role</label>
                  <div className="relative group">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500" size={18} />
                    <input type="text" placeholder="e.g. Full Stack Developer" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium" onChange={(e) => setJobRole(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2 block ml-1">Resume Upload (PDF)</label>
                  <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-slate-200 border-dashed rounded-[2rem] cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-all overflow-hidden relative">
                    <div className="flex flex-col items-center justify-center">
                      {isParsing ? <Loader2 className="animate-spin text-blue-500" size={40} /> : <UploadCloud className="w-10 h-10 text-slate-400 mb-2" />}
                      <p className="text-sm text-slate-600 font-bold">{isParsing ? "Extracting..." : "Click to upload PDF"}</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                  </label>
                  {uploadedFileName && !isParsing && <p className="mt-3 text-xs font-bold text-green-600 flex items-center gap-2"><CheckCircle2 size={14}/> {uploadedFileName} ready!</p>}
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2 block ml-1">Job Description</label>
                  <textarea rows={6} className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-[1.5rem] outline-none focus:border-blue-400 focus:bg-white transition-all text-sm leading-relaxed" placeholder="Paste JD here..." onChange={(e) => setJobDescription(e.target.value)} />
                </div>

                <button onClick={handleCheck} disabled={loading || isParsing} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-200 flex items-center justify-center gap-3 active:scale-95 transition-all">
                  {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                  {loading ? "Analyzing..." : "Analyze ATS Match"}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: FORMATTED RESULTS */}
          {/* <div className="lg:col-span-5 sticky top-28 space-y-6">
            {result ? (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                  <BarChart3 className="text-blue-600" /> AI Insights
                </h2>

                <div className="bg-slate-900 rounded-[2rem] p-8 mb-8 text-center shadow-2xl relative overflow-hidden">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">ATS Compatibility</p>
                  <p className={`text-7xl font-black ${result.atsScore > 70 ? 'text-green-400' : 'text-blue-400'}`}>
                    {result.atsScore || 0}%
                  </p>
                </div>

                <div className="space-y-6">
                  <ResultSection icon={<CheckCircle2 size={16}/>} title="Strengths" items={result.strengths} bgColor="bg-green-50/50" textColor="text-green-800" badgeColor="bg-green-500" />
                  <ResultSection icon={<AlertCircle size={16}/>} title="Suggestions" items={result.suggestions} bgColor="bg-blue-50/50" textColor="text-blue-800" badgeColor="bg-blue-600" />
                </div>
              </div>
            ) : (
              <div className="bg-white h-[680px] p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                <BarChart3 size={60} className="text-slate-200 mb-6" />
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Ready for Optimization</h3>
                <p className="text-slate-400 max-w-[280px] mx-auto text-sm mt-3 leading-relaxed">Upload your resume and the job listing to see how you rank against recruiters' expectations.</p>
              </div>
            )}
          </div> */}
          {/* RIGHT PANEL: RESULTS */}
          {/* <div className="lg:col-span-5 sticky top-28">
            {result ? (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Sparkles className="text-blue-600" size={24} /> AI Analysis
                </h2>

                {/* ATS SCORE BADGE 
                <div className="bg-slate-900 rounded-[2rem] p-8 mb-8 text-center shadow-2xl relative overflow-hidden">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">ATS Score Match</p>
                  <p className={`text-7xl font-black ${result.atsScore > 70 ? 'text-green-400' : 'text-blue-400'}`}>
                    {result.atsScore || 0}%
                  </p>
                </div>

                <div className="space-y-4">
                  <ResultSection 
                    icon={<AlertCircle size={16}/>} 
                    title="Weaknesses" 
                    items={result.weaknesses} 
                    bgColor="bg-red-50/50" 
                    textColor="text-red-800" 
                    badgeColor="bg-red-500"
                  />
                  <ResultSection 
                    icon={<CheckCircle2 size={16}/>} 
                    title="Top Strengths" 
                    items={result.strengths} 
                    bgColor="bg-green-50/50" 
                    textColor="text-green-800" 
                    badgeColor="bg-green-500"
                  />
                  
                  <ResultSection 
                    icon={<AlertCircle size={16}/>} 
                    title="Key Suggestions" 
                    items={result.suggestions} 
                    bgColor="bg-blue-50/50" 
                    textColor="text-blue-800" 
                    badgeColor="bg-blue-600"
                  />

                  {/* MISSING KEYWORDS TAGS 
                  {result.missingKeywords?.length > 0 && (
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Briefcase size={14} /> Missing Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.missingKeywords.map((k, i) => (
                          <span key={i} className="bg-white text-slate-600 px-3 py-1.5 text-[11px] font-bold rounded-xl border border-slate-200 shadow-sm transition-transform hover:scale-105">
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white h-[680px] p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                {/* Your existing empty state code 
              </div>
            )}
          </div> */}


          {/* RIGHT PANEL: RESULTS */}
          {/* <div className="lg:col-span-5 sticky top-28">
            {result ? (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Sparkles className="text-blue-600" size={24} /> AI Analysis
                </h2>

                {/* ATS SCORE CARD 
                <div className="bg-slate-900 rounded-[2rem] p-8 mb-8 text-center shadow-2xl">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                    ATS Score Match
                  </p>
                  <p
                    className={`text-7xl font-black ${
                      result.atsScore > 70 ? "text-green-400" : "text-blue-400"
                    }`}
                  >
                    {result.atsScore}%
                  </p>
                </div>

                <div className="space-y-5">
                  {/* WEAKNESSES 
                  <ResultSection
                    icon={<AlertCircle size={16} />}
                    title="Weaknesses"
                    items={result.weaknesses}
                    bgColor="bg-red-50/50"
                    textColor="text-red-800"
                    badgeColor="bg-red-500"
                  />

                  {/* STRENGTHS 
                  <ResultSection
                    icon={<CheckCircle2 size={16} />}
                    title="Top Strengths"
                    items={result.strengths}
                    bgColor="bg-green-50/50"
                    textColor="text-green-800"
                    badgeColor="bg-green-500"
                  />

                  {/* SUGGESTIONS 
                  <ResultSection
                    icon={<AlertCircle size={16} />}
                    title="Key Suggestions"
                    items={result.suggestions}
                    bgColor="bg-blue-50/50"
                    textColor="text-blue-800"
                    badgeColor="bg-blue-600"
                  />

                  {/* MISSING KEYWORDS TAGS 
                  {result.missingKeywords?.length > 0 && (
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Briefcase size={14} /> Missing Keywords
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {result.missingKeywords.map((k, i) => (
                          <span
                            key={i}
                            className="bg-white text-slate-600 px-3 py-1.5 text-[11px] font-bold rounded-xl border border-slate-200 shadow-sm"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white h-[680px] p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                <BarChart3 size={60} className="text-slate-200 mb-6" />
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                  Ready for Optimization
                </h3>
                <p className="text-slate-400 max-w-[280px] mx-auto text-sm mt-3 leading-relaxed">
                  Upload your resume and the job listing to see how you rank against recruiters'
                  expectations.
                </p>
              </div>
            )}
          </div> */}


          {/* RIGHT PANEL: RESULTS */}
                  <div className="lg:col-span-5 sticky top-28">
                    {result ? (
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                          <Sparkles className="text-blue-600" size={24} />
                          AI Analysis Result
                        </h2>

                        {/* ATS SCORE */}
                        <div className="bg-slate-900 rounded-[2rem] p-6 mb-6 text-center">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
                            ATS Score Match
                          </p>
                          <p className="text-6xl font-black text-blue-400">
                            {result.atsScore}%
                          </p>
                        </div>

                        {/* WEAKNESSES */}
                        <ResultSection
                          icon={<AlertCircle size={16} />}
                          title="Weaknesses"
                          items={result.weaknesses}
                          bgColor="bg-red-50/50"
                          textColor="text-red-800"
                          badgeColor="bg-red-500"
                        />

                        {/* STRENGTHS */}
                        <ResultSection
                          icon={<CheckCircle2 size={16} />}
                          title="Top Strengths"
                          items={result.strengths}
                          bgColor="bg-green-50/50"
                          textColor="text-green-800"
                          badgeColor="bg-green-500"
                        />

                        {/* SUGGESTIONS */}
                        <ResultSection
                          icon={<AlertCircle size={16} />}
                          title="Key Suggestions"
                          items={result.suggestions}
                          bgColor="bg-blue-50/50"
                          textColor="text-blue-800"
                          badgeColor="bg-blue-600"
                        />

                        {/* MISSING KEYWORDS */}
                        {result.missingKeywords.length > 0 && (
                          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 mt-6">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <Briefcase size={14} /> Missing Keywords
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {result.missingKeywords.map((k, i) => (
                                <span
                                  key={i}
                                  className="bg-white px-3 py-1.5 text-xs font-bold rounded-xl border"
                                >
                                  {k}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-white h-[680px] p-10 rounded-[2.5rem] shadow-xl border flex items-center justify-center text-center">
                        <p className="text-slate-400 font-bold">
                          Upload resume & job description to see result
                        </p>
                      </div>
                    )}
                  </div>

        


                </div>
              </div>
            </div>
          );
        }

// ✅ REFINED SUGGESTION COMPONENT
// function ResultSection({ icon, title, items, bgColor, textColor, badgeColor }) {
//   if (!items || items.length === 0) return null;
//   const listItems = Array.isArray(items) ? items : [items];

//   return (
//     <div className={`p-6 ${bgColor} rounded-[2rem] border border-white/50 shadow-sm animate-in slide-in-from-right-4`}>
//       <h3 className={`font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 mb-5 ${textColor}`}>
//         {icon} {title}
//       </h3>
//       <div className="space-y-4">
//         {listItems.map((item, i) => {
//           const parts = item.split(":");
//           const heading = parts.length > 1 ? parts[0] : null;
//           const description = parts.length > 1 ? parts.slice(1).join(":") : item;

//           return (
//             <div key={i} className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80 hover:shadow-md transition-all group">
//               <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${badgeColor} text-white text-xs font-black shadow-sm group-hover:scale-110 transition-transform`}>
//                 {i + 1}
//               </span>
//               <div>
//                 {heading && <p className="text-sm font-black text-slate-800 mb-1 leading-tight">{heading.trim()}</p>}
//                 <p className="text-sm text-slate-600 font-medium leading-relaxed">{description.trim()}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



// function ResultSection({ icon, title, items, bgColor, textColor, badgeColor }) {
//   if (!items || items.length === 0) return null;
  
//   // Ensure we are working with an array
//   const listItems = Array.isArray(items) ? items : [items];

//   return (
//     <div className={`p-6 ${bgColor} rounded-[2rem] border border-white/50 shadow-sm mb-6 animate-in slide-in-from-right-4`}>
//       <h3 className={`font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 mb-5 ${textColor}`}>
//         {icon} {title}
//       </h3>

//       <div className="space-y-4">
//         {listItems.map((item, i) => {
//           // Split "Title: Description" if the AI uses that format
//           const parts = item.split(":");
//           const heading = parts.length > 1 ? parts[0] : null;
//           const description = parts.length > 1 ? parts.slice(1).join(":") : item;

//           return (
//             <div
//               key={i}
//               className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80 hover:shadow-md transition-all group"
//             >
//               {/* Step Number Badge */}
//               <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${badgeColor} text-white text-[10px] font-black shadow-sm group-hover:scale-110 transition-transform`}>
//                 {i + 1}
//               </span>

//               <div>
//                 {heading && (
//                   <p className="text-sm font-black text-slate-800 mb-1 leading-tight">
//                     {heading.trim()}
//                   </p>
//                 )}
//                 <p className="text-sm text-slate-600 font-medium leading-relaxed">
//                   {description.trim()}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



function ResultSection({ icon, title, items, bgColor, textColor, badgeColor }) {
  // Convert everything into an array of clean sentences
  let listItems = [];

  if (typeof items === "string") {
    // Remove JSON, backticks, and split into sentences
    listItems = items
      .replace(/```[\s\S]*```/g, "") // remove markdown code blocks
      .replace(/\{[\s\S]*\}/g, "") // remove raw JSON
      .split(".")
      .map(s => s.trim())
      .filter(s => s.length > 0);
  } 
  else if (Array.isArray(items)) {
    listItems = items;
  }

  if (listItems.length === 0) return null;

  return (
    <div className={`p-6 ${bgColor} rounded-[2rem] border shadow-sm mb-4`}>
      <h3 className={`font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 mb-4 ${textColor}`}>
        {icon} {title}
      </h3>

      <div className="space-y-3">
        {listItems.map((item, i) => {
          return (
            <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border">
              <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${badgeColor} text-white text-[10px] font-bold`}>
                {i + 1}
              </span>
              <p className="text-sm text-slate-700 font-medium">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
