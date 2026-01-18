// import { useState } from "react";
// import { api } from "../api/api";

// export default function Login(){
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");

//   const login = async () => {
//     try{
//       const res = await api.post("/auth/login",{ email,password });
//       localStorage.setItem("token",res.data.token);
//       window.location="/dashboard";
//     }catch(err){
//       alert("Invalid login");
//     }
//   };

//   return(
//     <div style={{padding:50}}>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
//       <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
//       <button onClick={login}>Login</button>
//       <p onClick={()=>window.location="/register"} style={{cursor:"pointer"}}>New user? Register</p>
//     </div>
//   );
// }












import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Mail, 
  Lock, 
  ArrowRight, 
  Loader2, 
  AlertCircle 
} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      // Using navigate is better than window.location for React state
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
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
          AI Resume Builder
        </h1>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 p-10 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-800">Welcome Back</h2>
            <p className="text-slate-400 mt-2 font-medium">Log in to manage your professional resumes</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm animate-in fade-in zoom-in duration-300">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <form onSubmit={login} className="space-y-6">
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
                Password
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

            {/* LOGIN BUTTON */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-[0.98] disabled:opacity-70 mt-4"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Log In <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* REGISTER LINK */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 font-medium">
              New user?{" "}
              <button 
                onClick={() => navigate("/register")} 
                className="text-blue-600 font-bold hover:underline underline-offset-4"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>

        {/* FOOTER INFO */}
        <p className="text-center text-slate-400 text-[10px] mt-8 font-bold uppercase tracking-widest">
          Step-by-step resume intelligence powered by Groq AI
        </p>
      </div>
    </div>
  );
}