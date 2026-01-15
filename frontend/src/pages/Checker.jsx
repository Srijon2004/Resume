import { useState } from "react";
import { api } from "../api/api";

export default function Checker(){
 const [text,setText]=useState("");
 const [result,setResult]=useState(null);

 const check=async()=>{
   const res=await api.post("/resume/check",
    { resumeText:text, jobRole:"Developer"},
    { headers:{ Authorization:localStorage.getItem("token")}}
   );
   setResult(res.data);
 };

 return(
  <div className="p-10">
   <textarea onChange={e=>setText(e.target.value)}/>
   <button onClick={check}>Check</button>
   {result && <pre>{JSON.stringify(result,null,2)}</pre>}
  </div>
 );
}
