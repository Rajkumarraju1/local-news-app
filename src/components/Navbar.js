import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-lg px-6 py-3 flex justify-between items-center">

      {/* LEFT SIDE → Logo + Title */}
      <Link to="/" className="flex items-center gap-3">
        <img 
             src="/localnews.png"
             alt="Local News Logo"
             className="w-12 h-12 object-contain dark:invert"
        />
        <h1 className="text-2xl font-bold text-white drop-shadow">
          Local News
        </h1>
      </Link>

      {/* RIGHT SIDE → Nav Links + Theme Toggle */}
      <div className="flex items-center gap-8">

        {/* Links */}
        <div className="flex gap-6  ">
            <Link to="/about" className="text-black dark:text-white hover:text-blue-300">About</Link>
            <Link to="/contact" className="text-black dark:text-white hover:text-blue-300">Contact</Link>
            <Link to="/privacy-policy" className="text-black dark:text-white hover:text-blue-300">Privacy</Link>
        </div>

        {/* Theme Switch */}
        <ThemeToggle />

      </div>

    </nav>
  );
}
