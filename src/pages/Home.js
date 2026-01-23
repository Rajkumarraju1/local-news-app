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

const langMap = {
  Telugu: "te",
  Tamil: "ta",
  Kannada: "kn",
  Malayalam: "ml",
  Hindi: "hi",
};

export default function Home() {
  const [category, setCategory] = useState("Telugu");
  const [news, setNews] = useState([]);
  const [heroArticle, setHeroArticle] = useState(null);



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
            <div className="mb-12 w-full relative group overflow-hidden rounded-2xl shadow-xl">
              <Link to={`/article/${heroArticle.id}`} className="block relative h-[450px]">
                <img
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-3 w-fit rounded-sm">
                    Featured Story
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

          {/* NEW: FEATURED ORIGINAL STORIES GRID */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
              <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-gray-50 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
                Original Reporting
              </h2>
              <Link to="/about" className="text-sm text-blue-600 hover:underline">Why we write &rarr;</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.filter(a => a.id !== heroArticle?.id).slice(0, 6).map((article) => (
                <Link key={article.id} to={`/article/${article.id}`} className="group block h-full">
                  <div className="relative overflow-hidden rounded-xl h-56 mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      Local Exclusive
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-serif group-hover:text-blue-600 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                    {article.description}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold mt-3 inline-block group-hover:underline">
                    Read Full Story &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* MAIN GRID - AGGREGATED CONTENT */}
          <div className="grid grid-cols-12 gap-8">

            {/* LEFT SIDEBAR - STICKY */}
            <aside className="hidden lg:block col-span-3 space-y-6 sticky top-24 h-fit">
              <div className="bg-gray-50 dark:bg-[#0c1624] p-4 rounded-xl border dark:border-gray-800">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 dark:border-gray-700 font-serif text-red-600">
                  More Originals
                </h3>
                <div className="flex flex-col gap-4">
                  {otherArticles.slice(6, 12).map((article) => (
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
            <section className="col-span-12 lg:col-span-6">
              <div className="mb-6 flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-serif">
                  Around the Web
                </h2>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded text-gray-600 dark:text-gray-400">
                  Aggregated Headlines
                </span>
              </div>

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
                <div className="flex flex-col gap-6">
                  {news.map((article, index) => (
                    <div key={index}>
                      <NewsCard article={article} featured={index % 5 === 0} />
                      {(index + 1) % 4 === 0 && (
                        <div className="mt-4">
                          <AdInline />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* RIGHT SIDEBAR - STICKY */}
            <aside className="hidden lg:block col-span-3 space-y-6 sticky top-24 h-fit">
              <div className="bg-gray-50 dark:bg-[#0c1624] p-4 rounded-xl border dark:border-gray-800">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 dark:border-gray-700 font-serif text-blue-600">Trending Now</h3>
                <div className="flex flex-col gap-4">
                  {news.slice(0, 5).map((n, i) => (
                    <a
                      key={i}
                      href={n.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 leading-snug">
                        {n.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] bg-gray-200 dark:bg-gray-700 px-1 rounded text-gray-500">External</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <AdSidebar />
            </aside>

          </div>

          <div className="my-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Support Local Journalism</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              We are committed to bringing you the stories that matter. If you have a story from your village or town, share it with us.
            </p>
            <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
              Contact Our Desk
            </Link>
          </div>
        </div>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
