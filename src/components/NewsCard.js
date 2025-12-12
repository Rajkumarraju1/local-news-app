export default function NewsCard({ article }) {
  return (
    <article className="article-card p-4 md:p-5 mb-6 shadow-sm">
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-40 md:h-56 card-img mb-4"
        />
      )}

      <h2 className="text-lg md:text-xl font-bold mb-2">{article.title}</h2>

      <p className="text-sm muted mb-3 line-clamp-3">
        {article.description || ""}
      </p>

      <div className="flex justify-between items-center">
        <a
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 bg-brand text-white rounded-md text-sm hover:bg-blue-700"
        >
          Read More →
        </a>

        <div className="text-xs muted">
          {article.pubDate ? new Date(article.pubDate).toLocaleString() : ""}
        </div>
      </div>
    </article>
  );
}
