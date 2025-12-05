import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="glass backdrop-blur-xl bg-white/10 dark:bg-black/20 border-t border-white/20 mt-12 py-6 px-6 text-center">

      {/* Links */}
      <div className="flex justify-center gap-8   mb-4">
        <Link to="/about" className="text-black dark:text-white hover:text-blue-300">About</Link>
        <Link to="/contact" className="text-black dark:text-white hover:text-blue-300">Contact</Link>
        <Link to="/privacy-policy" className="text-black dark:text-white hover:text-blue-300">Privacy Policy</Link>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Local News — All Rights Reserved.
      </p>
    </footer>
  );
}
