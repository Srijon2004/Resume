import { useState } from "react";
import { api } from "../api/api";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    try{
      const res = await api.post("/auth/login",{ email,password });
      localStorage.setItem("token",res.data.token);
      window.location="/dashboard";
    }catch(err){
      alert("Invalid login");
    }
  };

  return(
    <div style={{padding:50}}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={login}>Login</button>
      <p onClick={()=>window.location="/register"} style={{cursor:"pointer"}}>New user? Register</p>
    </div>
  );
}
