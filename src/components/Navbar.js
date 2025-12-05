import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="glass fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-lg px-4 py-3">

      <div className="flex justify-between items-center">

        {/* LEFT → Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <img 
             src="/localnews.png"
             alt="Local News Logo"
             className="w-10 h-10 object-contain p-1 rounded-lg bg-white shadow ms-3"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow">
            Local News
          </h1>
        </Link>

        {/* RIGHT → Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
  to="/about"
  className="
    text-black md:text-white        /* mobile black, desktop white */
    dark:text-white                 /* dark mode always white */
    hover:text-blue-500
  "
>
  About
</Link>

<Link
  to="/contact"
  className="
    text-black md:text-white 
    dark:text-white
    hover:text-blue-500
  "
>
  Contact
</Link>

<Link
  to="/privacy-policy"
  className="
    text-black md:text-white 
    dark:text-white
    hover:text-blue-500
  "
>
  Privacy
</Link>

          <ThemeToggle />
        </div>

        {/* RIGHT → Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-white text-3xl">☰</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-3 glass rounded-xl px-4 py-3 flex flex-col gap-3">
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/privacy-policy" className="text-white">Privacy</Link>
        </div>
      )}
    </nav>
  );
}
