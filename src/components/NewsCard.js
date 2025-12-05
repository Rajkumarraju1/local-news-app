export default function NewsCard({ article }) {
  return (
    <div className="glass-card glass-shadow p-4 md:p-5 mb-6 glass-hover">

      {/* Thumbnail */}
      {article.image_url && (
        <img
          src={article.image_url}
          className="w-full h-40 md:h-56 object-cover rounded-lg mb-4 opacity-90 hover:opacity-100 transition"
        />
      )}

      {/* Heading */}
      <h2 className="text-lg md:text-xl font-bold mb-3 dark:text-white">
        {article.title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
        {article.description}
      </p>

      {/* Read More Button */}
      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        className="block text-center mt-3 px-4 py-2 bg-blue-600 text-white rounded-md 
                   hover:bg-blue-700 dark:bg-blue-500"
      >
        Read More →
      </a>

    </div>
  );
}
