export default function BackToTop() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-6 bg-brand text-white px-3 py-2 rounded-full shadow-lg"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
