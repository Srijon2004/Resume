// import { useState } from "react";
// import { api } from "../api/api";

// export default function Register(){
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");

//   const register = async () => {
//     try{
//       await api.post("/auth/register",{ name,email,password });
//       alert("Registration Successful");
//       window.location="/";
//     }catch(err){
//       alert(err.response.data.message);
//     }
//   };

//   return(
//     <div style={{padding:50}}>
//       <h2>Register</h2>
//       <input placeholder="Name" onChange={e=>setName(e.target.value)} /><br/><br/>
//       <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
//       <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
//       <button onClick={register}>Register</button>
//     </div>
//   );
// }












import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  User, 
  Mail, 
  Lock, 
  UserPlus, 
  Loader2, 
  AlertCircle,
  ArrowLeft
} from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post("/auth/register", { name, email, password });
      alert("Registration Successful! Please login.");
      navigate("/"); // Navigate to Login
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 font-sans">
      
      {/* BRANDING LOGO */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
          <Sparkles size={32} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
          AI Builder
        </h1>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-10 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-800">Create Account</h2>
            <p className="text-slate-400 mt-2 font-medium">Join us to build your professional future</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm animate-in fade-in zoom-in duration-300">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={register} className="space-y-5">
            {/* NAME INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="text"
                  required
                  placeholder="Srijon Choudhury" 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 p-4 pl-12 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner" 
                />
              </div>
            </div>

            {/* EMAIL INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="email"
                  required
                  placeholder="name@example.com" 
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 p-4 pl-12 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner" 
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                Set Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-50 p-4 pl-12 rounded-2xl outline-none focus:border-blue-400 focus:bg-white transition-all text-sm font-medium shadow-inner" 
                />
              </div>
            </div>

            {/* REGISTER BUTTON */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-[0.98] disabled:opacity-70 mt-4"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Get Started <UserPlus size={20} />
                </>
              )}
            </button>
          </form>

          {/* LOGIN LINK */}
          <div className="mt-10 text-center">
            <button 
              onClick={() => navigate("/")} 
              className="flex items-center justify-center gap-2 mx-auto text-slate-400 font-medium hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={16} /> Already have an account? <span className="font-bold">Log In</span>
            </button>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[10px] mt-8 font-bold uppercase tracking-widest">
          Step-by-step resume intelligence powered by Groq AI
        </p>
      </div>
    </div>
  );
}