// import { useEffect, useState } from "react";
// import { api } from "../api/api";

// export default function Preview(){
//  const [resume,setResume]=useState(null);

//  useEffect(()=>{
//   api.get("/resume/my",{ headers:{Authorization:localStorage.getItem("token")}})
//    .then(r=>setResume(r.data[0]));
//  },[]);

//  if(!resume) return null;

//  return(
//   <div className="p-10">
//     <h1 className="text-xl font-bold">{resume.jobRole}</h1>
//     <p>Skills: {resume.skills.join(", ")}</p>
//   </div>
//  );
// }




export default function Preview(){
  const data = JSON.parse(localStorage.getItem("result"));
  return(
    <div style={{padding:30}}>
      <h2>ATS Score: {data?.atsScore}%</h2>
      <h3>Missing Skills</h3>
      <ul>{data?.missingSkills.map((x,i)=><li key={i}>{x}</li>)}</ul>
      <h3>Suggestions</h3>
      <ul>{data?.finalSuggestions.map((x,i)=><li key={i}>{x}</li>)}</ul>
      <button onClick={()=>window.location="/download"}>Download Resume</button>
    </div>
  );
}
