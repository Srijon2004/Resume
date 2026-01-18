// import ResumeForm from "../components/ResumeForm";

// export default function Builder(){
//   return(
//     <div>
//       <ResumeForm />
//     </div>
//   );
// }
// okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
import ResumeForm from "../components/ResumeForm";
import { Sparkles } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function Builder() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Optional Top Branding for the Builder Page */}
      {/* <div className="max-w-7xl mx-auto px-10 pt-8 pb-2">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Sparkles size={20} />
            </div>
            <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">AI Resume Builder</h1>
        </div>
      </div> */}

      <ResumeForm />

      {/* Helper Footer for the Builder */}
      <footer className="py-10 text-center">
        <p className="text-slate-400 text-sm font-medium">
            Step-by-step resume intelligence powered by Groq AI
        </p>
      </footer>
    </div>
  );
}














// import ResumeForm from "../components/ResumeForm";
// import { Sparkles, ArrowLeft } from "lucide-react";
// import ThemeToggle from "../components/ThemeToggle";
// import { useNavigate } from "react-router-dom";

// export default function Builder() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-[#F8FAFC] dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-300">
//       <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 pr-6 border-r border-slate-200 dark:border-slate-700">
//               <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
//                 <Sparkles size={20} />
//               </div>
//               <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tighter uppercase hidden sm:block">
//                 AI Builder
//               </h1>
//             </div>
//             <button
//               onClick={() => navigate("/dashboard")} // Explicit navigation
//               className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 font-bold transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Dashboard</span>
//             </button>
//           </div>
//           <div className="flex items-center gap-4">
//              <span className="hidden lg:block text-slate-400 dark:text-slate-500 text-xs font-medium italic">
//                 Changes are saved to cloud
//              </span>
//              <ThemeToggle />
//           </div>
//         </div>
//       </div>
//       <div className="flex-1">
//         <ResumeForm />
//       </div>
//     </div>
//   );
// }


















// import ResumeForm from "../components/ResumeForm";
// import { Sparkles, ArrowLeft, LayoutDashboard, PlusCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Builder() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* ✅ UNIFIED TOP NAVIGATION */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">

//           {/* LEFT SIDE: BRANDING & NAVIGATION */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 pr-6 border-r border-slate-200">
//               <div className="p-2 bg-blue-600 rounded-lg text-white">
//                 <Sparkles size={20} />
//               </div>
//               <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden sm:block">
//                 AI Resume Builder
//               </h1>
//             </div>

//             <button
//               onClick={() => navigate("/dashboard")}
//               className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Dashboard</span>
//             </button>
//           </div>

//           {/* RIGHT SIDE: STATUS (Optional, can be used for Save status) */}
//           <div className="hidden lg:flex items-center gap-4">
//              <span className="text-slate-400 text-xs italic flex items-center gap-2">
//                 <PlusCircle size={14} /> Focus Mode Active
//              </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN FORM */}
//       <div className="pb-10">
//         <ResumeForm />
//       </div>

//       {/* HELPER FOOTER */}
//       <footer className="py-10 text-center border-t border-slate-100 bg-white">
//         <p className="text-slate-400 text-sm font-medium">
//             Step-by-step resume intelligence powered by Groq AI
//         </p>
//       </footer>
//     </div>
//   );
// }

// import ResumeForm from "../components/ResumeForm";
// import { Sparkles, ArrowLeft, LayoutDashboard, CheckCircle, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Builder() {
//   const navigate = useNavigate();
//   // We'll use a ref or simple state to trigger the child's submit if needed,
//   // but standard practice is to let ResumeForm handle its own logic.
//   const [isSaving, setIsSaving] = useState(false);

//   return (
//     <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
//       {/* ✅ UNIFIED TOP NAVIGATION */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">

//           {/* LEFT SIDE: BRANDING & BACK */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 pr-6 border-r border-slate-200">
//               <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
//                 <Sparkles size={20} />
//               </div>
//               <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden sm:block">
//                 AI Builder
//               </h1>
//             </div>

//             <button
//               onClick={() => navigate("/dashboard")}
//               className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Dashboard</span>
//             </button>
//           </div>

//           {/* RIGHT SIDE: STATUS */}
//           <div className="flex items-center gap-4">
//              <span className="hidden lg:block text-slate-400 text-xs font-medium italic">
//                 Auto-saving to cloud...
//              </span>
//              {/* Note: In this architecture, the 'Finalize' button inside ResumeForm
//                  is usually better for UX, but you can also put a trigger here. */}
//           </div>
//         </div>
//       </div>

//       {/* MAIN FORM */}
//       <div className="flex-1">
//         <ResumeForm setIsSavingExternal={setIsSaving} />
//       </div>

//       {/* HELPER FOOTER */}
//       <footer className="py-10 text-center border-t border-slate-100 bg-white">
//         <p className="text-slate-400 text-sm font-medium">
//             Step-by-step resume intelligence powered by Groq AI
//         </p>
//       </footer>
//     </div>
//   );
// }

// import { useState } from "react";
// import ResumeForm from "../components/ResumeForm";
// import {
//   Sparkles,
//   ArrowLeft,
//   LayoutDashboard,
//   CheckCircle,
//   Loader2,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Builder() {
//   const navigate = useNavigate();
//   const [saving, setSaving] = useState(false);

//   return (
//     <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
//       {/* ✅ UNIFIED TOP NAVIGATION */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
//           {/* LEFT SIDE: BRANDING & NAVIGATION */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 pr-6 border-r border-slate-200">
//               <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
//                 <Sparkles size={20} />
//               </div>
//               <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden sm:block">
//                 AI Builder
//               </h1>
//               <button
//                 onClick={() => document.dispatchEvent(new Event("saveResume"))}
//               >
//                 Save Resume
//               </button>
//             </div>

//             <button
//               onClick={() => navigate("/dashboard")}
//               className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
//             >
//               <ArrowLeft
//                 size={18}
//                 className="group-hover:-translate-x-1 transition-transform"
//               />
//               <span>Back to Dashboard</span>
//             </button>
//           </div>

//           {/* RIGHT SIDE: STATUS & GLOBAL ACTION */}
//           <div className="flex items-center gap-4">
//             <span className="hidden lg:block text-slate-400 text-xs font-medium italic">
//               Changes are saved to cloud
//             </span>
//             {/* We can trigger handleCreate from here if we use a Ref, 
//                  but keeping the button in ResumeForm is also fine for UX */}
//           </div>
//         </div>
//       </div>

//       {/* MAIN FORM */}
//       <div className="flex-1">
//         <ResumeForm setSavingExternal={setSaving} />
//       </div>

//       {/* HELPER FOOTER */}
//       <footer className="py-10 text-center border-t border-slate-100 bg-white mt-10">
//         <p className="text-slate-400 text-sm font-medium">
//           Step-by-step resume intelligence powered by Groq AI
//         </p>
//       </footer>
//     </div>
//   );
// }

// import ResumeForm from "../components/ResumeForm";
// import { Sparkles, ArrowLeft, LayoutDashboard } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Builder() {
//   const navigate = useNavigate();
//   const [isSaving, setIsSaving] = useState(false);

//   return (
//     <div className="bg-[#F8FAFC] min-h-screen flex flex-col">
//       {/* ✅ FIXED MASTER NAVIGATION */}
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex justify-between items-center">

//           {/* LEFT SIDE: BRANDING & NAVIGATION GROUP */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 pr-6 border-r border-slate-200">
//               <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-200">
//                 <Sparkles size={20} />
//               </div>
//               <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase hidden sm:block">
//                 AI Builder
//               </h1>
//             </div>

//             <button
//               onClick={() => navigate("/dashboard")}
//               className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Dashboard</span>
//             </button>
//           </div>

//           {/* RIGHT SIDE: STATUS */}
//           <div className="flex items-center gap-4">
//              <span className="hidden lg:block text-slate-400 text-xs font-medium italic">
//                 {isSaving ? "Syncing to cloud..." : "All changes saved"}
//              </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN FORM AREA */}
//       <div className="flex-1">
//         <ResumeForm setSavingExternal={setIsSaving} />
//       </div>

//       <footer className="py-10 text-center border-t border-slate-100 bg-white mt-10">
//         <p className="text-slate-400 text-sm font-medium">
//             Step-by-step resume intelligence powered by Groq AI
//         </p>
//       </footer>
//     </div>
//   );
// }
