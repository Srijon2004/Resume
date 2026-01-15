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





import { useState } from "react";
import { api } from "../api/api";

export default function ResumeForm(){
  const [content,setContent]=useState("");
  const [jobRole,setJobRole]=useState("");

  const analyze = async () => {
    const res = await api.post("/resume/analyze",{ content, jobRole },{
      headers:{ Authorization: localStorage.getItem("token") }
    });
    localStorage.setItem("result",JSON.stringify(res.data));
    window.location="/preview";
  };

  return(
    <div>
      <input placeholder="Job Role" onChange={e=>setJobRole(e.target.value)} /><br/><br/>
      <textarea rows={10} placeholder="Paste Resume" onChange={e=>setContent(e.target.value)}></textarea><br/><br/>
      <button onClick={analyze}>Analyze</button>
    </div>
  );
}
