import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";   // ⭐ REQUIRED
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../utils/newsApi";
import Footer from "../components/Footer";
import AdSidebar from "../components/ads/AdSidebar";
import AdInline from "../components/ads/AdInline";
import BackToTop from "../components/BackToTop";

const newsCache = {};

export default function Home() {
  const [category, setCategory] = useState("Telugu");
  const [news, setNews] = useState([]);

  const langMap = {
    Telugu: "te",
    Tamil: "ta",
    Kannada: "kn",
    Malayalam: "ml",
    Hindi: "hi",
  };

  useEffect(() => {
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

      <main className="pt-24 flex justify-center">
        <div className="w-full max-w-6xl px-4">

          <CategoryTabs current={category} onChange={setCategory} />

          {/* ⭐⭐⭐ FEATURED ARTICLES SECTION — ADD HERE ⭐⭐⭐ */}
          <div className="max-w-5xl mx-auto mt-10 p-6 bg-white dark:bg-[#0c1624] rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/article/1" className="hover:text-blue-600 font-semibold">
                📌 Rising Interest in Local Digital News Platforms
              </Link>

              <Link to="/article/2" className="hover:text-blue-600 font-semibold">
                📌 AI Adoption Growing in Indian Villages
              </Link>

              <Link to="/article/3" className="hover:text-blue-600 font-semibold">
                📌 Indian Youth Returning to Traditional Careers
              </Link>

              <Link to="/article/4" className="hover:text-blue-600 font-semibold">
                📌 Digital Payments Expansion in Rural India
              </Link>

              <Link to="/article/5" className="hover:text-blue-600 font-semibold">
                📌 Rise of Regional OTT Platforms in India
              </Link>
              <Link to="/article/6" className="hover:text-blue-600 font-semibold">
                📌 Growth of Local Tourism in India: Small Places Getting Big Attention
             </Link>

            <Link to="/article/7" className="hover:text-blue-600 font-semibold">
               📌 How Indian Government Services Are Becoming Digital (UPI, DigiLocker, etc.)
            </Link>

            <Link to="/article/8" className="hover:text-blue-600 font-semibold">
              📌 India’s Renewable Energy Push: Solar & Wind Power Growth
            </Link>
            </div>
          </div>
          {/* ⭐⭐⭐ END FEATURED ARTICLES ⭐⭐⭐ */}


          {/* MAIN GRID */}
          <div className="grid grid-cols-12 gap-6 mt-6">

            <aside className="hidden lg:block col-span-2">
              <AdSidebar />
            </aside>

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
                news.map((article, index) => (
                  <div key={index}>
                    <NewsCard article={article} />
                    {(index + 1) % 4 === 0 && <AdInline />}
                  </div>
                ))
              )}
            </section>

            <aside className="hidden lg:block col-span-2">
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
