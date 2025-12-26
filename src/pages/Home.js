import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../utils/newsApi";
import Footer from "../components/Footer";
import AdSidebar from "../components/ads/AdSidebar";
import AdInline from "../components/ads/AdInline";
import BackToTop from "../components/BackToTop";
import { articles } from "../data/articlesData";
import BreakingTicker from "../components/BreakingTicker";

const newsCache = {};

export default function Home() {
  const [category, setCategory] = useState("Telugu");
  const [news, setNews] = useState([]);
  const [heroArticle, setHeroArticle] = useState(null);

  const langMap = {
    Telugu: "te",
    Tamil: "ta",
    Kannada: "kn",
    Malayalam: "ml",
    Hindi: "hi",
  };

  useEffect(() => {
    // 1. Pick a random "Breaking News" article on mount
    const random = articles[Math.floor(Math.random() * articles.length)];
    setHeroArticle(random);

    // 2. Fetch API News
    async function loadNews() {
      const lang = langMap[category];
      if (newsCache[lang]) {
        setNews(newsCache[lang]);
        return;
      }

      setNews([]);
      const data = await fetchNews(lang);
      if (!Array.isArray(data)) {
        setNews([]);
        return;
      }

      newsCache[lang] = data;
      setNews(data);
    }

    loadNews();
  }, [category]);

  // Filter out the hero article so it doesn't show up in sidebars
  const otherArticles = heroArticle
    ? articles.filter(a => a.id !== heroArticle.id)
    : articles;

  return (
    <>
      <Helmet>
        <title>Local News India – Latest Telugu, Tamil, Kannada, Malayalam & Hindi News</title>

        <meta
          name="description"
          content="Local News India provides fast regional news updates in Telugu, Tamil, Kannada, Malayalam, and Hindi. Breaking news, top headlines, local updates, and trending stories — all in one place."
        />

        <link rel="canonical" href="https://www.localnewsindia.in/" />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Local News India – Latest Regional Updates" />
        <meta
          property="og:description"
          content="Stay updated with regional news in 5 languages. Clean UI, fast loading, ad-friendly design."
        />
        <meta property="og:image" content="https://www.localnewsindia.in/localnews.png" />
        <meta property="og:url" content="https://www.localnewsindia.in/" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Local News India – Latest Regional Updates" />
        <meta
          name="twitter:description"
          content="Real-time Telugu, Tamil, Hindi, Malayalam & Kannada news updates."
        />
        <meta name="twitter:image" content="https://www.localnewsindia.in/localnews.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            "name": "Local News India",
            "url": "https://www.localnewsindia.in",
            "logo": "https://www.localnewsindia.in/localnews.png",
            "description": "Regional news platform covering Telugu, Tamil, Kannada, Malayalam, and Hindi news.",
            "sameAs": []
          }
          `}
        </script>
      </Helmet>
      <Navbar />

      <div className="pt-20">
        <BreakingTicker news={news} />
      </div>

      <main className="pt-4 flex justify-center">
        <div className="w-full max-w-[1400px] px-4">



          <CategoryTabs current={category} onChange={setCategory} />

          {/* HERO SECTION — PROFESSIONAL TOP STORY */}
          {heroArticle && (
            <div className="mb-10 w-full relative group overflow-hidden rounded-2xl shadow-xl">
              <Link to={`/article/${heroArticle.id}`} className="block relative h-[450px]">
                <img
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-3 w-fit rounded-sm">
                    Breaking News
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight drop-shadow-md">
                    {heroArticle.title}
                  </h2>
                  <p className="text-gray-200 mt-2 line-clamp-2 max-w-2xl text-lg hidden md:block">
                    {heroArticle.description}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* MAIN GRID */}
          <div className="grid grid-cols-12 gap-8">

            {/* LEFT SIDEBAR - STICKY */}
            <aside className="hidden lg:block col-span-2 space-y-6 sticky top-24 h-fit">
              <div className="bg-white dark:bg-[#0c1624] p-4 rounded-xl shadow-md border dark:border-gray-800">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 dark:border-gray-700 font-serif text-red-600">Must Read</h3>
                <div className="flex flex-col gap-4">
                  {otherArticles.slice(0, 5).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group"
                    >
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 leading-snug font-serif">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <AdSidebar />
            </aside>

            {/* MAIN NEWS FEED (Center) */}
            <section className="col-span-12 lg:col-span-8">
              {news.length === 0 ? (
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="article-card p-4 animate-pulse">
                      <div className="bg-gray-200 dark:bg-gray-800 h-40 rounded mb-3" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 w-3/4 mb-2 rounded" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/2 rounded" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {news.map((article, index) => (
                    <div key={index} className={index % 5 === 0 ? "col-span-1 md:col-span-2" : "col-span-1"}>
                      <NewsCard article={article} featured={index % 5 === 0} />
                      {(index + 1) % 4 === 0 && (
                        <div className="col-span-1 md:col-span-2 mt-4">
                          <AdInline />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* RIGHT SIDEBAR - STICKY */}
            <aside className="hidden lg:block col-span-2 space-y-6 sticky top-24 h-fit">
              <div className="bg-white dark:bg-[#0c1624] p-4 rounded-xl shadow-md border dark:border-gray-800">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 dark:border-gray-700 font-serif text-blue-600">Trending</h3>
                <div className="flex flex-col gap-4">
                  {otherArticles.slice(5).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group"
                    >
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 leading-snug font-serif">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-red-500 font-bold">Live</span>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <AdSidebar />
            </aside>

          </div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
