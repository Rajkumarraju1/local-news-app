const categories = ["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi"];

export default function CategoryTabs({ current, onChange }) {
  return (
    <div className="mt-24 overflow-x-auto whitespace-nowrap px-3 pb-2 scrollbar-hide">
      <div className="flex gap-3 justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-4 py-2 rounded-xl 
              glass-hover glass 
              text-white font-semibold
              ${current === cat ? "bg-white/20" : ""}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
