import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0c1624] text-gray-300 py-12 border-t border-gray-800 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding */}
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-bold font-serif text-white tracking-wide">
            LOCAL<span className="text-blue-500">NEWS</span>INDIA
          </Link>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Your trusted digital platform for regional and national news in India. Bringing you the stories from the grassroots.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal & Policies (Crucial for AdSense) */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/disclaimer" className="hover:text-blue-400 transition">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Languages</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400 cursor-default">Telugu</span></li>
            <li><span className="text-gray-400 cursor-default">Tamil</span></li>
            <li><span className="text-gray-400 cursor-default">Malayalam</span></li>
            <li><span className="text-gray-400 cursor-default">Kannada</span></li>
            <li><span className="text-gray-400 cursor-default">Hindi</span></li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Local News India Media Pvt. Ltd. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <span className="text-gray-500">Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
