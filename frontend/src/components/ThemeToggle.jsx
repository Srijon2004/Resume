import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  // 1. Check if the user previously saved a preference in 'localStorage'
  // If not, check if their system (Windows/Mac) is already set to dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. This effect runs every time the 'darkMode' variable changes
  useEffect(() => {
    const root = window.document.documentElement; // This is the <html> tag
    if (darkMode) {
      root.classList.add("dark");      // Adds 'dark' class to <html>
      localStorage.setItem("theme", "dark"); // Saves choice
    } else {
      root.classList.remove("dark");   // Removes 'dark' class
      localStorage.setItem("theme", "light"); // Saves choice
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 ring-blue-400 transition-all"
    >
      {/* Show Sun icon if dark, Moon icon if light */}
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}