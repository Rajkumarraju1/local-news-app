
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { articles } from "../data/articlesData";

export default function ArticlePage() {
    const { id } = useParams();
    const article = articles.find((a) => a.id === parseInt(id));

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl dark:text-white">
                Article not found.
            </div>
        );
    }

    // Filter out the current article for "Related Articles"
    const relatedArticles = articles.filter((a) => a.id !== article.id);

    return (
        <>
            <Helmet>
                <title>{article.title}</title>
                <meta name="description" content={article.description} />
                <link rel="canonical" href={`https://www.localnewsindia.in/article/${article.id}`} />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.description} />
                <meta property="og:image" content={`https://www.localnewsindia.in${article.image}`} />
                <meta property="og:url" content={`https://www.localnewsindia.in/article/${article.id}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title} />
                <meta name="twitter:description" content={article.description} />
                <meta name="twitter:image" content={`https://www.localnewsindia.in${article.image}`} />

                <script type="application/ld+json">
                    {`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "${article.title}",
            "image": "https://www.localnewsindia.in${article.image}",
            "datePublished": "${article.date}",
            "author": {"@type": "Organization", "name": "${article.author}"},
            "publisher": {
              "@type": "Organization",
              "name": "Local News India",
              "logo": {"@type": "ImageObject", "url": "https://www.localnewsindia.in/localnews.png"}
            },
            "description": "${article.description}"
          }
          `}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gray-50 dark:bg-[#07101a] py-10 px-4">
                {/* ARTICLE CONTAINER */}
                <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-[#0c1624] rounded-xl shadow-lg">
                    {/* TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-black dark:text-white">
                        {article.title}
                    </h1>

                    {/* META INFO */}
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                        <p>Published on: {article.date}</p>
                        <p>Author: {article.author}</p>
                    </div>

                    {/* FEATURED IMAGE */}
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    {/* ARTICLE CONTENT */}
                    <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
                        {article.content}
                    </div>

                    {/* SHARE SECTION */}
                    <div className="mt-10 border-t pt-5">
                        <h3 className="text-lg font-semibold mb-3">Share this article</h3>

                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Facebook</button>
                            <button className="px-4 py-2 bg-sky-500 text-white rounded-md">Twitter</button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded-md">WhatsApp</button>
                        </div>
                    </div>
                </div>

                {/* RELATED ARTICLES SECTION */}
                <div className="max-w-3xl mx-auto mt-10 p-5 bg-gray-100 dark:bg-[#0f1a2b] rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Related Articles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {relatedArticles.map((rel) => (
                            <Link
                                key={rel.id}
                                to={`/article/${rel.id}`}
                                className="hover:text-blue-500 block"
                            >
                                • {rel.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
