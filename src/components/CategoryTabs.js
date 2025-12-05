const categories = ["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi"];

export default function CategoryTabs({ current, onChange }) {
  return (
     <div className="flex gap-3 justify-center mt-28">
  {categories.map((cat) => (
     <button
  key={cat}
  onClick={() => onChange(cat)}
  className={`
    px-4 py-2 rounded-xl 
    glass-hover
    glass 
    text-white font-semibold
    ${current === cat ? "bg-white/20" : ""}
  `}
>
  {cat}
</button>

  ))}
</div>

  );
}
