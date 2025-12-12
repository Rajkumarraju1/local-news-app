import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 site-nav bg-white/70 dark:bg-black/40 backdrop-blur-md border-b">

      {/* DESKTOP: px-20 | MOBILE: px-4 */}
      <div className="flex items-center justify-between h-16 px-4 md:px-20">

        {/* LEFT SIDE - LOGO & TITLE */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/localnews.png"
            className="w-9 h-9 block dark:hidden rounded-sm"
          />
          <img
            src="/localnews-white.png"
            className="w-9 h-9 hidden dark:block rounded-sm"
          />

          <div>
            <h1 className="text-lg md:text-xl font-semibold">Local News</h1>

            {/* HIDE THIS ON MOBILE */}
            <p className="text-[10px] text-gray-600 dark:text-gray-300 hidden md:block">
              Telugu • Tamil • Kannada • Malayalam • Hindi
            </p>
          </div>
        </Link>

        {/* RIGHT SIDE MENU — DESKTOP ONLY */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-sm hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-sm hover:text-blue-600">Contact</Link>
          <Link to="/privacy-policy" className="text-sm hover:text-blue-600">Privacy</Link>
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON — Aligned to Right */}
        <div className="flex md:hidden items-center gap-4 pr-2">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-3xl">☰</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 py-3 bg-white dark:bg-black border-t">
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <Link to="/privacy-policy" className="block py-2">Privacy</Link>
        </div>
      )}
    </nav>
  );
}
