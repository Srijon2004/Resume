// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import { 
//   Save, ArrowLeft, Loader2, Plus, X, User, 
//   Briefcase, GraduationCap, Code, Globe, Github, Trophy 
// } from "lucide-react";

// export default function Editor() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const resumeId = searchParams.get("id");

//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
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

//   // Load and Parse existing data
//   useEffect(() => {
//     if (resumeId) {
//       const fetchResume = async () => {
//         setLoading(true);
//         try {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           const data = res.data;

//           const extract = (text, label) => {
//             if (!text) return "";
//             const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`, "i");
//             const match = text.match(regex);
//             return match ? match[1].trim() : "";
//           };

//           setFormData({
//             jobRole: data.jobRole || "",
//             skills: data.skills || [],
//             details: {
//               FullName: extract(data.content, "FullName") || extract(data.content, "Name"),
//               Phone: extract(data.content, "Phone"),
//               Email: extract(data.content, "Email"),
//               LinkedIn: extract(data.content, "LinkedIn"),
//               GitHub: extract(data.content, "GitHub"),
//               Location: extract(data.content, "Location"),
//               Summary: extract(data.content, "Summary"),
//               Education: extract(data.content, "Education"),
//               Projects: extract(data.content, "Projects"),
//               Experience: extract(data.content, "Experience"),
//               Achievements: extract(data.content, "Achievements"),
//               Hobbies: extract(data.content, "Hobbies")
//             }
//           });
//         } catch (err) { 
//           console.error("Error fetching resume:", err); 
//         } finally { 
//           setLoading(false); 
//         }
//       };
//       fetchResume();
//     }
//   }, [resumeId]);

//   const handleSave = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     // Merge all fields into the "content" string required by DB Schema
//     const mergedContent = Object.entries(formData.details)
//       .filter(([_, value]) => value && value.trim() !== "")
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n\n");

//     const payload = {
//       jobRole: formData.jobRole,
//       skills: formData.skills,
//       content: mergedContent
//     };

//     try {
//       const endpoint = resumeId ? `/resume/${resumeId}` : "/resume";
//       const method = resumeId ? "put" : "post";
//       const res = await api[method](endpoint, payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
      
//       const finalId = resumeId || res.data._id;
//       navigate(`/preview?id=${finalId}`);
//     } catch (err) {
//       console.error("Error saving resume:", err);
//       alert("Error saving resume. Please try again.");
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

//   if (loading) return (
//     <div className="flex h-screen items-center justify-center">
//       <Loader2 className="animate-spin text-blue-600" size={40} />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20 font-sans">
//       {/* NAVIGATION BAR */}
//       <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
//           <ArrowLeft size={20} /> Exit Editor
//         </button>
//         <button 
//           onClick={handleSave} 
//           disabled={saving} 
//           className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg disabled:opacity-50 transition-all"
//         >
//           {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} 
//           {resumeId ? "Update Changes" : "Create Resume"}
//         </button>
//       </div>

//       <div className="max-w-4xl mx-auto mt-8 px-4 space-y-8">
        
//         {/* SECTION 1: PERSONAL & CONTACT */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<User className="text-blue-500"/>} title="1. Personal & Contact Info" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({...formData, details: {...formData.details, FullName: v}})} placeholder="Srijon Choudhury" />
//             <Input label="Job Role / Title" value={formData.jobRole} onChange={(v) => setFormData({...formData, jobRole: v})} placeholder="Full Stack Developer" />
//             <Input label="Phone Number" value={formData.details.Phone} onChange={(v) => setFormData({...formData, details: {...formData.details, Phone: v}})} placeholder="+91 1234567890" />
//             <Input label="Professional Email" value={formData.details.Email} onChange={(v) => setFormData({...formData, details: {...formData.details, Email: v}})} placeholder="name@email.com" />
//             <Input label="Location (City, State)" value={formData.details.Location} onChange={(v) => setFormData({...formData, details: {...formData.details, Location: v}})} placeholder="Kolkata, West Bengal" />
//             <Input label="LinkedIn URL" icon={<Globe size={14}/>} value={formData.details.LinkedIn} onChange={(v) => setFormData({...formData, details: {...formData.details, LinkedIn: v}})} placeholder="linkedin.com/in/username" />
//             <Input label="GitHub URL" icon={<Github size={14}/>} value={formData.details.GitHub} onChange={(v) => setFormData({...formData, details: {...formData.details, GitHub: v}})} placeholder="github.com/username" />
//           </div>
//         </div>

//         {/* SECTION 2: CAREER OBJECTIVE */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Briefcase className="text-orange-500"/>} title="2. Career Objective" />
//           <TextArea label="Professional Summary" value={formData.details.Summary} onChange={(v) => setFormData({...formData, details: {...formData.details, Summary: v}})} placeholder="Aspiring Full Stack Developer passionate about building scalable web apps..." />
//         </div>

//         {/* SECTION 3: SKILLS */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Code className="text-purple-500"/>} title="3. Technical Skills" />
//           <div className="flex gap-2 mb-4">
//             <input 
//               type="text" 
//               value={skillInput} 
//               onChange={(e) => setSkillInput(e.target.value)} 
//               onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} 
//               className="flex-1 border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400" 
//               placeholder="e.g. React.js, Node.js" 
//             />
//             <button type="button" onClick={addSkill} className="bg-slate-100 px-4 rounded-xl hover:bg-slate-200"><Plus /></button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skills.map((s, i) => (
//               <span key={i} className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100">
//                 {s} 
//                 <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => setFormData({...formData, skills: formData.skills.filter((_, idx) => idx !== i)})} />
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* SECTION 4: EDUCATION & PROJECTS */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
//           <div>
//             <SectionTitle icon={<GraduationCap className="text-green-500"/>} title="4. Education" />
//             <TextArea label="Degree, College, Year & CGPA" value={formData.details.Education} onChange={(v) => setFormData({...formData, details: {...formData.details, Education: v}})} placeholder="B.Tech in CSE | XYZ College | 2023-2027 | CGPA: 8.2" />
//           </div>
//           <div>
//             <SectionTitle icon={<Globe className="text-cyan-500"/>} title="5. Projects" />
//             <TextArea label="Project Details (Use bullet points)" value={formData.details.Projects} onChange={(v) => setFormData({...formData, details: {...formData.details, Projects: v}})} placeholder="Social Media Web App&#10;• Built auth using JWT&#10;• Used MERN Stack" />
//           </div>
//         </div>

//         {/* SECTION 5: EXPERIENCE & OTHERS */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
//           <div>
//             <SectionTitle icon={<Briefcase className="text-rose-500"/>} title="6. Experience / Internships" />
//             <TextArea label="Internship Details" value={formData.details.Experience} onChange={(v) => setFormData({...formData, details: {...formData.details, Experience: v}})} placeholder="AI Internship - Microsoft AINSI..." />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <SectionTitle icon={<Trophy className="text-yellow-500"/>} title="7. Achievements" />
//               <TextArea label="Certifications & Hackathons" value={formData.details.Achievements} onChange={(v) => setFormData({...formData, details: {...formData.details, Achievements: v}})} rows={3} />
//             </div>
//             <div>
//               <SectionTitle icon={<Plus className="text-slate-400"/>} title="8. Hobbies" />
//               <TextArea label="Interests" value={formData.details.Hobbies} onChange={(v) => setFormData({...formData, details: {...formData.details, Hobbies: v}})} rows={3} placeholder="Cricket, Anime..." />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// // UI HELPER COMPONENTS
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
//       <input 
//         type="text" 
//         value={value} 
//         onChange={(e) => onChange(e.target.value)} 
//         placeholder={placeholder} 
//         className={`w-full border-2 border-slate-100 p-2.5 rounded-xl outline-none focus:border-blue-400 transition-all text-sm ${icon ? 'pl-10' : ''}`} 
//       />
//     </div>
//   </div>
// );

// const TextArea = ({ label, value, onChange, placeholder, rows = 5 }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">{label}</label>
//     <textarea 
//       value={value} 
//       onChange={(e) => onChange(e.target.value)} 
//       placeholder={placeholder} 
//       rows={rows} 
//       className="w-full border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400 transition-all text-sm leading-relaxed" 
//     />
//   </div>
// );





// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import { 
//   Save, ArrowLeft, Loader2, Plus, X, User, 
//   Briefcase, GraduationCap, Code, Globe, Github, Trophy, Camera 
// } from "lucide-react";

// export default function Editor() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const resumeId = searchParams.get("id");

//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
//     image: "", // Stores the Base64 image string
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

//   // Handle Profile Image Upload (Convert to Base64)
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

//   useEffect(() => {
//     if (resumeId) {
//       const fetchResume = async () => {
//         setLoading(true);
//         try {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           const data = res.data;

//           const extract = (text, label) => {
//             if (!text) return "";
//             const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`, "i");
//             const match = text.match(regex);
//             return match ? match[1].trim() : "";
//           };

//           setFormData({
//             jobRole: data.jobRole || "",
//             skills: data.skills || [],
//             image: data.image || "", // Load existing image
//             details: {
//               FullName: extract(data.content, "FullName") || extract(data.content, "Name"),
//               Phone: extract(data.content, "Phone"),
//               Email: extract(data.content, "Email"),
//               LinkedIn: extract(data.content, "LinkedIn"),
//               GitHub: extract(data.content, "GitHub"),
//               Location: extract(data.content, "Location"),
//               Summary: extract(data.content, "Summary"),
//               Education: extract(data.content, "Education"),
//               Projects: extract(data.content, "Projects"),
//               Experience: extract(data.content, "Experience"),
//               Achievements: extract(data.content, "Achievements"),
//               Hobbies: extract(data.content, "Hobbies")
//             }
//           });
//         } catch (err) { console.error("Error fetching resume:", err); } 
//         finally { setLoading(false); }
//       };
//       fetchResume();
//     }
//   }, [resumeId]);

//   const handleSave = async (e) => {
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
//       const endpoint = resumeId ? `/resume/${resumeId}` : "/resume/create";
//       const method = resumeId ? "put" : "post";
//       const res = await api[method](endpoint, payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       navigate(`/preview?id=${resumeId || res.data._id}`);
//     } catch (err) {
//       alert("Error saving resume.");
//     } finally { setSaving(false); }
//   };

//   const addSkill = () => {
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
//       setSkillInput("");
//     }
//   };

//   if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20 font-sans">
//       <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
//           <ArrowLeft size={20} /> Exit Editor
//         </button>
//         <button onClick={handleSave} disabled={saving} className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg disabled:opacity-50">
//           {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} 
//           {resumeId ? "Update Changes" : "Create Resume"}
//         </button>
//       </div>

//       <div className="max-w-4xl mx-auto mt-8 px-4 space-y-8">
        
//         {/* SECTION 1: PERSONAL & CONTACT WITH IMAGE */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<User className="text-blue-500"/>} title="1. Personal Info & Photo" />
          
//           <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b pb-8">
//              <div className="relative group">
//                 <div className="w-32 h-32 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
//                    {formData.image ? (
//                      <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
//                    ) : (
//                      <Camera className="text-slate-400" size={32} />
//                    )}
//                 </div>
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   onChange={handleImageChange} 
//                   className="absolute inset-0 opacity-0 cursor-pointer" 
//                   title="Upload Profile Picture"
//                 />
//              </div>
//              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({...formData, details: {...formData.details, FullName: v}})} placeholder="Srijon Choudhury" />
//                 <Input label="Job Role / Title" value={formData.jobRole} onChange={(v) => setFormData({...formData, jobRole: v})} placeholder="Full Stack Developer" />
//              </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Input label="Phone" value={formData.details.Phone} onChange={(v) => setFormData({...formData, details: {...formData.details, Phone: v}})} />
//             <Input label="Email" value={formData.details.Email} onChange={(v) => setFormData({...formData, details: {...formData.details, Email: v}})} />
//             <Input label="Location" value={formData.details.Location} onChange={(v) => setFormData({...formData, details: {...formData.details, Location: v}})} />
//             <Input label="LinkedIn" icon={<Globe size={14}/>} value={formData.details.LinkedIn} onChange={(v) => setFormData({...formData, details: {...formData.details, LinkedIn: v}})} />
//             <Input label="GitHub" icon={<Github size={14}/>} value={formData.details.GitHub} onChange={(v) => setFormData({...formData, details: {...formData.details, GitHub: v}})} />
//           </div>
//         </div>

//         {/* SECTION 2: OBJECTIVE */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Briefcase className="text-orange-500"/>} title="2. Career Objective" />
//           <TextArea label="Professional Summary" value={formData.details.Summary} onChange={(v) => setFormData({...formData, details: {...formData.details, Summary: v}})} />
//         </div>

//         {/* SECTION 3: SKILLS (TAG SYSTEM) */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Code className="text-purple-500"/>} title="3. Technical Skills" />
//           <div className="flex gap-2 mb-4">
//             <input 
//               type="text" 
//               value={skillInput} 
//               onChange={(e) => setSkillInput(e.target.value)} 
//               onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} 
//               className="flex-1 border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400" 
//               placeholder="e.g. React.js" 
//             />
//             <button type="button" onClick={addSkill} className="bg-slate-100 px-4 rounded-xl hover:bg-slate-200"><Plus /></button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skills.map((s, i) => (
//               <span key={i} className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100">
//                 {s} <X size={14} className="cursor-pointer" onClick={() => setFormData({...formData, skills: formData.skills.filter((_, idx) => idx !== i)})} />
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* REMAINING SECTIONS */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
//           <TextArea label="Education" value={formData.details.Education} onChange={(v) => setFormData({...formData, details: {...formData.details, Education: v}})} />
//           <TextArea label="Projects" value={formData.details.Projects} onChange={(v) => setFormData({...formData, details: {...formData.details, Projects: v}})} />
//           <TextArea label="Experience" value={formData.details.Experience} onChange={(v) => setFormData({...formData, details: {...formData.details, Experience: v}})} />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//              <TextArea label="Achievements" value={formData.details.Achievements} onChange={(v) => setFormData({...formData, details: {...formData.details, Achievements: v}})} rows={3} />
//              <TextArea label="Hobbies" value={formData.details.Hobbies} onChange={(v) => setFormData({...formData, details: {...formData.details, Hobbies: v}})} rows={3} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

// const TextArea = ({ label, value, onChange, placeholder, rows = 5 }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">{label}</label>
//     <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400 text-sm leading-relaxed" />
//   </div>
// );





















// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import { 
//   Save, ArrowLeft, Loader2, Plus, X, User, 
//   Briefcase, GraduationCap, Code, Globe, Github, Trophy, Camera,
//   LayoutDashboard, PlusCircle // Added for navigation icons
// } from "lucide-react";

// export default function Editor() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const resumeId = searchParams.get("id");

//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [skillInput, setSkillInput] = useState("");

//   const [formData, setFormData] = useState({
//     jobRole: "",
//     skills: [],
//     image: "", // Stores the Base64 image string
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

//   // Handle Profile Image Upload (Convert to Base64)
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

//   useEffect(() => {
//     if (resumeId) {
//       const fetchResume = async () => {
//         setLoading(true);
//         try {
//           const res = await api.get(`/resume/${resumeId}`, {
//             headers: { Authorization: localStorage.getItem("token") },
//           });
//           const data = res.data;

//           const extract = (text, label) => {
//             if (!text) return "";
//             const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`, "i");
//             const match = text.match(regex);
//             return match ? match[1].trim() : "";
//           };

//           setFormData({
//             jobRole: data.jobRole || "",
//             skills: data.skills || [],
//             image: data.image || "", 
//             details: {
//               FullName: extract(data.content, "FullName") || extract(data.content, "Name"),
//               Phone: extract(data.content, "Phone"),
//               Email: extract(data.content, "Email"),
//               LinkedIn: extract(data.content, "LinkedIn"),
//               GitHub: extract(data.content, "GitHub"),
//               Location: extract(data.content, "Location"),
//               Summary: extract(data.content, "Summary"),
//               Education: extract(data.content, "Education"),
//               Projects: extract(data.content, "Projects"),
//               Experience: extract(data.content, "Experience"),
//               Achievements: extract(data.content, "Achievements"),
//               Hobbies: extract(data.content, "Hobbies")
//             }
//           });
//         } catch (err) { console.error("Error fetching resume:", err); } 
//         finally { setLoading(false); }
//       };
//       fetchResume();
//     }
//   }, [resumeId]);

//   const handleSave = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     const mergedContent = Object.entries(formData.details)
//       .filter(([_, value]) => value && value.trim() !== "")
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n\n");

//     const payload = {
//       jobRole: formData.jobRole,
//       skills: formData.skills,
//       image: formData.image, 
//       content: mergedContent
//     };

//     try {
//       const endpoint = resumeId ? `/resume/${resumeId}` : "/resume/create";
//       const method = resumeId ? "put" : "post";
//       const res = await api[method](endpoint, payload, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       navigate(`/preview?id=${resumeId || res.data._id}`);
//     } catch (err) {
//       alert("Error saving resume.");
//     } finally { setSaving(false); }
//   };

//   const addSkill = () => {
//     if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
//       setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
//       setSkillInput("");
//     }
//   };

//   if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      
//       {/* UPDATED NAVIGATION BAR */}
//       <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors">
//           <ArrowLeft size={20} /> Exit Editor
//         </button>

//         <div className="flex gap-3">
//           {/* DASHBOARD BUTTON */}
//           <button 
//             onClick={() => navigate("/dashboard")} 
//             className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2 rounded-xl font-bold hover:bg-slate-200 transition-all border border-slate-200"
//           >
//             <LayoutDashboard size={18} /> Dashboard
//           </button>
          
//           {/* NEW CREATE BUTTON */}
//           <button 
//             onClick={() => navigate("/create")} 
//             className="flex items-center gap-2 bg-slate-100 text-blue-600 px-5 py-2 rounded-xl font-bold hover:bg-blue-50 transition-all border border-blue-100"
//           >
//             <PlusCircle size={18} /> New Resume
//           </button>

//           {/* SAVE/UPDATE BUTTON */}
//           <button onClick={handleSave} disabled={saving} className="bg-blue-600 text-white px-8 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-md disabled:opacity-50 transition-all">
//             {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} 
//             {resumeId ? "Update Changes" : "Create Resume"}
//           </button>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto mt-8 px-4 space-y-8">
//         {/* ... Rest of your existing form sections ... */}
//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<User className="text-blue-500"/>} title="1. Personal Info & Photo" />
          
//           <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b pb-8">
//              <div className="relative group">
//                 <div className="w-32 h-32 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
//                    {formData.image ? (
//                      <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
//                    ) : (
//                      <Camera className="text-slate-400" size={32} />
//                    )}
//                 </div>
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   onChange={handleImageChange} 
//                   className="absolute inset-0 opacity-0 cursor-pointer" 
//                   title="Upload Profile Picture"
//                 />
//              </div>
//              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({...formData, details: {...formData.details, FullName: v}})} placeholder="Srijon Choudhury" />
//                 <Input label="Job Role / Title" value={formData.jobRole} onChange={(v) => setFormData({...formData, jobRole: v})} placeholder="Full Stack Developer" />
//              </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Input label="Phone" value={formData.details.Phone} onChange={(v) => setFormData({...formData, details: {...formData.details, Phone: v}})} />
//             <Input label="Email" value={formData.details.Email} onChange={(v) => setFormData({...formData, details: {...formData.details, Email: v}})} />
//             <Input label="Location" value={formData.details.Location} onChange={(v) => setFormData({...formData, details: {...formData.details, Location: v}})} />
//             <Input label="LinkedIn" icon={<Globe size={14}/>} value={formData.details.LinkedIn} onChange={(v) => setFormData({...formData, details: {...formData.details, LinkedIn: v}})} />
//             <Input label="GitHub" icon={<Github size={14}/>} value={formData.details.GitHub} onChange={(v) => setFormData({...formData, details: {...formData.details, GitHub: v}})} />
//           </div>
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Briefcase className="text-orange-500"/>} title="2. Career Objective" />
//           <TextArea label="Professional Summary" value={formData.details.Summary} onChange={(v) => setFormData({...formData, details: {...formData.details, Summary: v}})} />
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//           <SectionTitle icon={<Code className="text-purple-500"/>} title="3. Technical Skills" />
//           <div className="flex gap-2 mb-4">
//             <input 
//               type="text" 
//               value={skillInput} 
//               onChange={(e) => setSkillInput(e.target.value)} 
//               onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} 
//               className="flex-1 border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400" 
//               placeholder="e.g. React.js" 
//             />
//             <button type="button" onClick={addSkill} className="bg-slate-100 px-4 rounded-xl hover:bg-slate-200"><Plus /></button>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {formData.skills.map((s, i) => (
//               <span key={i} className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100">
//                 {s} <X size={14} className="cursor-pointer" onClick={() => setFormData({...formData, skills: formData.skills.filter((_, idx) => idx !== i)})} />
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-8">
//           <TextArea label="Education" value={formData.details.Education} onChange={(v) => setFormData({...formData, details: {...formData.details, Education: v}})} />
//           <TextArea label="Projects" value={formData.details.Projects} onChange={(v) => setFormData({...formData, details: {...formData.details, Projects: v}})} />
//           <TextArea label="Experience" value={formData.details.Experience} onChange={(v) => setFormData({...formData, details: {...formData.details, Experience: v}})} />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//              <TextArea label="Achievements" value={formData.details.Achievements} onChange={(v) => setFormData({...formData, details: {...formData.details, Achievements: v}})} rows={3} />
//              <TextArea label="Hobbies" value={formData.details.Hobbies} onChange={(v) => setFormData({...formData, details: {...formData.details, Hobbies: v}})} rows={3} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable UI components
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

// const TextArea = ({ label, value, onChange, placeholder, rows = 5 }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-1">{label}</label>
//     <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full border-2 border-slate-100 p-3 rounded-xl outline-none focus:border-blue-400 text-sm leading-relaxed" />
//   </div>
// );

















import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import ThemeToggle from "../components/ThemeToggle"; // ✅ Theme Toggle Integrated
import { 
  Save, ArrowLeft, Loader2, Plus, X, User, 
  Briefcase, Code, Globe, Github, Camera,
  LayoutDashboard, PlusCircle, Sparkles
} from "lucide-react";

export default function Editor() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resumeId = searchParams.get("id");

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [skillInput, setSkillInput] = useState("");

  const [formData, setFormData] = useState({
    jobRole: "",
    skills: [],
    image: "",
    details: {
      FullName: "",
      Phone: "",
      Email: "",
      LinkedIn: "",
      GitHub: "",
      Location: "",
      Summary: "",
      Education: "",
      Projects: "",
      Experience: "",
      Achievements: "",
      Hobbies: ""
    }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (resumeId) {
      const fetchResume = async () => {
        setLoading(true);
        try {
          const res = await api.get(`/resume/${resumeId}`, {
            headers: { Authorization: localStorage.getItem("token") },
          });
          const data = res.data;

          const extract = (text, label) => {
            if (!text) return "";
            const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n\\n|\\n[A-Z][a-z]+:|$)`, "i");
            const match = text.match(regex);
            return match ? match[1].trim() : "";
          };

          setFormData({
            jobRole: data.jobRole || "",
            skills: data.skills || [],
            image: data.image || "", 
            details: {
              FullName: extract(data.content, "FullName") || extract(data.content, "Name"),
              Phone: extract(data.content, "Phone"),
              Email: extract(data.content, "Email"),
              LinkedIn: extract(data.content, "LinkedIn"),
              GitHub: extract(data.content, "GitHub"),
              Location: extract(data.content, "Location"),
              Summary: extract(data.content, "Summary"),
              Education: extract(data.content, "Education"),
              Projects: extract(data.content, "Projects"),
              Experience: extract(data.content, "Experience"),
              Achievements: extract(data.content, "Achievements"),
              Hobbies: extract(data.content, "Hobbies")
            }
          });
        } catch (err) { console.error("Error fetching resume:", err); } 
        finally { setLoading(false); }
      };
      fetchResume();
    }
  }, [resumeId]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    const mergedContent = Object.entries(formData.details)
      .filter(([_, value]) => value && value.trim() !== "")
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n\n");

    const payload = {
      jobRole: formData.jobRole,
      skills: formData.skills,
      image: formData.image, 
      content: mergedContent
    };

    try {
      const endpoint = resumeId ? `/resume/${resumeId}` : "/resume/create";
      const method = resumeId ? "put" : "post";
      await api[method](endpoint, payload, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      navigate(`/preview?id=${resumeId}`);
    } catch (err) {
      alert("Error saving resume.");
    } finally { setSaving(false); }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
      setSkillInput("");
    }
  };

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-slate-950">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300 pb-20 font-sans">
      
      {/* ✅ UNIFIED NAVBAR with ThemeToggle */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-800 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Sparkles size={20} />
          </div>
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 font-bold transition-all">
            <ArrowLeft size={20} /> <span className="hidden md:inline">Dashboard</span>
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <button 
            onClick={() => navigate("/dashboard")} 
            className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <LayoutDashboard size={18} />
          </button>
          
          <button onClick={handleSave} disabled={saving} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 shadow-md disabled:opacity-50 transition-all">
            {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} 
            <span className="hidden sm:inline">{resumeId ? "Update Changes" : "Create Resume"}</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 px-4 space-y-8">
        
        {/* PERSONAL INFO SECTION */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
          <SectionTitle icon={<User className="text-blue-500"/>} title="Personal Info & Photo" />
          
          <div className="flex flex-col md:flex-row gap-8 mb-8 items-center border-b dark:border-slate-800 pb-8">
             <div className="relative group">
                <div className="w-32 h-32 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                   {formData.image ? (
                     <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
                   ) : (
                     <Camera className="text-slate-300 dark:text-slate-600" size={32} />
                   )}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
             </div>
             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Input label="Full Name" value={formData.details.FullName} onChange={(v) => setFormData({...formData, details: {...formData.details, FullName: v}})} placeholder="John Doe" />
                <Input label="Job Title" value={formData.jobRole} onChange={(v) => setFormData({...formData, jobRole: v})} placeholder="Full Stack Developer" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Phone" value={formData.details.Phone} onChange={(v) => setFormData({...formData, details: {...formData.details, Phone: v}})} />
            <Input label="Email" value={formData.details.Email} onChange={(v) => setFormData({...formData, details: {...formData.details, Email: v}})} />
            <Input label="Location" value={formData.details.Location} onChange={(v) => setFormData({...formData, details: {...formData.details, Location: v}})} />
            <Input label="LinkedIn" value={formData.details.LinkedIn} onChange={(v) => setFormData({...formData, details: {...formData.details, LinkedIn: v}})} />
            <Input label="GitHub" value={formData.details.GitHub} onChange={(v) => setFormData({...formData, details: {...formData.details, GitHub: v}})} />
          </div>
        </div>

        {/* CAREER OBJECTIVE */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
          <SectionTitle icon={<Briefcase className="text-orange-500"/>} title="Career Objective" />
          <TextArea label="Professional Summary" value={formData.details.Summary} onChange={(v) => setFormData({...formData, details: {...formData.details, Summary: v}})} />
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
          <SectionTitle icon={<Code className="text-purple-500"/>} title="Technical Skills" />
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={skillInput} 
              onChange={(e) => setSkillInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} 
              className="flex-1 bg-slate-50 dark:bg-slate-800 dark:text-slate-100 border-2 border-slate-100 dark:border-slate-700 p-3 rounded-xl outline-none focus:border-blue-400 transition-all" 
              placeholder="e.g. React.js" 
            />
            <button type="button" onClick={addSkill} className="bg-slate-100 dark:bg-slate-800 px-4 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Plus className="dark:text-slate-100" /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((s, i) => (
              <span key={i} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-blue-100 dark:border-blue-900/50">
                {s} <X size={14} className="cursor-pointer" onClick={() => setFormData({...formData, skills: formData.skills.filter((_, idx) => idx !== i)})} />
              </span>
            ))}
          </div>
        </div>

        {/* EDUCATION, PROJECTS, EXPERIENCE */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 space-y-8 transition-all">
          <TextArea label="Education" value={formData.details.Education} onChange={(v) => setFormData({...formData, details: {...formData.details, Education: v}})} />
          <TextArea label="Projects" value={formData.details.Projects} onChange={(v) => setFormData({...formData, details: {...formData.details, Projects: v}})} />
          <TextArea label="Experience" value={formData.details.Experience} onChange={(v) => setFormData({...formData, details: {...formData.details, Experience: v}})} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <TextArea label="Achievements" value={formData.details.Achievements} onChange={(v) => setFormData({...formData, details: {...formData.details, Achievements: v}})} rows={3} />
             <TextArea label="Hobbies" value={formData.details.Hobbies} onChange={(v) => setFormData({...formData, details: {...formData.details, Hobbies: v}})} rows={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-inner border border-white dark:border-slate-700">{icon}</div>
    <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">{title}</h2>
  </div>
);

const Input = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ml-1 group-focus-within:text-blue-500 transition-colors">{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-50 dark:border-slate-800 p-3.5 rounded-2xl outline-none focus:border-blue-400 dark:focus:border-blue-500 dark:text-slate-100 transition-all text-sm font-medium shadow-inner" />
  </div>
);

const TextArea = ({ label, value, onChange, placeholder, rows = 5 }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ml-1 group-focus-within:text-blue-500 transition-colors">{label}</label>
    <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-50 dark:border-slate-800 p-4 rounded-[1.5rem] outline-none focus:border-blue-400 dark:focus:border-blue-500 dark:text-slate-100 transition-all text-sm leading-relaxed font-medium shadow-inner" />
  </div>
);