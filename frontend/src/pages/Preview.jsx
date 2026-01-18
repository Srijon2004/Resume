// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Preview(){
//  const [resume,setResume]=useState(null);

//  useEffect(()=>{
//   api.get("/resume/my",{ headers:{Authorization:localStorage.getItem("token")}})
//    .then(r=>setResume(r.data[0]));
//  },[]);

//  if(!resume) return null;

//  return(
//   <div className="p-10">
//     <h1 className="text-xl font-bold">{resume.jobRole}</h1>
//     <p>Skills: {resume.skills.join(", ")}</p>
//   </div>
//  );
// }

// export default function Preview(){
//   const data = JSON.parse(localStorage.getItem("result"));
//   return(
//     <div style={{padding:30}}>
//       <h2>ATS Score: {data?.atsScore}%</h2>
//       <h3>Missing Skills</h3>
//       <ul>{data?.missingSkills.map((x,i)=><li key={i}>{x}</li>)}</ul>
//       <h3>Suggestions</h3>
//       <ul>{data?.finalSuggestions.map((x,i)=><li key={i}>{x}</li>)}</ul>
//       <button onClick={()=>window.location="/download"}>Download Resume</button>
//     </div>
//   );
// }

// export default function Preview() {
//   const resume = JSON.parse(localStorage.getItem("selectedResume"));

//   if (!resume) return <p>No resume selected.</p>;

//   return (
//     <div className="p-10">
//       <h2 className="text-xl font-bold">{resume.jobRole}</h2>
//       <p className="mt-4 whitespace-pre-wrap">{resume.content}</p>

//       <button
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//         onClick={() => (window.location = "/download")}
//       >
//         Download PDF
//       </button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { api } from "../api/api";
// import { useSearchParams } from "react-router-dom";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("id");

//   const [resume, setResume] = useState(null);

//   useEffect(() => {
//     const fetchResume = async () => {
//       const res = await api.get(`/resume/${id}`, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       setResume(res.data);
//     };

//     if (id) fetchResume();
//   }, [id]);

//   if (!resume) return <p>Loading...</p>;

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold">{resume.jobRole}</h1>
//       <p className="text-gray-600">Created by: {resume.user?.name}</p>
//       <pre className="mt-4 bg-gray-100 p-4 rounded">
//         {resume.content}
//       </pre>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { api } from "../api/api";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("id");

//   const [resume, setResume] = useState(null);

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         if (id) {
//           const res = await api.get(`/resume/${id}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           setResume(res.data);
//         } else {
//           const stored = localStorage.getItem("result");
//           if (stored) setResume(JSON.parse(stored));
//         }
//       } catch (err) {
//         console.log("Error fetching resume", err);
//       }
//     };

//     fetchResume();
//   }, [id]);

//   if (!resume) {
//     return <p className="text-center mt-10">Loading resume...</p>;
//   }

//   // If your builder stored plain text, split it into sections
//   const lines = resume.content
//     ? resume.content.split("\n").filter(l => l.trim() !== "")
//     : [];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
//       <div className="bg-white shadow-xl p-10 max-w-3xl w-full border border-gray-300">

//         {/* HEADER */}
//         <div className="text-center border-b pb-4 mb-6">
//           <h1 className="text-3xl font-bold uppercase">
//             {lines[0]?.replace("Name:", "") || "Your Name"}
//           </h1>
//           <p className="text-gray-600 mt-1">
//             {lines.find(l => l.startsWith("Email:"))?.replace("Email:", "").trim()} |
//             {lines.find(l => l.startsWith("Phone:"))?.replace("Phone:", "").trim()}
//           </p>
//           <p className="text-gray-600">
//             {lines.find(l => l.startsWith("Location:"))?.replace("Location:", "").trim()}
//           </p>
//         </div>

//         {/* SUMMARY */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1">PROFESSIONAL SUMMARY</h2>
//           <p className="mt-2 text-gray-700">
//             {lines
//               .slice(
//                 lines.findIndex(l => l.startsWith("Summary:")) + 1,
//                 lines.findIndex(l => l.startsWith("Education:"))
//               )
//               .join(" ")}
//           </p>
//         </section>

//         {/* EDUCATION */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1">EDUCATION</h2>
//           <p className="mt-2 text-gray-700">
//             {lines
//               .slice(
//                 lines.findIndex(l => l.startsWith("Education:")) + 1,
//                 lines.findIndex(l => l.startsWith("Skills:"))
//               )
//               .join(" ")}
//           </p>
//         </section>

//         {/* SKILLS */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1">SKILLS</h2>
//           <ul className="mt-2 grid grid-cols-2 gap-2 list-disc ml-5">
//             {lines
//               .find(l => l.startsWith("Skills:"))
//               ?.replace("Skills:", "")
//               .split(",")
//               .map((s, i) => (
//                 <li key={i}>{s.trim()}</li>
//               ))}
//           </ul>
//         </section>

//         {/* EXPERIENCE */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1">EXPERIENCE</h2>
//           <p className="mt-2 text-gray-700">
//             {lines
//               .slice(
//                 lines.findIndex(l => l.startsWith("Experience:")) + 1,
//                 lines.findIndex(l => l.startsWith("Achievements:"))
//               )
//               .join(" ")}
//           </p>
//         </section>

//         {/* ACHIEVEMENTS */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold border-b pb-1">ACHIEVEMENTS</h2>
//           <p className="mt-2 text-gray-700">
//             {lines
//               .slice(
//                 lines.findIndex(l => l.startsWith("Achievements:")) + 1,
//                 lines.findIndex(l => l.startsWith("Hobbies:"))
//               )
//               .join(" ")}
//           </p>
//         </section>

//         {/* HOBBIES */}
//         <section>
//           <h2 className="text-xl font-semibold border-b pb-1">HOBBIES</h2>
//           <p className="mt-2 text-gray-700">
//             {lines
//               .find(l => l.startsWith("Hobbies:"))
//               ?.replace("Hobbies:", "")}
//           </p>
//         </section>

//         {/* ACTION BUTTONS */}
//         <div className="mt-8 flex justify-between">
//           <a href="/dashboard" className="text-blue-600 underline">
//             ← Back to Dashboard
//           </a>
//           <a href={`/download?id=${id}`} className="bg-green-600 text-white px-4 py-2 rounded">
//             Download PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { api } from "../api/api";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const resumeId = searchParams.get("id");

//   const [resume, setResume] = useState(null);

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         let data;

//         if (resumeId) {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           data = res.data;
//         } else {
//           data = JSON.parse(localStorage.getItem("result"));
//         }

//         setResume(data);
//       } catch (err) {
//         console.log("Error loading resume", err);
//       }
//     };

//     fetchResume();
//   }, [resumeId]);

//   if (!resume) {
//     return <p className="text-center mt-10">Loading resume...</p>;
//   }

//   return (
//     <div className="flex justify-center bg-gray-200 min-h-screen p-6">
//       <div className="bg-white shadow-md p-8 max-w-3xl w-full border border-gray-300 font-sans text-sm">

//         {/* HEADER */}
//         <div className="text-center border-b pb-3 mb-4">
//           <h1 className="text-2xl font-bold uppercase tracking-wide">
//             {resume.fullName || "YOUR NAME"}
//           </h1>
//           <p className="mt-1">
//             {resume.phone} | {resume.email} | {resume.location}
//           </p>
//           <p className="mt-1">
//             {resume.linkedin && `LinkedIn: ${resume.linkedin}`}{" "}
//             {resume.github && ` | GitHub: ${resume.github}`}
//           </p>
//         </div>

//         {/* SUMMARY */}
//         <Section title="PROFESSIONAL SUMMARY">
//           <p className="whitespace-pre-wrap">{resume.summary}</p>
//         </Section>

//         {/* EDUCATION */}
//         <Section title="EDUCATION">
//           <p>
//             <strong>{resume.education?.degree}</strong>,{" "}
//             {resume.education?.college} — {resume.education?.year}
//           </p>
//           {resume.education?.cgpa && (
//             <p>CGPA: {resume.education.cgpa}</p>
//           )}
//         </Section>

//         {/* SKILLS */}
//         <Section title="SKILLS">
//           <ul className="list-disc ml-5">
//             {resume.skills?.split(",").map((s, i) => (
//               <li key={i}>{s.trim()}</li>
//             ))}
//           </ul>
//         </Section>

//         {/* PROJECTS */}
//         <Section title="PROJECTS">
//           <p className="whitespace-pre-wrap">{resume.projects}</p>
//         </Section>

//         {/* EXPERIENCE */}
//         <Section title="EXPERIENCE">
//           <p className="whitespace-pre-wrap">
//             {resume.experience || "Fresher"}
//           </p>
//         </Section>

//         {/* ACHIEVEMENTS */}
//         <Section title="ACHIEVEMENTS">
//           <p className="whitespace-pre-wrap">
//             {resume.achievements || "—"}
//           </p>
//         </Section>

//         {/* HOBBIES */}
//         <Section title="HOBBIES">
//           <p>{resume.hobbies || "—"}</p>
//         </Section>

//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div className="mb-4">
//       <h2 className="font-bold uppercase border-b mb-2">{title}</h2>
//       {children}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { api } from "../api/api";
// import { Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Target, Folder } from "lucide-react"; // Assuming lucide-react for icons

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const resumeId = searchParams.get("id");
//   const [resume, setResume] = useState(null);

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         let data;
//         if (resumeId) {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           data = res.data;
//         } else {
//           data = JSON.parse(localStorage.getItem("result"));
//         }
//         setResume(data);
//       } catch (err) {
//         console.log("Error loading resume", err);
//       }
//     };
//     fetchResume();
//   }, [resumeId]);

// //   if (!resume) return <p className="text-center mt-10 text-gray-500">Loading resume...</p>;

// //   return (
// //     <div className="flex justify-center bg-gray-200 min-h-screen p-4 sm:p-10 font-sans">
// //       {/* Main Resume Container */}
// //       <div className="bg-white max-w-4xl w-full shadow-2xl flex flex-col border-8 border-[#FFD700]">

// //         {/* DARK HEADER */}
// //         <div className="bg-[#2D3E50] text-white p-8 flex justify-end items-center">
// //           <div className="text-right">
// //             <h1 className="text-4xl font-bold uppercase tracking-widest leading-tight">
// //               {resume.fullName || "RIYA SHARMA"}
// //             </h1>
// //             <p className="text-xl font-light tracking-widest text-gray-300">
// //               {resume.education?.degree?.includes("Computer") ? "COMPUTER SCIENCE GRADUATE" : "PROFESSIONAL"}
// //             </p>
// //           </div>
// //         </div>

// //         <div className="flex flex-1">
// //           {/* SIDEBAR (Left Column) */}
// //           <div className="w-1/3 bg-[#E5E7E9] p-6 flex flex-col gap-8">
// //             {/* Profile Image Placeholder */}
// //             <div className="w-40 h-40 bg-gray-400 rounded-full mx-auto border-4 border-white overflow-hidden -mt-20">
// //               <div className="w-full h-full flex items-center justify-center text-gray-200">
// //                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 mt-8"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
// //               </div>
// //             </div>

// //             {/* CONTACT */}
// //             <div>
// //               <h3 className="font-bold text-lg border-b-2 border-gray-400 mb-3 uppercase tracking-wider">Contact</h3>
// //               <ul className="space-y-3 text-sm">
// //                 <li className="flex items-center gap-2"><Phone size={14}/> {resume.phone || "+91-0000000000"}</li>
// //                 <li className="flex items-center gap-2 overflow-hidden truncate"><Mail size={14}/> {resume.email}</li>
// //                 <li className="flex items-center gap-2"><MapPin size={14}/> {resume.location || "City, State"}</li>
// //                 <li className="flex items-center gap-2"><Linkedin size={14}/> {resume.linkedin ? "LinkedIn" : "N/A"}</li>
// //               </ul>
// //             </div>

// //             {/* CERTIFICATIONS */}
// //             <div>
// //               <h3 className="font-bold text-lg border-b-2 border-gray-400 mb-3 uppercase tracking-wider">Certifications</h3>
// //               <ul className="list-disc ml-4 text-sm space-y-1">
// //                 {resume.certifications ? resume.certifications.split(',').map((c, i) => <li key={i}>{c}</li>) : <li>Standard Certification</li>}
// //               </ul>
// //             </div>

// //             {/* LANGUAGES */}
// //             <div>
// //               <h3 className="font-bold text-lg border-b-2 border-gray-400 mb-3 uppercase tracking-wider">Languages</h3>
// //               <ul className="list-disc ml-4 text-sm">
// //                 <li>English (Fluent)</li>
// //                 <li>Hindi (Native)</li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* MAIN CONTENT (Right Column) */}
// //           <div className="w-2/3 p-8 bg-white">

// //             {/* CAREER OBJECTIVE */}
// //             <Section icon={<Target size={20}/>} title="Career Objective">
// //               <p className="text-gray-700 leading-relaxed text-sm">
// //                 {resume.summary || "Motivated professional eager to apply programming and analytical skills in a dynamic organization to contribute to impactful projects."}
// //               </p>
// //             </Section>

// //             {/* KEY SKILLS */}
// //             <Section icon={<Briefcase size={20}/>} title="Key Skills">
// //               <ul className="list-disc ml-4 grid grid-cols-1 gap-1 text-sm text-gray-700">
// //                 {Array.isArray(resume.skills)
// //                   ? resume.skills.map((s, i) => <li key={i}>{s}</li>)
// //                   : resume.skills?.split(',').map((s, i) => <li key={i}>{s.trim()}</li>) || <li>General Skills</li>
// //                 }
// //               </ul>
// //             </Section>

// //             {/* EDUCATION */}
// //             <Section icon={<GraduationCap size={20}/>} title="Education">
// //               <div className="text-sm">
// //                 <p className="font-bold text-gray-800">{resume.education?.degree || "B.Tech in Computer Science"}</p>
// //                 <p className="text-gray-600">{resume.education?.college || "XYZ University"} | {resume.education?.year || "2024"}</p>
// //                 {resume.education?.cgpa && <p className="text-gray-600 italic">CGPA: {resume.education.cgpa}</p>}
// //               </div>
// //             </Section>

// //             {/* ACADEMIC PROJECTS */}
// //             <Section icon={<Folder size={20}/>} title="Academic Projects">
// //               <div className="space-y-4 text-sm">
// //                 <div className="whitespace-pre-wrap text-gray-700">
// //                   {resume.projects || "No project details provided."}
// //                 </div>
// //               </div>
// //             </Section>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="p-4 text-right text-[10px] text-gray-400 border-t">
// //           © Shine.com. All rights reserved
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// console.log("Current Resume Data:", resume);
// if (!resume) return <p className="text-center mt-10 text-gray-500">Loading resume...</p>;

//   return (
//     <div className="flex justify-center bg-gray-200 min-h-screen p-4 sm:p-10 font-sans">
//       <div className="bg-white max-w-4xl w-full shadow-2xl flex flex-col border-8 border-[#FFD700]">

//         {/* HEADER */}
//         <div className="bg-[#2D3E50] text-white p-8 flex justify-end items-center">
//           <div className="text-right">
//             <h1 className="text-4xl font-bold uppercase tracking-widest leading-tight">
//               {resume.fullName || resume.name || "YOUR NAME"}
//             </h1>
//             <p className="text-xl font-light tracking-widest text-gray-300 uppercase">
//               {resume.jobTitle || resume.designation || "Professional"}
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-1">
//           {/* SIDEBAR */}
//           <div className="w-1/3 bg-[#E5E7E9] p-6 flex flex-col gap-8">
//             <div className="w-40 h-40 bg-gray-400 rounded-full mx-auto border-4 border-white overflow-hidden -mt-20">
//                <img
//                 src={resume.profileImage || "https://via.placeholder.com/150"}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//                />
//             </div>

//             {/* CONTACT - Checking multiple possible keys */}
//             <div>
//               <h3 className="font-bold text-lg border-b-2 border-gray-400 mb-3 uppercase tracking-wider">Contact</h3>
//               <ul className="space-y-3 text-sm">
//                 <li className="flex items-center gap-2"><Phone size={14}/> {resume.phone || resume.phoneNumber || "Not Provided"}</li>
//                 <li className="flex items-center gap-2 truncate"><Mail size={14}/> {resume.email || resume.emailAddress || "Not Provided"}</li>
//                 <li className="flex items-center gap-2"><MapPin size={14}/> {resume.location || resume.address || "City, State"}</li>
//                 <li className="flex items-center gap-2"><Linkedin size={14}/> {resume.linkedin || "N/A"}</li>
//               </ul>
//             </div>

//             {/* CERTIFICATIONS */}
//             <div>
//               <h3 className="font-bold text-lg border-b-2 border-gray-400 mb-3 uppercase tracking-wider">Certifications</h3>
//               <ul className="list-disc ml-4 text-sm space-y-1">
//                 {resume.certifications ? (
//                   Array.isArray(resume.certifications)
//                     ? resume.certifications.map((c, i) => <li key={i}>{c}</li>)
//                     : resume.certifications.split(',').map((c, i) => <li key={i}>{c.trim()}</li>)
//                 ) : <li>No certifications added</li>}
//               </ul>
//             </div>
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="w-2/3 p-8 bg-white">
//             <Section icon={<Target size={20}/>} title="Career Objective">
//               <p className="text-gray-700 leading-relaxed text-sm">
//                 {resume.summary || resume.objective || "No objective provided."}
//               </p>
//             </Section>

//             <Section icon={<Briefcase size={20}/>} title="Key Skills">
//               <ul className="list-disc ml-4 grid grid-cols-2 gap-1 text-sm text-gray-700">
//                 {resume.skills ? (
//                   Array.isArray(resume.skills)
//                     ? resume.skills.map((s, i) => <li key={i}>{s}</li>)
//                     : resume.skills.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)
//                 ) : <li>No skills listed</li>}
//               </ul>
//             </Section>

//             <Section icon={<GraduationCap size={20}/>} title="Education">
//               <div className="text-sm">
//                 <p className="font-bold text-gray-800">{resume.education?.degree || "Degree not specified"}</p>
//                 <p className="text-gray-600">{resume.education?.college || resume.education?.school} | {resume.education?.year || "Year"}</p>
//                 {resume.education?.cgpa && <p className="text-gray-600 italic">CGPA: {resume.education.cgpa}</p>}
//               </div>
//             </Section>

//             <Section icon={<Folder size={20}/>} title="Academic Projects">
//               <div className="text-sm text-gray-700 whitespace-pre-wrap">
//                 {/* Check if projects is a string or an array */}
//                 {typeof resume.projects === 'string' ? resume.projects : "No project details provided."}
//                 {Array.isArray(resume.projects) && resume.projects.map((p, i) => (
//                     <div key={i} className="mb-2">
//                         <strong>{p.title}</strong>: {p.description}
//                     </div>
//                 ))}
//               </div>
//             </Section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({ icon, title, children }) {
//   return (
//     <div className="mb-8 relative">
//       <div className="flex items-center gap-3 mb-4">
//         <div className="bg-[#2D3E50] text-white p-2 rounded-full">
//           {icon}
//         </div>
//         <h2 className="font-bold uppercase text-lg tracking-widest text-[#2D3E50] flex-1 border-b border-gray-300 pb-1">
//           {title}
//         </h2>
//       </div>
//       <div className="pl-12 border-l-2 border-gray-200 ml-[18px]">
//         {children}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { api } from "../api/api";
// import { Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Target, Folder, Award, Globe } from "lucide-react";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const resumeId = searchParams.get("id");
//   const [resume, setResume] = useState(null);

//   const parseContent = (text, label) => {
//     if (!text) return "";
//     const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`, "i");
//     const match = text.match(regex);
//     return match ? match[1].trim() : "";
//   };

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         let data;
//         if (resumeId) {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           data = res.data;
//         } else {
//           data = JSON.parse(localStorage.getItem("result"));
//         }
//         setResume(data);
//       } catch (err) {
//         console.log("Error loading resume", err);
//       }
//     };
//     fetchResume();
//   }, [resumeId]);

//   if (!resume) return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//     </div>
//   );

//   const raw = resume.content || "";
//   const userData = {
//     name: parseContent(raw, "Name") || resume.jobRole?.replace(" Resume", ""),
//     phone: parseContent(raw, "Phone"),
//     email: parseContent(raw, "Email"),
//     location: parseContent(raw, "Location") || "City, State",
//     summary: parseContent(raw, "Summary") || parseContent(raw, "Objective") || parseContent(raw, "Experience"),
//     education: parseContent(raw, "Education"),
//     projects: parseContent(raw, "Projects") || parseContent(raw, "Academic Projects"),
//     skills: parseContent(raw, "Skills")?.split(",") || [],
//     achievements: parseContent(raw, "Achievements"),
//   };

//   return (
//     <div className="flex justify-center bg-[#f0f2f5] min-h-screen p-4 sm:p-10 font-sans text-slate-800">
//       {/* Container with Yellow Accent Border */}
//       <div className="bg-white max-w-[900px] w-full shadow-[0_0_50px_rgba(0,0,0,0.1)] flex flex-col border-t-[12px] border-[#FFD700] rounded-sm overflow-hidden">

//         {/* HEADER SECTION */}
//         <div className="bg-[#1e293b] text-white p-10 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-center md:text-left">
//             <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-none mb-2">
//               {userData.name}
//             </h1>
//             <div className="h-1 w-20 bg-[#FFD700] mx-auto md:mx-0 mb-3"></div>
//             <p className="text-lg font-medium tracking-[0.2em] text-slate-300 uppercase italic">
//               Professional Candidate
//             </p>
//           </div>

//           <div className="hidden md:block w-32 h-32 bg-slate-700 rounded-full border-4 border-slate-600 flex items-center justify-center">
//             <span className="text-4xl font-bold text-slate-400">{userData.name?.[0]}</span>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row flex-1">
//           {/* LEFT SIDEBAR */}
//           <div className="w-full md:w-[32%] bg-[#f8fafc] p-8 border-r border-slate-100">

//             <SidebarSection title="Contact">
//               <ul className="space-y-4 text-[13px]">
//                 <li className="flex items-center gap-3"><Phone size={16} className="text-slate-500"/> {userData.phone || "N/A"}</li>
//                 <li className="flex items-center gap-3 break-all"><Mail size={16} className="text-slate-500"/> {userData.email}</li>
//                 <li className="flex items-center gap-3"><MapPin size={16} className="text-slate-500"/> {userData.location}</li>
//                 <li className="flex items-center gap-3"><Linkedin size={16} className="text-slate-500"/> LinkedIn Profile</li>
//               </ul>
//             </SidebarSection>

//             <SidebarSection title="Technical Skills">
//               <div className="flex flex-wrap gap-2">
//                 {userData.skills.length > 0 ? (
//                   userData.skills.map((s, i) => (
//                     <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
//                       {s.trim()}
//                     </span>
//                   ))
//                 ) : <span className="text-slate-400 text-xs italic">Update skills in editor</span>}
//               </div>
//             </SidebarSection>

//             <SidebarSection title="Languages">
//               <div className="space-y-2 text-[13px]">
//                 <div className="flex justify-between"><span>English</span><span className="text-slate-400">Fluent</span></div>
//                 <div className="flex justify-between"><span>Hindi</span><span className="text-slate-400">Native</span></div>
//               </div>
//             </SidebarSection>

//           </div>

//           {/* RIGHT MAIN CONTENT */}
//           <div className="w-full md:w-[68%] p-10 bg-white">

//             <MainSection icon={<Target size={18}/>} title="Career Objective">
//               <p className="text-slate-600 text-[14px] leading-relaxed italic">
//                 "{userData.summary || "Highly motivated professional seeking to leverage background in technology and analysis to drive organizational success."}"
//               </p>
//             </MainSection>

//             <MainSection icon={<GraduationCap size={18}/>} title="Education">
//               <div className="relative pl-2">
//                 <p className="font-bold text-slate-800 text-[15px]">{userData.education || "Bachelor's Degree"}</p>
//                 <div className="text-slate-500 text-xs mt-1">Class of 2024 • Academic Excellence</div>
//               </div>
//             </MainSection>

//             <MainSection icon={<Folder size={18}/>} title="Projects & Experience">
//               <div className="text-[14px] text-slate-600 whitespace-pre-line leading-relaxed">
//                 {userData.projects || "Key Academic Projects and Internships"}
//               </div>
//             </MainSection>

//             {userData.achievements && (
//               <MainSection icon={<Award size={18}/>} title="Achievements">
//                 <p className="text-[14px] text-slate-600 whitespace-pre-line leading-relaxed italic">
//                   {userData.achievements}
//                 </p>
//               </MainSection>
//             )}

//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
//            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">References available upon request</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SidebarSection({ title, children }) {
//   return (
//     <div className="mb-10">
//       <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b pb-2">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function MainSection({ icon, title, children }) {
//   return (
//     <div className="mb-10 group">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="bg-[#FFD700] text-slate-900 p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
//           {icon}
//         </div>
//         <h2 className="font-bold uppercase text-lg tracking-tight text-slate-800 flex-1">
//           {title}
//         </h2>
//         <div className="h-[1px] bg-slate-100 flex-grow ml-2"></div>
//       </div>
//       <div className="pl-14">
//         {children}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState, useRef } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   GraduationCap,
//   Briefcase,
//   Target,
//   Folder,
//   Award,
//   Download,
//   Edit3,
//   Loader2,
// } from "lucide-react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const resumeId = searchParams.get("id");
//   const [resume, setResume] = useState(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const resumeRef = useRef(); // Reference for PDF capture

//   const parseContent = (text, label) => {
//     if (!text) return "";
//     const regex = new RegExp(
//       `${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`,
//       "i",
//     );
//     const match = text.match(regex);
//     return match ? match[1].trim() : "";
//   };

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         let data;
//         if (resumeId) {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           data = res.data;
//         } else {
//           data = JSON.parse(localStorage.getItem("result"));
//         }
//         setResume(data);
//       } catch (err) {
//         console.log("Error loading resume", err);
//       }
//     };
//     fetchResume();
//   }, [resumeId]);

//   const downloadPDF = async () => {
//     setIsDownloading(true);
//     const element = resumeRef.current;
//     const canvas = await html2canvas(element, { scale: 2, useCORS: true });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`${userData.name || "Resume"}.pdf`);
//     setIsDownloading(false);
//   };

//   if (!resume)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
//       </div>
//     );

//   const raw = resume.content || "";
//   const userData = {
//     name: parseContent(raw, "Name") || resume.jobRole?.replace(" Resume", ""),
//     phone: parseContent(raw, "Phone"),
//     email: parseContent(raw, "Email"),
//     location: parseContent(raw, "Location") || "City, State",
//     summary:
//       parseContent(raw, "Summary") ||
//       parseContent(raw, "Objective") ||
//       parseContent(raw, "Experience"),
//     education: parseContent(raw, "Education"),
//     projects:
//       parseContent(raw, "Projects") || parseContent(raw, "Academic Projects"),
//     skills: parseContent(raw, "Skills")?.split(",") || [],
//     achievements: parseContent(raw, "Achievements"),
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen pb-20">
//       {/* ACTION HEADER */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b p-4 flex justify-center gap-4 shadow-sm">
//         <button
//           onClick={() => navigate(`/editor?id=${resumeId}`)} // Ensure this matches your route
//           className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-all shadow-md"
//         >
//           <Edit3 size={18} /> Edit Resume
//         </button>
//         <button
//           onClick={downloadPDF}
//           disabled={isDownloading}
//           className="flex items-center gap-2 bg-[#FFD700] text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-md disabled:opacity-50"
//         >
//           {isDownloading ? (
//             <Loader2 className="animate-spin" size={18} />
//           ) : (
//             <Download size={18} />
//           )}
//           {isDownloading ? "Generating..." : "Download PDF"}
//         </button>
//       </div>

//       {/* RESUME DISPLAY */}
//       <div className="flex justify-center p-4 sm:p-10">
//         <div
//           ref={resumeRef}
//           className="bg-white max-w-[850px] w-full flex flex-col border-t-[12px] border-[#FFD700] shadow-2xl"
//         >
//           {/* HEADER */}
//           <div className="bg-[#1e293b] text-white p-10 flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-none mb-2">
//                 {userData.name}
//               </h1>
//               <div className="h-1 w-20 bg-[#FFD700] mx-auto md:mx-0 mb-3"></div>
//               <p className="text-lg font-medium tracking-[0.2em] text-slate-300 uppercase italic">
//                 Professional Candidate
//               </p>
//             </div>
//             <div className="w-28 h-28 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-600">
//               <span className="text-4xl font-bold text-slate-400">
//                 {userData.name?.[0]}
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row flex-1">
//             {/* SIDEBAR */}
//             <div className="w-full md:w-[32%] bg-[#f8fafc] p-8 border-r border-slate-100">
//               <SidebarSection title="Contact">
//                 <ul className="space-y-4 text-[13px]">
//                   <li className="flex items-center gap-3">
//                     <Phone size={14} /> {userData.phone || "N/A"}
//                   </li>
//                   <li className="flex items-center gap-3 break-all">
//                     <Mail size={14} /> {userData.email}
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <MapPin size={14} /> {userData.location}
//                   </li>
//                 </ul>
//               </SidebarSection>
//               <SidebarSection title="Skills">
//                 <div className="flex flex-wrap gap-2">
//                   {userData.skills.map((s, i) => (
//                     <span
//                       key={i}
//                       className="bg-slate-200 px-2 py-1 rounded text-[10px] font-bold uppercase"
//                     >
//                       {s.trim()}
//                     </span>
//                   ))}
//                 </div>
//               </SidebarSection>
//             </div>

//             {/* MAIN */}
//             <div className="w-full md:w-[68%] p-10">
//               <MainSection icon={<Target size={18} />} title="Career Objective">
//                 <p className="text-slate-600 text-[14px] leading-relaxed italic">
//                   "{userData.summary}"
//                 </p>
//               </MainSection>
//               <MainSection icon={<GraduationCap size={18} />} title="Education">
//                 <p className="font-bold text-slate-800 text-[15px]">
//                   {userData.education}
//                 </p>
//               </MainSection>
//               <MainSection icon={<Folder size={18} />} title="Projects">
//                 <p className="text-[14px] text-slate-600 whitespace-pre-line">
//                   {userData.projects}
//                 </p>
//               </MainSection>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Components
// function SidebarSection({ title, children }) {
//   return (
//     <div className="mb-8">
//       <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 border-b pb-1">
//         {title}
//       </h3>
//       {children}
//     </div>
//   );
// }

// function MainSection({ icon, title, children }) {
//   return (
//     <div className="mb-10">
//       <div className="flex items-center gap-4 mb-3">
//         <div className="bg-[#FFD700] p-2 rounded-lg">{icon}</div>
//         <h2 className="font-bold uppercase text-lg text-slate-800">{title}</h2>
//       </div>
//       <div className="pl-14">{children}</div>
//     </div>
//   );
// }














// import { useEffect, useState, useRef } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   GraduationCap,
//   Briefcase,
//   Target,
//   Folder,
//   Award,
//   Download,
//   Edit3,
//   Loader2,
//   Github,
//   Linkedin,
//   Trophy,
//   Heart,
//   User, // Added for fallback icon
// } from "lucide-react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function Preview() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const resumeId = searchParams.get("id");
//   const [resume, setResume] = useState(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const resumeRef = useRef();

//   const parseContent = (text, label) => {
//     if (!text) return "";
//     const regex = new RegExp(
//       `${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`,
//       "i",
//     );
//     const match = text.match(regex);
//     return match ? match[1].trim() : "";
//   };

//   useEffect(() => {
//     const fetchResume = async () => {
//       try {
//         let data;
//         if (resumeId) {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           data = res.data;
//         } else {
//           data = JSON.parse(localStorage.getItem("result"));
//         }
//         setResume(data);
//       } catch (err) {
//         console.log("Error loading resume", err);
//       }
//     };
//     fetchResume();
//   }, [resumeId]);

//   const downloadPDF = async () => {
//     setIsDownloading(true);
//     const element = resumeRef.current;
    
//     // Improved canvas settings for better image quality
//     const canvas = await html2canvas(element, { 
//       scale: 2, 
//       useCORS: true,
//       logging: false,
//       allowTaint: true 
//     });
    
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`${userData.name || "Resume"}.pdf`);
//     setIsDownloading(false);
//   };

//   if (!resume)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
//       </div>
//     );

//   const raw = resume.content || "";
//   const userData = {
//     name:
//       parseContent(raw, "FullName") ||
//       parseContent(raw, "Name") ||
//       resume.jobRole?.replace(" Resume", ""),
//     phone: parseContent(raw, "Phone"),
//     email: parseContent(raw, "Email"),
//     linkedin: parseContent(raw, "LinkedIn"),
//     github: parseContent(raw, "GitHub"),
//     location: parseContent(raw, "Location") || "City, State",
//     summary: parseContent(raw, "Summary") || parseContent(raw, "Objective"),
//     education: parseContent(raw, "Education"),
//     projects:
//       parseContent(raw, "Projects") || parseContent(raw, "Academic Projects"),
//     experience:
//       parseContent(raw, "Experience") || parseContent(raw, "Internship"),
//     // Prioritize the skills array from the schema
//     skills: (resume.skills && resume.skills.length > 0) 
//       ? resume.skills 
//       : parseContent(raw, "Skills")?.split(",") || [],
//     image: resume.image || "", // Pulling image from schema
//     achievements: parseContent(raw, "Achievements"),
//     hobbies: parseContent(raw, "Hobbies"),
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen pb-20 font-sans">
//       {/* STICKY ACTION HEADER */}
//       <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b p-4 flex justify-center gap-4 shadow-sm">
//         <button
//           onClick={() => navigate(`/editor?id=${resumeId}`)}
//           className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-all shadow-md"
//         >
//           <Edit3 size={18} /> Edit Resume
//         </button>
//         <button
//           onClick={downloadPDF}
//           disabled={isDownloading}
//           className="flex items-center gap-2 bg-[#FFD700] text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-md disabled:opacity-50"
//         >
//           {isDownloading ? (
//             <Loader2 className="animate-spin" size={18} />
//           ) : (
//             <Download size={18} />
//           )}
//           {isDownloading ? "Generating..." : "Download PDF"}
//         </button>
//       </div>

//       <div className="flex justify-center p-4 sm:p-10">
//         <div
//           ref={resumeRef}
//           className="bg-white max-w-[850px] w-full flex flex-col border-t-[12px] border-[#FFD700] shadow-2xl overflow-hidden"
//         >
//           {/* HEADER */}
//           <div className="bg-[#1e293b] text-white p-10 flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-none mb-2 italic">
//                 {userData.name}
//               </h1>
//               <div className="h-1 w-20 bg-[#FFD700] mx-auto md:mx-0 mb-3"></div>
//               <p className="text-lg font-medium tracking-[0.2em] text-slate-300 uppercase italic">
//                 {resume.jobRole || "Professional"}
//               </p>
//             </div>
//             {/* PROFILE IMAGE DISPLAY */}
//             <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-600 shadow-lg overflow-hidden shrink-0">
//               {userData.image ? (
//                 <img 
//                   src={userData.image} 
//                   alt="Profile" 
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="text-4xl font-bold text-[#FFD700]">
//                   {userData.name?.[0] || <User size={40} />}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row flex-1">
//             {/* SIDEBAR */}
//             <div className="w-full md:w-[35%] bg-[#f8fafc] p-8 border-r border-slate-100">
//               <SidebarSection title="Contact">
//                 <ul className="space-y-4 text-[13px] text-slate-700">
//                   <li className="flex items-center gap-3">
//                     <MapPin size={14} className="text-blue-500" />{" "}
//                     {userData.location}
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <Phone size={14} className="text-blue-500" />{" "}
//                     {userData.phone}
//                   </li>
//                   <li className="flex items-center gap-3 break-all">
//                     <Mail size={14} className="text-blue-500" />{" "}
//                     {userData.email}
//                   </li>
//                   {userData.linkedin && (
//                     <li className="flex items-center gap-3">
//                       <Linkedin size={14} className="text-blue-500" />
//                       <a
//                         href={`https://${userData.linkedin.replace('https://', '')}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline text-blue-600"
//                       >
//                         LinkedIn
//                       </a>
//                     </li>
//                   )}
//                   {userData.github && (
//                     <li className="flex items-center gap-3">
//                       <Github size={14} className="text-slate-900" />
//                       <a
//                         href={`https://${userData.github.replace('https://', '')}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:underline text-blue-600"
//                       >
//                         GitHub
//                       </a>
//                     </li>
//                   )}
//                 </ul>
//               </SidebarSection>

//               <SidebarSection title="Technical Skills">
//                 <div className="flex flex-wrap gap-2">
//                   {userData.skills.length > 0 ? (
//                     userData.skills.map((s, i) => (
//                       <span
//                         key={i}
//                         className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider border border-slate-300"
//                       >
//                         {s.trim()}
//                       </span>
//                     ))
//                   ) : (
//                     <span className="text-slate-400 text-xs italic">
//                       No skills added
//                     </span>
//                   )}
//                 </div>
//               </SidebarSection>

//               {userData.hobbies && (
//                 <SidebarSection title="Hobbies">
//                   <div className="flex items-start gap-2 text-[13px] text-slate-600 italic">
//                     <Heart size={14} className="mt-1 text-rose-500" />
//                     <p>{userData.hobbies}</p>
//                   </div>
//                 </SidebarSection>
//               )}
//             </div>

//             {/* MAIN CONTENT */}
//             <div className="w-full md:w-[65%] p-10 space-y-8">
//               <MainSection icon={<Target size={18} />} title="Career Objective">
//                 <p className="text-slate-600 text-[14px] leading-relaxed italic border-l-4 border-slate-200 pl-4">
//                   "{userData.summary}"
//                 </p>
//               </MainSection>

//               <MainSection icon={<GraduationCap size={18} />} title="Education">
//                 <div className="text-slate-700 whitespace-pre-line text-[14px]">
//                   {userData.education}
//                 </div>
//               </MainSection>

//               <MainSection icon={<Folder size={18} />} title="Key Projects">
//                 <div className="text-[14px] text-slate-600 whitespace-pre-line leading-relaxed">
//                   {userData.projects}
//                 </div>
//               </MainSection>

//               {userData.experience && (
//                 <MainSection icon={<Briefcase size={18} />} title="Experience">
//                   <div className="text-[14px] text-slate-600 whitespace-pre-line">
//                     {userData.experience}
//                   </div>
//                 </MainSection>
//               )}

//               {userData.achievements && (
//                 <MainSection icon={<Trophy size={18} />} title="Achievements">
//                   <div className="text-[14px] text-slate-600 whitespace-pre-line">
//                     {userData.achievements}
//                   </div>
//                 </MainSection>
//               )}
//             </div>
//           </div>
          
//           {/* Footer Branding (matching image 1) */}
//           <div className="bg-white p-4 text-right">
//             <p className="text-[10px] text-gray-400">© Shine.com. All rights reserved</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sidebar/Main section helper functions remain the same as your provided code
// function SidebarSection({ title, children }) {
//   return (
//     <div className="mb-8">
//       <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-1 italic">
//         {title}
//       </h3>
//       {children}
//     </div>
//   );
// }

// function MainSection({ icon, title, children }) {
//   return (
//     <div className="relative">
//       <div className="flex items-center gap-4 mb-3">
//         <div className="bg-[#FFD700] p-2 rounded-lg text-slate-900 shadow-sm">
//           {icon}
//         </div>
//         <h2 className="font-bold uppercase text-lg text-slate-800 tracking-tight">
//           {title}
//         </h2>
//       </div>
//       <div className="pl-14 border-l-2 border-slate-100 ml-4 pb-4">
//         {children}
//       </div>
//     </div>
//   );
// }

















import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
  Folder,
  Award,
  Download,
  Edit3,
  Loader2,
  Github,
  Linkedin,
  Trophy,
  Heart,
  User,
  LayoutDashboard, // Added Dashboard Icon
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Preview() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resumeId = searchParams.get("id");
  const [resume, setResume] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef();

  const parseContent = (text, label) => {
    if (!text) return "";
    const regex = new RegExp(
      `${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`,
      "i",
    );
    const match = text.match(regex);
    return match ? match[1].trim() : "";
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        let data;
        if (resumeId) {
          const res = await api.get(`/resume/${resumeId}`, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          data = res.data;
        } else {
          data = JSON.parse(localStorage.getItem("result"));
        }
        setResume(data);
      } catch (err) {
        console.log("Error loading resume", err);
      }
    };
    fetchResume();
  }, [resumeId]);

  const downloadPDF = async () => {
    setIsDownloading(true);
    const element = resumeRef.current;
    
    const canvas = await html2canvas(element, { 
      scale: 2, 
      useCORS: true,
      logging: false,
      allowTaint: true 
    });
    
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${userData.name || "Resume"}.pdf`);
    setIsDownloading(false);
  };

  if (!resume)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );

  const raw = resume.content || "";
  const userData = {
    name:
      parseContent(raw, "FullName") ||
      parseContent(raw, "Name") ||
      resume.jobRole?.replace(" Resume", ""),
    phone: parseContent(raw, "Phone"),
    email: parseContent(raw, "Email"),
    linkedin: parseContent(raw, "LinkedIn"),
    github: parseContent(raw, "GitHub"),
    location: parseContent(raw, "Location") || "City, State",
    summary: parseContent(raw, "Summary") || parseContent(raw, "Objective"),
    education: parseContent(raw, "Education"),
    projects:
      parseContent(raw, "Projects") || parseContent(raw, "Academic Projects"),
    experience:
      parseContent(raw, "Experience") || parseContent(raw, "Internship"),
    skills: (resume.skills && resume.skills.length > 0) 
      ? resume.skills 
      : parseContent(raw, "Skills")?.split(",") || [],
    image: resume.image || "",
    achievements: parseContent(raw, "Achievements"),
    hobbies: parseContent(raw, "Hobbies"),
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-20 font-sans">
      {/* UPDATED STICKY ACTION HEADER */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b p-4 flex justify-center gap-4 shadow-sm">
        {/* NEW DASHBOARD BUTTON */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-2 rounded-full font-medium hover:bg-slate-200 transition-all border border-slate-200 shadow-sm"
        >
          <LayoutDashboard size={18} /> Dashboard
        </button>

        <button
          onClick={() => navigate(`/editor?id=${resumeId}`)}
          className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-all shadow-md"
        >
          <Edit3 size={18} /> Edit Resume
        </button>
        
        <button
          onClick={downloadPDF}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-[#FFD700] text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-md disabled:opacity-50"
        >
          {isDownloading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <Download size={18} />
          )}
          {isDownloading ? "Generating..." : "Download PDF"}
        </button>
      </div>

      <div className="flex justify-center p-4 sm:p-10">
        <div
          ref={resumeRef}
          className="bg-white max-w-[850px] w-full flex flex-col border-t-[12px] border-[#FFD700] shadow-2xl overflow-hidden"
        >
          {/* HEADER */}
          <div className="bg-[#1e293b] text-white p-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-extrabold uppercase tracking-tighter leading-none mb-2 italic">
                {userData.name}
              </h1>
              <div className="h-1 w-20 bg-[#FFD700] mx-auto md:mx-0 mb-3"></div>
              <p className="text-lg font-medium tracking-[0.2em] text-slate-300 uppercase italic">
                {resume.jobRole || "Professional"}
              </p>
            </div>
            <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center border-4 border-slate-600 shadow-lg overflow-hidden shrink-0">
              {userData.image ? (
                <img 
                  src={userData.image} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-bold text-[#FFD700]">
                  {userData.name?.[0] || <User size={40} />}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1">
            <div className="w-full md:w-[35%] bg-[#f8fafc] p-8 border-r border-slate-100">
              <SidebarSection title="Contact">
                <ul className="space-y-4 text-[13px] text-slate-700">
                  <li className="flex items-center gap-3">
                    <MapPin size={14} className="text-blue-500" /> {userData.location}
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={14} className="text-blue-500" /> {userData.phone}
                  </li>
                  <li className="flex items-center gap-3 break-all">
                    <Mail size={14} className="text-blue-500" /> {userData.email}
                  </li>
                  {userData.linkedin && (
                    <li className="flex items-center gap-3">
                      <Linkedin size={14} className="text-blue-500" />
                      <a href={`https://${userData.linkedin.replace('https://', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">LinkedIn</a>
                    </li>
                  )}
                  {userData.github && (
                    <li className="flex items-center gap-3">
                      <Github size={14} className="text-slate-900" />
                      <a href={`https://${userData.github.replace('https://', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">GitHub</a>
                    </li>
                  )}
                </ul>
              </SidebarSection>

              <SidebarSection title="Technical Skills">
                <div className="flex flex-wrap gap-2">
                  {userData.skills.length > 0 ? (
                    userData.skills.map((s, i) => (
                      <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider border border-slate-300">
                        {s.trim()}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-400 text-xs italic">No skills added</span>
                  )}
                </div>
              </SidebarSection>

              {userData.hobbies && (
                <SidebarSection title="Hobbies">
                  <div className="flex items-start gap-2 text-[13px] text-slate-600 italic">
                    <Heart size={14} className="mt-1 text-rose-500" />
                    <p>{userData.hobbies}</p>
                  </div>
                </SidebarSection>
              )}
            </div>

            <div className="w-full md:w-[65%] p-10 space-y-8">
              <MainSection icon={<Target size={18} />} title="Career Objective">
                <p className="text-slate-600 text-[14px] leading-relaxed italic border-l-4 border-slate-200 pl-4">
                  "{userData.summary}"
                </p>
              </MainSection>

              <MainSection icon={<GraduationCap size={18} />} title="Education">
                <div className="text-slate-700 whitespace-pre-line text-[14px]">
                  {userData.education}
                </div>
              </MainSection>

              <MainSection icon={<Folder size={18} />} title="Key Projects">
                <div className="text-[14px] text-slate-600 whitespace-pre-line leading-relaxed">
                  {userData.projects}
                </div>
              </MainSection>

              {userData.experience && (
                <MainSection icon={<Briefcase size={18} />} title="Experience">
                  <div className="text-[14px] text-slate-600 whitespace-pre-line">
                    {userData.experience}
                  </div>
                </MainSection>
              )}

              {userData.achievements && (
                <MainSection icon={<Trophy size={18} />} title="Achievements">
                  <div className="text-[14px] text-slate-600 whitespace-pre-line">
                    {userData.achievements}
                  </div>
                </MainSection>
              )}
            </div>
          </div>
          
          <div className="bg-white p-4 text-right">
            <p className="text-[10px] text-gray-400">© Shine.com. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-1 italic">
        {title}
      </h3>
      {children}
    </div>
  );
}

function MainSection({ icon, title, children }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-[#FFD700] p-2 rounded-lg text-slate-900 shadow-sm">
          {icon}
        </div>
        <h2 className="font-bold uppercase text-lg text-slate-800 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="pl-14 border-l-2 border-slate-100 ml-4 pb-4">
        {children}
      </div>
    </div>
  );
}