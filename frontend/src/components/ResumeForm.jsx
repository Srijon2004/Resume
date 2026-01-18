// import { useState } from "react";
// import { api } from "../api/api";

// export default function ResumeForm(){
//  const [jobRole,setJob]=useState("");
//  const [skills,setSkills]=useState("");

//  const submit=async()=>{
//   await api.post("/resume/create",
//    { jobRole, skills:skills.split(",") },
//    { headers:{ Authorization:localStorage.getItem("token")}}
//   );
//   alert("Resume saved");
//  };

//  return(
//   <div className="p-10">
//     <input placeholder="Job Role" onChange={e=>setJob(e.target.value)}/>
//     <input placeholder="Skills (comma)" onChange={e=>setSkills(e.target.value)}/>
//     <button onClick={submit}>Save</button>
//   </div>
//  );
// }

// import { useState } from "react";
// import { api } from "../api/api";

// export default function ResumeForm(){
//   const [content,setContent]=useState("");
//   const [jobRole,setJobRole]=useState("");

//   const analyze = async () => {
//     const res = await api.post("/resume/analyze",{ content, jobRole },{
//       headers:{ Authorization: localStorage.getItem("token") }
//     });
//     localStorage.setItem("result",JSON.stringify(res.data));
//     window.location="/preview";
//   };

//   return(
//     <div>
//       <input placeholder="Job Role" onChange={e=>setJobRole(e.target.value)} /><br/><br/>
//       <textarea rows={10} placeholder="Paste Resume" onChange={e=>setContent(e.target.value)}></textarea><br/><br/>
//       <button onClick={analyze}>Analyze</button>
//     </div>
//   );
// }

// import { useState } from "react";
// import { api } from "../api/api";
// import { FaSearch } from "react-icons/fa";

// export default function ResumeForm() {
//   const [content, setContent] = useState("");
//   const [jobRole, setJobRole] = useState("");

//   const analyze = async () => {
//     const res = await api.post(
//       "/resume/analyze",
//       { content, jobRole },
//       {
//         headers: { Authorization: localStorage.getItem("token") },
//       }
//     );
//     localStorage.setItem("result", JSON.stringify(res.data));
//     window.location = "/preview";
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           📄 Analyze Your Resume
//         </h2>

//         <label className="block font-semibold mb-1">Job Role</label>
//         <input
//           placeholder="e.g. Full Stack Developer"
//           className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           onChange={(e) => setJobRole(e.target.value)}
//         />

//         <label className="block font-semibold mb-1">Paste Your Resume</label>
//         <textarea
//           rows={8}
//           placeholder="Paste your full resume here..."
//           className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           onChange={(e) => setContent(e.target.value)}
//         ></textarea>

//         <button
//           onClick={analyze}
//           className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           <FaSearch />
//           Analyze Resume
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { api } from "../api/api";
// import { FaFileAlt } from "react-icons/fa";

// export default function ResumeForm() {
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     location: "",
//     linkedin: "",
//     github: "",
//     summary: "",
//     education: {
//       degree: "",
//       college: "",
//       year: "",
//       cgpa: "",
//     },
//     skills: "",
//     projects: "",
//     experience: "",
//     achievements: "",
//     hobbies: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleEduChange = (e) => {
//     setForm({
//       ...form,
//       education: { ...form.education, [e.target.name]: e.target.value },
//     });
//   };

//   const createResume = async () => {
//     const resumeText = `
//   Name: ${form.fullName}
//   Phone: ${form.phone}
//   Email: ${form.email}
//   Location: ${form.location}
//   LinkedIn: ${form.linkedin}
//   GitHub: ${form.github}

//   Summary:
//   ${form.summary}

//   Education:
//   ${form.education.degree}, ${form.education.college} (${form.education.year})
//   CGPA: ${form.education.cgpa}

//   Skills:
//   ${form.skills}

//   Projects:
//   ${form.projects}

//   Experience:
//   ${form.experience}

//   Achievements:
//   ${form.achievements}

//   Hobbies:
//   ${form.hobbies}
//   `;

//     await api.post(
//       "/resume/create",
//       {
//         jobRole: form.fullName + " Resume", // simple title
//         content: resumeText, // ✅ IMPORTANT
//       },
//       { headers: { Authorization: localStorage.getItem("token") } },
//     );

//     alert("Resume Created Successfully");
//     window.location = "/dashboard";
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           📝 Create Your Resume
//         </h2>

//         <input
//           name="fullName"
//           placeholder="Full Name"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="location"
//           placeholder="Location"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="linkedin"
//           placeholder="LinkedIn (Optional)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="github"
//           placeholder="GitHub (Recommended)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />

//         <textarea
//           name="summary"
//           placeholder="Career Summary (2-3 lines)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />

//         <h3 className="font-semibold mt-3">Education</h3>
//         <input
//           name="degree"
//           placeholder="Degree"
//           onChange={handleEduChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="college"
//           placeholder="College"
//           onChange={handleEduChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="year"
//           placeholder="Year (2023-2027)"
//           onChange={handleEduChange}
//           className="w-full p-2 border mb-2"
//         />
//         <input
//           name="cgpa"
//           placeholder="CGPA (Optional)"
//           onChange={handleEduChange}
//           className="w-full p-2 border mb-2"
//         />

//         <textarea
//           name="skills"
//           placeholder="Skills (comma separated)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <textarea
//           name="projects"
//           placeholder="Projects (bullet points)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <textarea
//           name="experience"
//           placeholder="Internship / Experience (Optional)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <textarea
//           name="achievements"
//           placeholder="Achievements (Optional)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />
//         <textarea
//           name="hobbies"
//           placeholder="Hobbies (Optional)"
//           onChange={handleChange}
//           className="w-full p-2 border mb-2"
//         />

//         <button
//           onClick={createResume}
//           className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg"
//         >
//           <FaFileAlt /> Create Resume
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { api } from "../api/api";
// import { FaFileAlt } from "react-icons/fa";
// import { useSearchParams } from "react-router-dom";

// export default function ResumeForm() {
//   const [searchParams] = useSearchParams();
//   const editId = searchParams.get("id"); // 👈 check if editing

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     location: "",
//     linkedin: "",
//     github: "",
//     summary: "",
//     education: {
//       degree: "",
//       college: "",
//       year: "",
//       cgpa: "",
//     },
//     skills: "",
//     projects: "",
//     experience: "",
//     achievements: "",
//     hobbies: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleEduChange = (e) => {
//     setForm({
//       ...form,
//       education: { ...form.education, [e.target.name]: e.target.value },
//     });
//   };

//   // ✅ LOAD RESUME WHEN EDITING
//   useEffect(() => {
//     if (editId) {
//       api
//         .get(`/resume/${editId}`, {
//           headers: { Authorization: localStorage.getItem("token") },
//         })
//         .then((res) => setForm(res.data.formData || res.data))
//         .catch(err => console.log("Edit fetch error:", err));
//     }
//   }, [editId]);

//   const saveResume = async () => {
//     // Convert structured form into formatted resume text
//     const resumeText = `
// Name: ${form.fullName}
// Phone: ${form.phone}
// Email: ${form.email}
// Location: ${form.location}
// LinkedIn: ${form.linkedin || "N/A"}
// GitHub: ${form.github || "N/A"}

// Summary:
// ${form.summary}

// Education:
// ${form.education.degree}, ${form.education.college} (${form.education.year})
// CGPA: ${form.education.cgpa || "N/A"}

// Skills:
// ${form.skills}

// Projects:
// ${form.projects}

// Experience:
// ${form.experience || "N/A"}

// Achievements:
// ${form.achievements || "N/A"}

// Hobbies:
// ${form.hobbies || "N/A"}
// `;

//     const payload = {
//       jobRole: `${form.fullName} Resume`,
//       content: resumeText,
//       formData: form, // 👈 store structured data for editing later
//     };

//     if (editId) {
//       await api.put(`/resume/${editId}`, payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       alert("Resume Updated");
//     } else {
//       await api.post("/resume/create", payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       alert("Resume Created");
//     }

//     window.location = "/dashboard";
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           {editId ? "✏️ Edit Resume" : "📝 Create Your Resume"}
//         </h2>

//         <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <input name="linkedin" placeholder="LinkedIn (Optional)" value={form.linkedin} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <input name="github" placeholder="GitHub" value={form.github} onChange={handleChange} className="w-full p-2 border mb-2"/>

//         <textarea name="summary" placeholder="Career Summary" value={form.summary} onChange={handleChange} className="w-full p-2 border mb-2"/>

//         <h3 className="font-semibold mt-3">Education</h3>
//         <input name="degree" placeholder="Degree" value={form.education.degree} onChange={handleEduChange} className="w-full p-2 border mb-2"/>
//         <input name="college" placeholder="College" value={form.education.college} onChange={handleEduChange} className="w-full p-2 border mb-2"/>
//         <input name="year" placeholder="Year" value={form.education.year} onChange={handleEduChange} className="w-full p-2 border mb-2"/>
//         <input name="cgpa" placeholder="CGPA" value={form.education.cgpa} onChange={handleEduChange} className="w-full p-2 border mb-2"/>

//         <textarea name="skills" placeholder="Skills" value={form.skills} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <textarea name="projects" placeholder="Projects" value={form.projects} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <textarea name="experience" placeholder="Experience" value={form.experience} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <textarea name="achievements" placeholder="Achievements" value={form.achievements} onChange={handleChange} className="w-full p-2 border mb-2"/>
//         <textarea name="hobbies" placeholder="Hobbies" value={form.hobbies} onChange={handleChange} className="w-full p-2 border mb-2"/>

//         <button
//           onClick={saveResume}
//           className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg"
//         >
//           <FaFileAlt /> {editId ? "Update Resume" : "Create Resume"}
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import {
//   Save, ArrowLeft, Loader2, Plus, X, User,
//   Briefcase, GraduationCap, Code, Globe, Github, Trophy, Camera
// } from "lucide-react";

// export default function CreateResume() {
//   const navigate = useNavigate();
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
//     image: "", // New field for profile picture
//     details: {
//       FullName: "",
//       Phone: "",
//       Email: "",
//       LinkedIn: "",
//       GitHub: "",
//       Location: "",
//       Summary: "",
//       Education: "",
//       Projects: "",
//       Experience: "",
//       Achievements: "",
//       Hobbies: ""
//     }
//   });

//   // Handle Image to Base64 Conversion
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({ ...prev, image: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     const mergedContent = Object.entries(formData.details)
//       .filter(([_, value]) => value && value.trim() !== "")
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n\n");

//     const payload = {
//       jobRole: formData.jobRole,
//       skills: formData.skills,
//       image: formData.image, // Include image in payload
//       content: mergedContent
//     };

//     try {
//       const res = await api.post("/resume/create", payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       navigate(`/preview?id=${res.data._id}`);
//     } catch (err) {
//       console.error("Error creating resume:", err);
//       alert("Error creating resume. If it's a 'Payload Too Large' error, ensure your backend limit is increased.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const addSkill = () => {
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData(prev => ({
//         ...prev,
//         skills: [...prev.skills, skillInput.trim()]
//       }));
//       setSkillInput("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20 font-sans">
//       <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
//           <ArrowLeft size={20} /> Back
//         </button>
//         <button
//           onClick={handleCreate}
//           disabled={saving}
//           className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg disabled:opacity-50 transition-all"
//         >
//           {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
//           Create & View Resume
//         </button>
//       </div>

//       <div className="max-w-4xl mx-auto mt-8 px-4 space-y-8">

//         {/* PERSONAL INFO & IMAGE UPLOAD */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<User className="text-blue-500"/>} title="1. Personal Info & Photo" />

//           <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b pb-8">
//              <div className="relative group flex flex-col items-center">
//                 <div className="w-32 h-32 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
//                    {formData.image ? (
//                      <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
//                    ) : (
//                      <Camera className="text-slate-400" size={32} />
//                    )}
//                 </div>
//                 <label className="mt-2 text-xs font-bold text-blue-600 cursor-pointer hover:underline">
//                   Upload Photo
//                   <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                 </label>
//              </div>

//              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({...formData, details: {...formData.details, FullName: v}})} placeholder="Srijon Choudhury" />
//                 <Input label="Job Role / Title" value={formData.jobRole} onChange={(v) => setFormData({...formData, jobRole: v})} placeholder="Full Stack Developer" />
//                 <Input label="Phone Number" value={formData.details.Phone} onChange={(v) => setFormData({...formData, details: {...formData.details, Phone: v}})} placeholder="+91 0000000000" />
//                 <Input label="Email" value={formData.details.Email} onChange={(v) => setFormData({...formData, details: {...formData.details, Email: v}})} placeholder="srijon@email.com" />
//              </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Input label="Location" value={formData.details.Location} onChange={(v) => setFormData({...formData, details: {...formData.details, Location: v}})} placeholder="Kolkata, WB" />
//             <Input label="LinkedIn" icon={<Globe size={14}/>} value={formData.details.LinkedIn} onChange={(v) => setFormData({...formData, details: {...formData.details, LinkedIn: v}})} placeholder="username" />
//             <Input label="GitHub" icon={<Github size={14}/>} value={formData.details.GitHub} onChange={(v) => setFormData({...formData, details: {...formData.details, GitHub: v}})} placeholder="username" />
//           </div>
//         </div>

//         {/* OTHER SECTIONS (SKILLS, EDUCATION, etc.) */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Code className="text-purple-500"/>} title="2. Technical Skills" />
//           <div className="flex gap-2 mb-4">
//             <input
//               type="text"
//               value={skillInput}
//               onChange={(e) => setSkillInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
//               className="flex-1 border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400"
//               placeholder="Add skill (e.g. React.js)"
//             />
//             <button type="button" onClick={addSkill} className="bg-slate-100 px-4 rounded-xl hover:bg-slate-200"><Plus /></button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skills.map((s, i) => (
//               <span key={i} className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100">
//                 {s}
//                 <X size={14} className="cursor-pointer" onClick={() => setFormData({...formData, skills: formData.skills.filter((_, idx) => idx !== i)})} />
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
//           <TextArea label="Career Summary" value={formData.details.Summary} onChange={(v) => setFormData({...formData, details: {...formData.details, Summary: v}})} rows={3} />
//           <TextArea label="Education" value={formData.details.Education} onChange={(v) => setFormData({...formData, details: {...formData.details, Education: v}})} />
//           <TextArea label="Projects" value={formData.details.Projects} onChange={(v) => setFormData({...formData, details: {...formData.details, Projects: v}})} />
//           <TextArea label="Internships" value={formData.details.Experience} onChange={(v) => setFormData({...formData, details: {...formData.details, Experience: v}})} />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <TextArea label="Achievements" value={formData.details.Achievements} onChange={(v) => setFormData({...formData, details: {...formData.details, Achievements: v}})} rows={3} />
//             <TextArea label="Hobbies" value={formData.details.Hobbies} onChange={(v) => setFormData({...formData, details: {...formData.details, Hobbies: v}})} rows={3} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Sub-components
// const SectionTitle = ({ icon, title }) => (
//   <div className="flex items-center gap-3 mb-6">
//     <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
//     <h2 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h2>
//   </div>
// );

// const Input = ({ label, value, onChange, placeholder, icon }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">{label}</label>
//     <div className="relative">
//       {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>}
//       <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`w-full border-2 border-slate-100 p-2.5 rounded-xl outline-none focus:border-blue-400 text-sm ${icon ? 'pl-10' : ''}`} />
//     </div>
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">{label}</label>
//     <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400 text-sm leading-relaxed" />
//   </div>
// );

// ok
// okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import {
//   Save,
//   ArrowLeft,
//   Loader2,
//   Plus,
//   X,
//   User,
//   Briefcase,
//   GraduationCap,
//   Code,
//   Globe,
//   Github,
//   Trophy,
//   Camera,
//   Layout,
//   CheckCircle,
//   Sparkles
// } from "lucide-react";

// export default function CreateResume() {
//   const navigate = useNavigate();
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");
//   const [activeSection, setActiveSection] = useState("personal");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
//     image: "",
//     details: {
//       FullName: "",
//       Phone: "",
//       Email: "",
//       LinkedIn: "",
//       GitHub: "",
//       Location: "",
//       Summary: "",
//       Education: "",
//       Projects: "",
//       Experience: "",
//       Achievements: "",
//       Hobbies: "",
//     },
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () =>
//         setFormData((prev) => ({ ...prev, image: reader.result }));
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     const mergedContent = Object.entries(formData.details)
//       .filter(([_, value]) => value && value.trim() !== "")
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n\n");

//     try {
//       const res = await api.post(
//         "/resume/create",
//         {
//           jobRole: formData.jobRole,
//           skills: formData.skills,
//           image: formData.image,
//           content: mergedContent,
//         },
//         { headers: { Authorization: localStorage.getItem("token") } },
//       );
//       navigate(`/preview?id=${res.data._id}`);
//     } catch (err) {
//       console.error(err);
//       alert("Error creating resume. Check payload size settings.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const addSkill = () => {
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, skillInput.trim()],
//       }));
//       setSkillInput("");
//     }
//   };

//   const navItems = [
//     { id: "personal", label: "Contact Info", icon: <User size={18} /> },
//     { id: "skills", label: "Skills", icon: <Code size={18} /> },
//     {
//       id: "experience",
//       label: "Work & Projects",
//       icon: <Briefcase size={18} />,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col">
//       {/* Navbar */}
//       {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-12 py-4 flex justify-between items-center shadow-sm">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-all">
//           <ArrowLeft size={20} /> <span className="hidden md:inline">Back to Dashboard</span>
//         </button>
//         <div className="flex items-center gap-4">
//             <span className="hidden lg:block text-slate-400 text-sm italic">Changes are saved to cloud</span>
//             <button 
//             onClick={handleCreate} 
//             disabled={saving} 
//             className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 transition-all active:scale-95"
//             >
//             {saving ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle size={18} />} 
//             Finalize & View
//             </button>
//         </div>
//       </div> */}
//       {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-12 py-4 flex justify-between items-center shadow-sm">
        
//         <div className="flex items-center gap-4">
          

//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold transition-all"
//           >
//             <ArrowLeft size={20} />
//             <span className="hidden md:inline">Back to Dashboard</span>
//           </button>
//         </div>
//         <div className="p-2 bg-blue-600 rounded-lg text-white">
//             <Sparkles size={20} />
//           </div>
//           <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">AI Resume Builder</h1>
        
//         <div className="flex items-center gap-4">
//           <span className="hidden lg:block text-slate-400 text-sm italic">
//             Changes are saved to cloud
//           </span>
//           <button
//             onClick={handleCreate}
//             disabled={saving}
//             className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 transition-all active:scale-95"
//           >
//             {saving ? (
//               <Loader2 className="animate-spin" size={18} />
//             ) : (
//               <CheckCircle size={18} />
//             )}
//             Finalize & View
//           </button>
//         </div>
//       </div> */}


//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-12 py-4 flex items-center justify-between shadow-sm">

//   {/* LEFT: Branding + Back Button (properly grouped) */}
//   <div className="flex items-center gap-4">
//     <div className="p-2 bg-blue-600 rounded-lg text-white">
//       <Sparkles size={20} />
//     </div>

//     <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden md:block">
//       AI Resume Builder
//     </h1>

//     <button
//       onClick={() => navigate(-1)}
//       className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold transition-all"
//     >
//       <ArrowLeft size={20} />
//       <span className="hidden md:inline">Back to Dashboard</span>
//     </button>
//   </div>

//   {/* RIGHT: Action Button */}
//   <div className="flex items-center gap-4">
//     <span className="hidden lg:block text-slate-400 text-sm italic">
//       Changes are saved to cloud
//     </span>
//     <button
//       onClick={handleCreate}
//       disabled={saving}
//       className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 transition-all active:scale-95"
//     >
//       {saving ? (
//         <Loader2 className="animate-spin" size={18} />
//       ) : (
//         <CheckCircle size={18} />
//       )}
//       Finalize & View
//     </button>
//   </div>
// </div>


//       <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-10">
//         {/* Left Sidebar Navigation */}
//         <div className="lg:col-span-3 space-y-2">
//           <div className="sticky top-28 space-y-2">
//             <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4 px-4">
//               Resume Sections
//             </p>
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() =>
//                   document
//                     .getElementById(item.id)
//                     .scrollIntoView({ behavior: "smooth", block: "center" })
//                 }
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-bold hover:bg-white hover:shadow-sm transition-all text-left border border-transparent hover:border-slate-100"
//               >
//                 <span className="p-2 bg-slate-100 rounded-lg text-slate-500">
//                   {item.icon}
//                 </span>
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Content Area */}
//         <div className="lg:col-span-9 space-y-10 pb-20">
//           {/* 1. PERSONAL INFO */}
//           <section
//             id="personal"
//             className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all"
//           >
//             <SectionTitle
//               icon={<User className="text-blue-600" />}
//               title="Personal Details"
//             />

//             <div className="flex flex-col xl:flex-row gap-10 items-start">
//               <div className="relative shrink-0 mx-auto xl:mx-0">
//                 <div className="w-40 h-40 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group">
//                   {formData.image ? (
//                     <img
//                       src={formData.image}
//                       alt="Profile"
//                       className="w-full h-full object-cover transition-transform group-hover:scale-110"
//                     />
//                   ) : (
//                     <Camera
//                       className="text-slate-300 group-hover:text-blue-400 transition-colors"
//                       size={40}
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <Camera className="text-white" size={24} />
//                   </div>
//                 </div>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />
//                 <p className="mt-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                   Click to upload
//                 </p>
//               </div>

//               <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
//                 <Input
//                   label="Full Name"
//                   value={formData.details.FullName}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, FullName: v },
//                     })
//                   }
//                   placeholder="Srijon Choudhury"
//                 />
//                 <Input
//                   label="Job Title"
//                   value={formData.jobRole}
//                   onChange={(v) => setFormData({ ...formData, jobRole: v })}
//                   placeholder="Full Stack Developer"
//                 />
//                 <Input
//                   label="Phone"
//                   value={formData.details.Phone}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Phone: v },
//                     })
//                   }
//                   placeholder="+91 00000 00000"
//                 />
//                 <Input
//                   label="Email Address"
//                   value={formData.details.Email}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Email: v },
//                     })
//                   }
//                   placeholder="srijon@example.com"
//                 />
//                 <Input
//                   label="Location"
//                   value={formData.details.Location}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Location: v },
//                     })
//                   }
//                   placeholder="Kolkata, WB"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <Input
//                     label="LinkedIn"
//                     value={formData.details.LinkedIn}
//                     onChange={(v) =>
//                       setFormData({
//                         ...formData,
//                         details: { ...formData.details, LinkedIn: v },
//                       })
//                     }
//                     placeholder="username"
//                   />
//                   <Input
//                     label="GitHub"
//                     value={formData.details.GitHub}
//                     onChange={(v) =>
//                       setFormData({
//                         ...formData,
//                         details: { ...formData.details, GitHub: v },
//                       })
//                     }
//                     placeholder="username"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* 2. SKILLS */}
//           <section
//             id="skills"
//             className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
//           >
//             <SectionTitle
//               icon={<Code className="text-purple-600" />}
//               title="Core Competencies"
//             />
//             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
//               <div className="flex gap-3 mb-6">
//                 <input
//                   type="text"
//                   value={skillInput}
//                   onChange={(e) => setSkillInput(e.target.value)}
//                   onKeyDown={(e) =>
//                     e.key === "Enter" && (e.preventDefault(), addSkill())
//                   }
//                   className="flex-1 bg-white border-2 border-slate-100 p-3.5 rounded-2xl outline-none focus:border-blue-400 shadow-sm transition-all"
//                   placeholder="Add skill (e.g. React.js, Node.js)"
//                 />
//                 <button
//                   type="button"
//                   onClick={addSkill}
//                   className="bg-blue-600 text-white px-6 rounded-2xl hover:bg-blue-700 transition-all shadow-md active:scale-95"
//                 >
//                   <Plus size={24} />
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {formData.skills.map((s, i) => (
//                   <span
//                     key={i}
//                     className="bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-3 border border-slate-200 shadow-sm hover:border-blue-200 transition-all animate-in fade-in slide-in-from-bottom-2"
//                   >
//                     {s}{" "}
//                     <X
//                       size={16}
//                       className="text-slate-400 cursor-pointer hover:text-red-500"
//                       onClick={() =>
//                         setFormData({
//                           ...formData,
//                           skills: formData.skills.filter((_, idx) => idx !== i),
//                         })
//                       }
//                     />
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* 3. EXPERIENCE & EDUCATION */}
//           <section
//             id="experience"
//             className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-10"
//           >
//             <div className="space-y-8">
//               <SectionTitle
//                 icon={<Briefcase className="text-orange-600" />}
//                 title="Experience & Background"
//               />
//               <TextArea
//                 label="Career Summary"
//                 value={formData.details.Summary}
//                 onChange={(v) =>
//                   setFormData({
//                     ...formData,
//                     details: { ...formData.details, Summary: v },
//                   })
//                 }
//                 rows={3}
//                 placeholder="Write a brief pitch about your career goals..."
//               />
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <TextArea
//                   label="Education"
//                   value={formData.details.Education}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Education: v },
//                     })
//                   }
//                   placeholder="B.Tech | University Name | CGPA"
//                 />
//                 <TextArea
//                   label="Internships"
//                   value={formData.details.Experience}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Experience: v },
//                     })
//                   }
//                   placeholder="Role | Company | Duration"
//                 />
//               </div>
//               <TextArea
//                 label="Key Projects"
//                 value={formData.details.Projects}
//                 onChange={(v) =>
//                   setFormData({
//                     ...formData,
//                     details: { ...formData.details, Projects: v },
//                   })
//                 }
//                 placeholder="Use bullet points for project descriptions..."
//               />
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
//                 <TextArea
//                   label="Achievements"
//                   value={formData.details.Achievements}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Achievements: v },
//                     })
//                   }
//                   rows={3}
//                   placeholder="Hackathons, Certifications, Awards"
//                 />
//                 <TextArea
//                   label="Hobbies"
//                   value={formData.details.Hobbies}
//                   onChange={(v) =>
//                     setFormData({
//                       ...formData,
//                       details: { ...formData.details, Hobbies: v },
//                     })
//                   }
//                   rows={3}
//                   placeholder="Interests outside of work"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// const SectionTitle = ({ icon, title }) => (
//   <div className="flex items-center gap-4 mb-8">
//     <div className="p-3 bg-slate-50 rounded-2xl shadow-inner border border-white">
//       {icon}
//     </div>
//     <h2 className="text-2xl font-black text-slate-800 tracking-tight">
//       {title}
//     </h2>
//   </div>
// );

// const Input = ({ label, value, onChange, placeholder }) => (
//   <div className="flex flex-col gap-2 group">
//     <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 group-focus-within:text-blue-500 transition-colors">
//       {label}
//     </label>
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-slate-50 border-2 border-slate-50 p-3.5 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner"
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => (
//   <div className="flex flex-col gap-2 group">
//     <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 group-focus-within:text-blue-500 transition-colors">
//       {label}
//     </label>
//     <textarea
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       rows={rows}
//       className="w-full bg-slate-50 border-2 border-slate-50 p-4 rounded-[1.5rem] outline-none focus:border-blue-400 focus:bg-white transition-all text-sm leading-relaxed font-medium shadow-inner"
//     />
//   </div>
// );














// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import {
//   ArrowLeft,
//   Loader2,
//   Plus,
//   X,
//   User,
//   Briefcase,
//   Code,
//   Camera,
//   CheckCircle,
//   Sparkles
// } from "lucide-react";

// export default function CreateResume() {
//   const navigate = useNavigate();
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
//     image: "",
//     details: {
//       FullName: "",
//       Phone: "",
//       Email: "",
//       LinkedIn: "",
//       GitHub: "",
//       Location: "",
//       Summary: "",
//       Education: "",
//       Projects: "",
//       Experience: "",
//       Achievements: "",
//       Hobbies: "",
//     },
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () =>
//         setFormData((prev) => ({ ...prev, image: reader.result }));
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     if (!formData.details.FullName || !formData.jobRole) {
//       alert("Please enter at least your Full Name and Job Title.");
//       return;
//     }

//     setSaving(true);
//     const mergedContent = Object.entries(formData.details)
//       .filter(([_, value]) => value && value.trim() !== "")
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n\n");

//     try {
//       const res = await api.post(
//         "/resume/create",
//         {
//           jobRole: formData.jobRole,
//           skills: formData.skills,
//           image: formData.image,
//           content: mergedContent,
//         },
//         { headers: { Authorization: localStorage.getItem("token") } },
//       );
//       navigate(`/preview?id=${res.data._id}`);
//     } catch (err) {
//       console.error(err);
//       alert("Error creating resume. If you uploaded a large photo, the server might reject the request (Payload Too Large).");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const addSkill = () => {
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, skillInput.trim()],
//       }));
//       setSkillInput("");
//     }
//   };

//   // ✅ FIX: Enhanced scroll logic to account for the sticky header height
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const headerOffset = 100; // Height of your sticky navbar
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   const navItems = [
//     { id: "personal", label: "Contact Info", icon: <User size={18} /> },
//     { id: "skills", label: "Skills", icon: <Code size={18} /> },
//     { id: "experience", label: "Work & Projects", icon: <Briefcase size={18} /> },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col">
//       {/* ✅ UNIFIED NAVBAR: Matches Dashboard styling */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-12 py-4 flex items-center justify-between shadow-sm">
        
//         {/* LEFT: Branding + Back Button */}
//         <div className="flex items-center gap-4">
//           <div className="p-2 bg-blue-600 rounded-lg text-white">
//             <Sparkles size={20} />
//           </div>

//           <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden lg:block">
//             AI Resume Builder
//           </h1>

//           {/* ✅ FIX: Specific path navigation instead of navigate(-1) */}
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold transition-all"
//           >
//             <ArrowLeft size={20} />
//             <span className="hidden md:inline">Dashboard</span>
//           </button>
//         </div>

//         {/* RIGHT: Action Button */}
//         <div className="flex items-center gap-4">
//           <span className="hidden lg:block text-slate-400 text-sm italic">
//             Changes are saved to cloud
//           </span>
//           <button
//             onClick={handleCreate}
//             disabled={saving}
//             className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50 transition-all active:scale-95"
//           >
//             {saving ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle size={18} />}
//             Finalize & View
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-10">
        
//         {/* SIDEBAR NAVIGATION */}
//         <div className="lg:col-span-3">
//           <div className="sticky top-28 space-y-2">
//             <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4 px-4">
//               Resume Sections
//             </p>
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-bold hover:bg-white hover:shadow-sm transition-all text-left border border-transparent hover:border-slate-100"
//               >
//                 <span className="p-2 bg-slate-100 rounded-lg text-slate-500">
//                   {item.icon}
//                 </span>
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* CONTENT AREA */}
//         <div className="lg:col-span-9 space-y-10 pb-20">
          
//           {/* 1. PERSONAL INFO */}
//           <section
//             id="personal"
//             className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all"
//           >
//             <SectionTitle icon={<User className="text-blue-600" />} title="Personal Details" />

//             {/* ✅ UX FIX: Responsive flex container (Stacked on mobile, side-by-side on XL) */}
//             <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start">
              
//               {/* Image Upload Area */}
//               <div className="relative shrink-0">
//                 <div className="w-40 h-40 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group">
//                   {formData.image ? (
//                     <img
//                       src={formData.image}
//                       alt="Profile"
//                       className="w-full h-full object-cover transition-transform group-hover:scale-110"
//                     />
//                   ) : (
//                     <Camera className="text-slate-300 group-hover:text-blue-400 transition-colors" size={40} />
//                   )}
//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <Camera className="text-white" size={24} />
//                   </div>
//                 </div>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />
//                 <p className="mt-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                   Click to upload
//                 </p>
//               </div>

//               {/* Personal Details Inputs */}
//               <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
//                 <Input
//                   label="Full Name"
//                   value={formData.details.FullName}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, FullName: v } })}
//                   placeholder="John Doe"
//                 />
//                 <Input
//                   label="Job Title"
//                   value={formData.jobRole}
//                   onChange={(v) => setFormData({ ...formData, jobRole: v })}
//                   placeholder="Software Engineer"
//                 />
//                 <Input
//                   label="Phone"
//                   value={formData.details.Phone}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Phone: v } })}
//                   placeholder="+1 234 567 890"
//                 />
//                 <Input
//                   label="Email"
//                   value={formData.details.Email}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Email: v } })}
//                   placeholder="john@example.com"
//                 />
//                 <Input
//                   label="Location"
//                   value={formData.details.Location}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Location: v } })}
//                   placeholder="City, Country"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <Input
//                     label="LinkedIn"
//                     value={formData.details.LinkedIn}
//                     onChange={(v) => setFormData({ ...formData, details: { ...formData.details, LinkedIn: v } })}
//                     placeholder="username"
//                   />
//                   <Input
//                     label="GitHub"
//                     value={formData.details.GitHub}
//                     onChange={(v) => setFormData({ ...formData, details: { ...formData.details, GitHub: v } })}
//                     placeholder="username"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* 2. SKILLS SECTION */}
//           <section id="skills" className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
//             <SectionTitle icon={<Code className="text-purple-600" />} title="Core Competencies" />
//             <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
//               <div className="flex gap-3 mb-6">
//                 <input
//                   type="text"
//                   value={skillInput}
//                   onChange={(e) => setSkillInput(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
//                   className="flex-1 bg-white border-2 border-slate-100 p-3.5 rounded-2xl outline-none focus:border-blue-400 shadow-sm transition-all"
//                   placeholder="Add skill (e.g. React.js, Tailwind CSS)"
//                 />
//                 <button
//                   type="button"
//                   onClick={addSkill}
//                   className="bg-blue-600 text-white px-6 rounded-2xl hover:bg-blue-700 transition-all shadow-md active:scale-95"
//                 >
//                   <Plus size={24} />
//                 </button>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {formData.skills.map((s, i) => (
//                   <span
//                     key={i}
//                     className="bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-3 border border-slate-200 shadow-sm hover:border-blue-200 transition-all"
//                   >
//                     {s}
//                     <X
//                       size={16}
//                       className="text-slate-400 cursor-pointer hover:text-red-500"
//                       onClick={() => setFormData({ ...formData, skills: formData.skills.filter((_, idx) => idx !== i) })}
//                     />
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* 3. EXPERIENCE & PROJECTS */}
//           <section id="experience" className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-10">
//             <div className="space-y-8">
//               <SectionTitle icon={<Briefcase className="text-orange-600" />} title="Work & Experience" />
              
//               <TextArea
//                 label="Professional Summary"
//                 value={formData.details.Summary}
//                 onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Summary: v } })}
//                 rows={3}
//                 placeholder="Brief description of your professional background and career goals..."
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <TextArea
//                   label="Education History"
//                   value={formData.details.Education}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Education: v } })}
//                   placeholder="Degree | Institution Name | Graduation Year | GPA"
//                 />
//                 <TextArea
//                   label="Work Experience / Internships"
//                   value={formData.details.Experience}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Experience: v } })}
//                   placeholder="Role | Company | Duration | Key Responsibilities"
//                 />
//               </div>

//               <TextArea
//                 label="Key Projects"
//                 value={formData.details.Projects}
//                 onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Projects: v } })}
//                 placeholder="Highlight your best work with project titles and bullet points..."
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
//                 <TextArea
//                   label="Achievements & Awards"
//                   value={formData.details.Achievements}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Achievements: v } })}
//                   rows={3}
//                   placeholder="Hackathons, Certifications, etc."
//                 />
//                 <TextArea
//                   label="Interests & Hobbies"
//                   value={formData.details.Hobbies}
//                   onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Hobbies: v } })}
//                   rows={3}
//                   placeholder="What do you enjoy outside of work?"
//                 />
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// const SectionTitle = ({ icon, title }) => (
//   <div className="flex items-center gap-4 mb-8">
//     <div className="p-3 bg-slate-50 rounded-2xl shadow-inner border border-white">
//       {icon}
//     </div>
//     <h2 className="text-2xl font-black text-slate-800 tracking-tight">
//       {title}
//     </h2>
//   </div>
// );

// const Input = ({ label, value, onChange, placeholder }) => (
//   <div className="flex flex-col gap-2 group">
//     <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 group-focus-within:text-blue-500 transition-colors">
//       {label}
//     </label>
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       className="w-full bg-slate-50 border-2 border-slate-50 p-3.5 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner"
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => (
//   <div className="flex flex-col gap-2 group">
//     <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1 group-focus-within:text-blue-500 transition-colors">
//       {label}
//     </label>
//     <textarea
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       placeholder={placeholder}
//       rows={rows}
//       className="w-full bg-slate-50 border-2 border-slate-50 p-4 rounded-[1.5rem] outline-none focus:border-blue-400 focus:bg-white transition-all text-sm leading-relaxed font-medium shadow-inner"
//     />
//   </div>
// );























import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import ThemeToggle from "./ThemeToggle"; // ✅ Import your toggle component
import {
  ArrowLeft, Loader2, Plus, X, User, Briefcase, Code, Camera, CheckCircle, Sparkles
} from "lucide-react";

export default function CreateResume() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const [formData, setFormData] = useState({
    jobRole: "",
    skills: [],
    image: "",
    details: {
      FullName: "", Phone: "", Email: "", LinkedIn: "", GitHub: "",
      Location: "", Summary: "", Education: "", Projects: "",
      Experience: "", Achievements: "", Hobbies: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.details.FullName || !formData.jobRole) {
      alert("Please enter at least your Full Name and Job Title.");
      return;
    }
    setSaving(true);
    const mergedContent = Object.entries(formData.details)
      .filter(([_, value]) => value && value.trim() !== "")
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n\n");

    try {
      const res = await api.post("/resume/create", {
        jobRole: formData.jobRole,
        skills: formData.skills,
        image: formData.image,
        content: mergedContent,
      }, { headers: { Authorization: localStorage.getItem("token") } });
      navigate(`/preview?id=${res.data._id}`);
    } catch (err) {
      console.error(err);
      alert("Error creating resume.");
    } finally { setSaving(false); }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
      setSkillInput("");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "personal", label: "Contact Info", icon: <User size={18} /> },
    { id: "skills", label: "Skills", icon: <Code size={18} /> },
    { id: "experience", label: "Work & Projects", icon: <Briefcase size={18} /> },
  ];

  return (
    // ✅ Added dark:bg-slate-950 and transition classes
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 font-sans flex flex-col transition-colors duration-300">
      
      {/* ✅ Navbar: dark:bg-slate-900/80 and dark:border-slate-800 */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-800 px-4 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Sparkles size={20} />
          </div>
          <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tighter uppercase hidden lg:block">
            AI Resume Builder
          </h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-all"
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Dashboard</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* ✅ Theme Toggle Integrated Here */}
          <ThemeToggle />
          <button
            onClick={handleCreate}
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-95"
          >
            {saving ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle size={18} />}
            Finalize & View
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-10">
        <div className="lg:col-span-3">
          <div className="sticky top-28 space-y-2">
            <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-4 px-4">
              Resume Sections
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 dark:text-slate-400 font-bold hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition-all text-left border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
              >
                <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400">
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-9 space-y-10 pb-20">
          <section
            id="personal"
            className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all"
          >
            <SectionTitle icon={<User className="text-blue-600" />} title="Personal Details" />
            <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start">
              <div className="relative shrink-0">
                <div className="w-40 h-40 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden group">
                  {formData.image ? (
                    <img src={formData.image} alt="Profile" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  ) : (
                    <Camera className="text-slate-300 dark:text-slate-600 group-hover:text-blue-400 transition-colors" size={40} />
                  )}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
                <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, FullName: v } })} placeholder="John Doe" />
                <Input label="Job Title" value={formData.jobRole} onChange={(v) => setFormData({ ...formData, jobRole: v })} placeholder="Software Engineer" />
                <Input label="Phone" value={formData.details.Phone} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Phone: v } })} placeholder="+1 234 567 890" />
                <Input label="Email" value={formData.details.Email} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Email: v } })} placeholder="john@example.com" />
                <Input label="Location" value={formData.details.Location} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Location: v } })} placeholder="City, Country" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="LinkedIn" value={formData.details.LinkedIn} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, LinkedIn: v } })} placeholder="username" />
                  <Input label="GitHub" value={formData.details.GitHub} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, GitHub: v } })} placeholder="username" />
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800">
            <SectionTitle icon={<Code className="text-purple-600" />} title="Core Competencies" />
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-3.5 rounded-2xl outline-none focus:border-blue-400 dark:text-slate-100 shadow-sm transition-all"
                  placeholder="Add skill (e.g. React.js, Tailwind CSS)"
                />
                <button type="button" onClick={addSkill} className="bg-blue-600 text-white px-6 rounded-2xl hover:bg-blue-700 active:scale-95"><Plus size={24} /></button>
              </div>
              <div className="flex flex-wrap gap-3">
                {formData.skills.map((s, i) => (
                  <span key={i} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-3 border border-slate-200 dark:border-slate-700 shadow-sm">
                    {s} <X size={16} className="text-slate-400 cursor-pointer hover:text-red-500" onClick={() => setFormData({ ...formData, skills: formData.skills.filter((_, idx) => idx !== i) })} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 space-y-10">
            <div className="space-y-8">
              <SectionTitle icon={<Briefcase className="text-orange-600" />} title="Work & Experience" />
              <TextArea label="Professional Summary" value={formData.details.Summary} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Summary: v } })} rows={3} placeholder="Brief description..." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TextArea label="Education" value={formData.details.Education} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Education: v } })} placeholder="Degree | Institution..." />
                <TextArea label="Experience" value={formData.details.Experience} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Experience: v } })} placeholder="Role | Company..." />
              </div>
              <TextArea label="Key Projects" value={formData.details.Projects} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Projects: v } })} placeholder="Bullet points..." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50 dark:border-slate-800">
                <TextArea label="Achievements" value={formData.details.Achievements} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Achievements: v } })} rows={3} />
                <TextArea label="Hobbies" value={formData.details.Hobbies} onChange={(v) => setFormData({ ...formData, details: { ...formData.details, Hobbies: v } })} rows={3} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-inner border border-white dark:border-slate-700">
      {icon}
    </div>
    <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{title}</h2>
  </div>
);

const Input = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ml-1 group-focus-within:text-blue-500 transition-colors">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-50 dark:border-slate-800 p-3.5 rounded-2xl outline-none focus:border-blue-400 dark:focus:border-blue-500 dark:text-slate-100 transition-all text-sm font-medium shadow-inner"
    />
  </div>
);

const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ml-1 group-focus-within:text-blue-500 transition-colors">
      {label}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-50 dark:border-slate-800 p-4 rounded-[1.5rem] outline-none focus:border-blue-400 dark:focus:border-blue-500 dark:text-slate-100 transition-all text-sm leading-relaxed font-medium shadow-inner"
    />
  </div>
);