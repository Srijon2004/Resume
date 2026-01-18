import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../api/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Download() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [resume, setResume] = useState(null);

  useEffect(() => {
    api.get(`/resume/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    }).then(res => setResume(res.data));
  }, [id]);

  const downloadPDF = async () => {
    const element = document.getElementById("resume");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 10, 10, 190, 277);
    pdf.save("resume.pdf");
  };

  if (!resume) return <h2>Loading...</h2>;

  return (
    <div className="flex justify-center p-6">
      <div id="resume" className="bg-white p-6 shadow-lg w-full max-w-3xl">
        <h1>{resume.fullName}</h1>
        <p>{resume.email} | {resume.phone}</p>
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </div>

      <button
        onClick={downloadPDF}
        className="bg-green-600 text-white px-4 py-2 mt-4"
      >
        Download PDF
      </button>
    </div>
  );
}
