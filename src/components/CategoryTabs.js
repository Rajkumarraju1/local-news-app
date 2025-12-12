export default function CategoryTabs({ current, onChange }) {
  const languages = ["Tamil", "Kannada", "Malayalam", "Hindi"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 mb-4 md:mb-6 px-2">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`px-4 py-1.5 text-sm rounded-full border transition ${
            current === lang
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-[#0c1624] text-gray-700 dark:text-gray-300"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
