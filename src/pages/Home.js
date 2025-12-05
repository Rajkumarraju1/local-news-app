import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../utils/newsApi";
import Footer from "../components/Footer";

import AdSidebar from "../components/ads/AdSidebar";
import AdInline from "../components/ads/AdInline";
import BackToTop from "../components/BackToTop";


const newsCache = {}; // 🔥 Cache enabled

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
      <Navbar />

      <div className="pt-24">
        <CategoryTabs current={category} onChange={setCategory} />

        <div className="flex justify-center gap-6 p-4">

          {/* LEFT SIDEBAR AD */}
          <div className="hidden lg:block w-1/5">
            <AdSidebar />
          </div>

          {/* MAIN CONTENT */}
          <div className="w-full lg:w-3/5 glass-card glass-shadow p-6 rounded-xl">

            {news.length === 0 ? (
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="skeleton h-48 w-full mb-4"></div>
                    <div className="skeleton h-4 w-3/4 mb-2"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : (
              news.map((article, index) => (
                <div key={index}>
                  <NewsCard article={article} />

                  {/* INLINE AD EVERY 4 NEWS CARDS */}
                  {(index + 1) % 4 === 0 && <AdInline />}
                </div>
              ))
            )}

          </div>

          {/* RIGHT SIDEBAR AD */}
          <div className="hidden lg:block w-1/5">
            <AdSidebar />
          </div>

        </div>
      </div>

            <BackToTop />
      <Footer />
    </>
  );
}
