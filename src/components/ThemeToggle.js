import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem("ln_theme");
      if (v) return v === "dark";
      // default: follow system
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("ln_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("ln_theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="px-3 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-white/5 transition text-sm"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
