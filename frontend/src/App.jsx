import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import Checker from "./pages/Checker";
import Preview from "./pages/Preview";
import Download from "./pages/Download";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/checker" element={<Checker />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}
