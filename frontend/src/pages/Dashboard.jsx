// export default function Dashboard(){
//  return(
//   <div className="p-10 space-x-4">
//     <a className="btn" href="/builder">➕ Create Resume</a>
//     <a className="btn" href="/checker">🧠 Check Resume</a>
//     <a className="btn" href="/download">📄 Download PDF</a>
//   </div>
//  );
// }



// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-[600px] text-center">
//         <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

//         <div className="flex flex-col gap-4">
//           <a
//             href="/builder"
//             className="block w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           >
//             ➕ Create Resume
//           </a>

//           <a
//             href="/checker"
//             className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             🧠 Check Resume
//           </a>

//           <a
//             href="/download"
//             className="block w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//           >
//             📄 Download PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     api
//       .get("/resume/my", {
//         headers: { Authorization: localStorage.getItem("token") },
//       })
//       .then((res) => setResumes(res.data))
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

//       <div className="flex gap-4 mb-6">
//         <a
//           href="/builder"
//           className="px-4 py-2 bg-green-600 text-white rounded"
//         >
//           ➕ Create Resume
//         </a>

//         <a
//           href="/checker"
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           🧠 Check Resume
//         </a>

//         <a
//           href="/download"
//           className="px-4 py-2 bg-purple-600 text-white rounded"
//         >
//           📄 Download PDF
//         </a>
//       </div>

//       <h3 className="text-xl font-semibold mb-2">My Resumes</h3>

//       {resumes.length === 0 ? (
//         <p>No resumes created yet.</p>
//       ) : (
//         <div className="bg-white shadow rounded p-4">
//           {resumes.map((r) => (
//             <div
//               key={r._id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <span>{r.jobRole}</span>
//               <button
//                 onClick={() => {
//                   localStorage.setItem("selectedResume", JSON.stringify(r));
//                   window.location = "/preview";
//                 }}
//                 className="px-3 py-1 bg-gray-800 text-white rounded"
//               >
//                 View
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     api
//       .get("/resume/my", {
//         headers: { Authorization: localStorage.getItem("token") },
//       })
//       .then((res) => setResumes(res.data))
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

//       <div className="flex gap-4 mb-6">
//         <a href="/builder" className="px-4 py-2 bg-green-600 text-white rounded">
//           ➕ Create Resume
//         </a>
//         <a href="/checker" className="px-4 py-2 bg-blue-600 text-white rounded">
//           🧠 Check Resume
//         </a>
//         <a href="/download" className="px-4 py-2 bg-purple-600 text-white rounded">
//           📄 Download PDF
//         </a>
//       </div>

//       <h3 className="text-xl font-semibold mb-2">My Resumes</h3>

//       {resumes.length === 0 ? (
//         <p>No resumes created yet.</p>
//       ) : (
//         <div className="bg-white shadow rounded p-4">
//           {resumes.map((r) => (
//             <div
//               key={r._id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <span>{r.jobRole}</span>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     localStorage.setItem("selectedResume", JSON.stringify(r));
//                     window.location = "/preview";
//                   }}
//                   className="px-3 py-1 bg-gray-800 text-white rounded"
//                 >
//                   View
//                 </button>

//                 <button
//                   onClick={async () => {
//                     const res = await api.post(
//                       "/resume/check",
//                       { resumeText: r.content, jobRole: r.jobRole },
//                       { headers: { Authorization: localStorage.getItem("token") } }
//                     );
//                     localStorage.setItem("result", JSON.stringify(res.data));
//                     window.location = "/preview";
//                   }}
//                   className="px-3 py-1 bg-blue-600 text-white rounded"
//                 >
//                   Check with AI
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const res = await api.get("/resume/my", {
//           headers: { Authorization: localStorage.getItem("token") },
//         });
//         setResumes(res.data);
//       } catch (err) {
//         console.log("Error fetching resumes", err);
//       }
//     };

//     fetchResumes();
//   }, []);

//   return (
//     <div className="p-10">
//       <div className="space-x-4 mb-6">
//         <a className="btn" href="/builder">➕ Create Resume</a>
//         <a className="btn" href="/checker">🧠 Check Resume</a>
//         <a className="btn" href="/download">📄 Download PDF</a>
//       </div>

//       <h2 className="text-xl font-bold mb-3">My Resumes</h2>

//       {resumes.length === 0 ? (
//         <p>No resumes found. Create one first.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {resumes.map((r) => (
//             <div key={r._id} className="border p-4 rounded shadow">
//               <h3 className="font-semibold">{r.jobRole}</h3>
//               <p className="text-sm text-gray-600">
//                 Created: {new Date(r.createdAt).toLocaleDateString()}
//               </p>

//               <div className="mt-2 space-x-2">
//                 <a href={`/preview?id=${r._id}`} className="text-blue-500">
//                   View
//                 </a>
//                 <a href={`/checker?id=${r._id}`} className="text-green-500">
//                   Check with AI
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const res = await api.get("/resume/my", {
//           headers: { Authorization: localStorage.getItem("token") },
//         });
//         setResumes(res.data);
//       } catch (err) {
//         console.log("Error fetching resumes", err);
//       }
//     };

//     fetchResumes();
//   }, []);

//   return (
//     <div className="p-10">
//       <div className="space-x-4 mb-6">
//         <a className="btn" href="/builder">➕ Create Resume</a>
//         <a className="btn" href="/checker">🧠 Check Resume</a>
//         <a className="btn" href="/download">📄 Download PDF</a>
//       </div>

//       <h2 className="text-xl font-bold mb-3">My Resumes</h2>

//       {resumes.length === 0 ? (
//         <p>No resumes found. Create one first.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {resumes.map((r) => (
//             <div key={r._id} className="border p-4 rounded shadow bg-white">
//               <h3 className="font-semibold text-lg">{r.jobRole}</h3>

//               <p className="text-sm text-gray-600">
//                 Created by: <b>{r.user?.name || "You"}</b>
//               </p>

//               <p className="text-sm text-gray-500">
//                 Created: {new Date(r.createdAt).toLocaleDateString()}
//               </p>

//               {/* Small preview of resume */}
//               {r.content && (
//                 <p className="text-sm text-gray-700 mt-2 line-clamp-2">
//                   {r.content.slice(0, 120)}...
//                 </p>
//               )}

//               <div className="mt-3 space-x-4">
//                 <a href={`/preview?id=${r._id}`} className="text-blue-500 hover:underline">
//                   View
//                 </a>
//                 <a href={`/checker?id=${r._id}`} className="text-green-500 hover:underline">
//                   Check with AI
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const res = await api.get("/resume/my", {
//           headers: { Authorization: localStorage.getItem("token") },
//         });
//         setResumes(res.data);
//       } catch (err) {
//         console.log("Error fetching resumes", err);
//       }
//     };

//     fetchResumes();
//   }, []);

//   const deleteResume = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this resume?")) return;

//     await api.delete(`/resume/${id}`, {
//       headers: { Authorization: localStorage.getItem("token") },
//     });

//     setResumes(resumes.filter(r => r._id !== id));
//   };

//   return (
//     <div className="p-10">
//       <div className="space-x-4 mb-6">
//         <a className="btn" href="/builder">➕ Create Resume</a>
//         <a className="btn" href="/checker">🧠 Check Resume</a>
//         <a className="btn" href="/download">📄 Download PDF</a>
//       </div>

//       <h2 className="text-xl font-bold mb-3">My Resumes</h2>

//       {resumes.length === 0 ? (
//         <p>No resumes found. Create one first.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {resumes.map((r) => (
//             <div key={r._id} className="border p-4 rounded shadow">
//               <h3 className="font-semibold">{r.jobRole || "Untitled Resume"}</h3>
//               <p className="text-sm text-gray-600">
//                 Created: {new Date(r.createdAt).toLocaleDateString()}
//               </p>

//               <div className="mt-2 space-x-3">
//                 <a href={`/preview?id=${r._id}`} className="text-blue-500">
//                   View
//                 </a>
//                 <a href={`/checker?id=${r._id}`} className="text-green-500">
//                   Check with AI
//                 </a>
//                 <a href={`/builder?id=${r._id}`} className="text-blue-500">Edit</a>
//                 <button 
//                   onClick={() => deleteResume(r._id)}
//                   className="text-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }








// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import { Plus, Eye, Edit, Trash2, FileText, Sparkles, Loader2 } from "lucide-react";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const res = await api.get("/resume/my", {
//           headers: { Authorization: localStorage.getItem("token") },
//         });
//         setResumes(res.data);
//       } catch (err) {
//         console.error("Failed to fetch resumes", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchResumes();
//   }, []);

//   const deleteResume = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this resume?")) return;
//     try {
//       await api.delete(`/resume/${id}`, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       setResumes(resumes.filter((r) => r._id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;

//   return (
//     <div className="min-h-screen bg-slate-50 p-8 font-sans">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-3xl font-bold text-slate-900">My Resumes</h1>
//           <div className="flex gap-4">
//             <button onClick={() => navigate("/checker")} className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition-all">
//               <Sparkles size={18} /> AI Checker
//             </button>
//             <button onClick={() => navigate("/create")} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
//               <Plus size={18} /> Create New
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {resumes.map((resume) => (
//             <div key={resume._id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
//                   <FileText size={24} />
//                 </div>
//                 <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <button onClick={() => navigate(`/preview?id=${resume._id}`)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600" title="View"><Eye size={18} /></button>
//                   <button onClick={() => navigate(`/editor?id=${resume._id}`)} className="p-2 hover:bg-slate-100 rounded-lg text-blue-600" title="Edit"><Edit size={18} /></button>
//                   <button onClick={() => deleteResume(resume._id)} className="p-2 hover:bg-slate-100 rounded-lg text-red-600" title="Delete"><Trash2 size={18} /></button>
//                 </div>
//               </div>
//               <h3 className="font-bold text-slate-800 text-lg truncate">{resume.jobRole || "Untitled Resume"}</h3>
//               <p className="text-slate-400 text-xs mt-1">Created on {new Date(resume.createdAt).toLocaleDateString()}</p>
//             </div>
//           ))}
//           {resumes.length === 0 && (
//             <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed">
//               <p className="text-slate-400 font-medium italic text-lg">No resumes found. Start by creating your first one!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


















// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../api/api";
// import { 
//   Plus, Eye, Edit, Trash2, FileText, 
//   Sparkles, Loader2, Layout, Clock, ChevronRight 
// } from "lucide-react";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const res = await api.get("/resume/my", {
//           headers: { Authorization: localStorage.getItem("token") },
//         });
//         setResumes(res.data);
//       } catch (err) {
//         console.error("Failed to fetch resumes", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchResumes();
//   }, []);

//   const deleteResume = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this resume? Permanent delete cannot be undone.")) return;
//     try {
//       await api.delete(`/resume/${id}`, {
//         headers: { Authorization: localStorage.getItem("token") },
//       });
//       setResumes(resumes.filter((r) => r._id !== id));
//     } catch (err) {
//       alert("Delete failed. Please try again.");
//     }
//   };

//   if (loading) return (
//     <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50">
//       <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
//       <p className="text-slate-500 font-medium animate-pulse">Loading your career workspace...</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-12 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* HEADER SECTION */}
//         <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
//           <div>
//             <h1 className="text-4xl font-black text-slate-900 tracking-tight">Career Workspace</h1>
//             <p className="text-slate-500 mt-2">Manage, optimize, and create professional resumes.</p>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             <button 
//               onClick={() => navigate("/checker")} 
//               className="flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
//             >
//               <Sparkles size={18} className="text-blue-500" /> AI Optimizer
//             </button>
//             <button 
//               onClick={() => navigate("/create")} 
//               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
//             >
//               <Plus size={20} /> New Resume
//             </button>
//           </div>
//         </header>

//         {/* QUICK STATS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           <StatCard icon={<FileText className="text-blue-600"/>} label="Total Resumes" value={resumes.length} />
//           <StatCard icon={<Clock className="text-orange-600"/>} label="Last Updated" value={resumes.length > 0 ? new Date(resumes[0].createdAt).toLocaleDateString() : "N/A"} />
//           <StatCard icon={<Layout className="text-purple-600"/>} label="Active Templates" value="Modern Developer" />
//         </div>

//         {/* RESUME GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {resumes.map((resume) => (
//             <div 
//               key={resume._id} 
//               className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 p-6 flex gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
//                 <button 
//                   onClick={() => navigate(`/editor?id=${resume._id}`)} 
//                   className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                   <Edit size={18} />
//                 </button>
//                 <button 
//                   onClick={() => deleteResume(resume._id)} 
//                   className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
//                 >
//                   <Trash2 size={18} />
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <FileText size={32} />
//                 </div>
//                 <h3 className="font-extrabold text-slate-900 text-xl mb-2 truncate pr-16">
//                   {resume.jobRole || "Software Engineer"}
//                 </h3>
//                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
//                   <Clock size={14} />
//                   Created {new Date(resume.createdAt).toLocaleDateString()}
//                 </div>
//               </div>

//               <button 
//                 onClick={() => navigate(`/preview?id=${resume._id}`)}
//                 className="w-full mt-4 flex items-center justify-between px-6 py-4 bg-slate-50 rounded-2xl font-bold text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
//               >
//                 View Resume <ChevronRight size={18} />
//               </button>
//             </div>
//           ))}

//           {/* EMPTY STATE */}
//           {resumes.length === 0 && (
//             <div className="col-span-full py-32 flex flex-col items-center justify-center bg-white rounded-[3rem] border-4 border-dashed border-slate-100">
//               <div className="bg-slate-50 p-6 rounded-full mb-6">
//                 <FileText size={64} className="text-slate-200" />
//               </div>
//               <h2 className="text-2xl font-bold text-slate-800">No resumes found</h2>
//               <p className="text-slate-400 mb-8">Start building your career today by creating your first resume.</p>
//               <button 
//                 onClick={() => navigate("/create")} 
//                 className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
//               >
//                 Create My First Resume
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sub-component for Statistics
// function StatCard({ icon, label, value }) {
//   return (
//     <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-5 shadow-sm">
//       <div className="p-4 bg-slate-50 rounded-2xl">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{label}</p>
//         <p className="text-2xl font-black text-slate-900">{value}</p>
//       </div>
//     </div>
//   );
// }



















import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { 
  Plus, Edit, Trash2, FileText, 
  Sparkles, Loader2, Layout, Clock, ChevronRight, LogOut 
} from "lucide-react";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await api.get("/resume/my", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setResumes(res.data);
      } catch (err) {
        console.error("Failed to fetch resumes", err);
        if (err.response?.status === 401) navigate("/"); // Redirect to login if unauthorized
      } finally {
        setLoading(false);
      }
    };
    fetchResumes();
  }, [navigate]);

  const deleteResume = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume? Permanent delete cannot be undone.")) return;
    try {
      await api.delete(`/resume/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setResumes(resumes.filter((r) => r._id !== id));
    } catch (err) {
      alert("Delete failed. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#F8FAFC]">
      <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
      <p className="text-slate-500 font-medium animate-pulse tracking-wide">Loading your workspace...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
              <Sparkles size={20} />
            </div>
            <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">AI Resume Builder</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold text-sm transition-colors"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Career Workspace</h2>
            <p className="text-slate-500 mt-2 font-medium">Manage, optimize, and create professional resumes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => navigate("/checker")} 
              className="flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Sparkles size={18} className="text-blue-500" /> AI Optimizer
            </button>
            <button 
              onClick={() => navigate("/create")} 
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
            >
              <Plus size={20} /> New Resume
            </button>
          </div>
        </header>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<FileText className="text-blue-600"/>} label="Total Resumes" value={resumes.length} />
          <StatCard icon={<Clock className="text-orange-600"/>} label="Last Activity" value={resumes.length > 0 ? new Date(resumes[0].createdAt).toLocaleDateString() : "No Activity"} />
          <StatCard icon={<Layout className="text-purple-600"/>} label="Active Templates" value="Modern Developer" />
        </div>

        {/* RESUME GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {resumes.map((resume) => (
            <div 
              key={resume._id} 
              className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* HOVER ACTIONS */}
              <div className="absolute top-0 right-0 p-6 flex gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  onClick={() => navigate(`/editor?id=${resume._id}`)} 
                  className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Edit size={18} />
                </button>
                <button 
                  onClick={() => deleteResume(resume._id)} 
                  className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText size={32} />
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-2 truncate pr-16">
                  {resume.jobRole || "Untitled Resume"}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium uppercase tracking-wider">
                  <Clock size={14} />
                  Created {new Date(resume.createdAt).toLocaleDateString()}
                </div>
              </div>

              <button 
                onClick={() => navigate(`/preview?id=${resume._id}`)}
                className="w-full mt-4 flex items-center justify-between px-6 py-4 bg-slate-50 rounded-2xl font-bold text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
              >
                View Full Resume <ChevronRight size={18} />
              </button>
            </div>
          ))}

          {/* EMPTY STATE */}
          {resumes.length === 0 && (
            <div className="col-span-full py-32 flex flex-col items-center justify-center bg-white rounded-[3rem] border-4 border-dashed border-slate-100 shadow-inner">
              <div className="bg-slate-50 p-6 rounded-full mb-6">
                <FileText size={64} className="text-slate-200" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Your workspace is empty</h2>
              <p className="text-slate-400 mb-8 max-w-sm text-center">Start building your professional career today by creating your first resume with AI insights.</p>
              <button 
                onClick={() => navigate("/create")} 
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
              >
                Create My First Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="p-4 bg-slate-50 rounded-2xl">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-2xl font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}