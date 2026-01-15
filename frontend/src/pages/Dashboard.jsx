export default function Dashboard(){
 return(
  <div className="p-10 space-x-4">
    <a className="btn" href="/builder">➕ Create Resume</a>
    <a className="btn" href="/checker">🧠 Check Resume</a>
    <a className="btn" href="/download">📄 Download PDF</a>
  </div>
 );
}
