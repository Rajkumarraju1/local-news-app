const categories = ["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi"];

export default function CategoryTabs({ current, onChange }) {
  return (
    <div className="container mt-20 mb-4">
      <div className="flex gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              current === cat
                ? "bg-brand text-white"
                : "bg-transparent border border-gray-200 dark:border-white/5 text-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
