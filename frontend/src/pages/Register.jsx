import { useState } from "react";
import { api } from "../api/api";

export default function Register(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register = async () => {
    try{
      await api.post("/auth/register",{ name,email,password });
      alert("Registration Successful");
      window.location="/";
    }catch(err){
      alert(err.response.data.message);
    }
  };

  return(
    <div style={{padding:50}}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} /><br/><br/>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} /><br/><br/>
      <button onClick={register}>Register</button>
    </div>
  );
}
