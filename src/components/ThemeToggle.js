import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button 
      onClick={() => setDark(!dark)}
      className="glass px-3 py-2 rounded-xl text-white"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
