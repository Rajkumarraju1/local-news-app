import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50 
            p-4 rounded-full 
            glass-card glass-shadow 
            backdrop-blur-xl 
            bg-white/20 dark:bg-black/30 
            text-white shadow-lg 
            hover:bg-white/30 dark:hover:bg-black/40 
            transition-all
          "
        >
          <ChevronUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
