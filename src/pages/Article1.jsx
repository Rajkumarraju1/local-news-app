import { Link } from "react-router-dom";
import news from '../images/news.png';
import { Helmet } from "react-helmet"; 

export default function Article1() {
  return (
    <>
      {/* ⭐ HELMET SEO TAGS HERE */}
      <Helmet>
  <title>Rising Interest in Local Digital News Platforms Across India</title>
  <meta 
    name="description" 
    content="Digital news consumption is rising across India as regional platforms gain popularity through accessibility and trust." 
  />

  <link rel="canonical" href="https://www.localnewsindia.in/article/1" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="Rising Interest in Local Digital News Platforms Across India" />
  <meta property="og:description" content="Why Indians prefer regional and hyperlocal digital news sources." />
  <meta property="og:image" content="https://www.localnewsindia.in/news.png" />
  <meta property="og:url" content="https://www.localnewsindia.in/article/1" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rising Interest in Local Digital News Platforms Across India" />
  <meta name="twitter:description" content="A deep look into India's growing digital news shift." />
  <meta name="twitter:image" content="https://www.localnewsindia.in/news.png" />

  <script type="application/ld+json">
  {`
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Rising Interest in Local Digital News Platforms Across India",
    "image": "https://www.localnewsindia.in/news.png",
    "datePublished": "2025-12-08",
    "author": {"@type": "Organization", "name": "Local News India"},
    "publisher": {
      "@type": "Organization",
      "name": "Local News India",
      "logo": {"@type": "ImageObject", "url": "https://www.localnewsindia.in/localnews.png"}
    },
    "description": "Digital news consumption is rising across India as readers shift to local platforms."
  }
  `}
  </script>
</Helmet>

      {/* END HELMET */}
    <div className="min-h-screen bg-gray-50 dark:bg-[#07101a] py-10 px-4">

      {/* ARTICLE CONTAINER */}
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-[#0c1624] rounded-xl shadow-lg">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-black dark:text-white">
          Rising Interest in Local Digital News Platforms Across India
        </h1>

        {/* META INFO */}
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          <p>Published on: 08 December 2025</p>
          <p>Author: Local News India Desk</p>
        </div>

        {/* FEATURED IMAGE */}
        <img
          src={news}
          alt="Local News India"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* ARTICLE CONTENT */}
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
          <p>
            Digital news consumption in India has undergone a remarkable transformation
            in recent years. With affordable smartphones, expanding 4G/5G coverage,
            and increasing internet literacy...
          </p>

          <p>
            Among the emerging platforms, <strong>Local News India</strong> is gaining
            attention for bringing regional stories closer to everyday readers.
          </p>

          <h2>A Growing Preference for Local News</h2>

          <p>
            Industry surveys show that more than <strong>70% of Indian internet users</strong>
            prefer reading news related to their own towns and states...
          </p>

          <ul>
            <li>Real-time local updates</li>
            <li>State-wise regional news coverage</li>
            <li>Short, easy-to-read summaries</li>
            <li>News in multiple Indian languages</li>
          </ul>

          <h2>Why Regional Digital News Is Growing So Fast</h2>

          <h3>1. Smartphone Penetration</h3>
          <p>India now has more than <strong>750 million smartphone users</strong>.</p>

          <h3>2. Faster & Cheaper Internet</h3>
          <p>Affordable data plans allow daily browsing without restrictions.</p>

          <h3>3. Social Media Boost</h3>
          <p>WhatsApp, Facebook, Instagram help news reach millions.</p>

          <h3>4. Trust in Local Sources</h3>
          <p>Regional news feels more relevant and credible.</p>
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

      {/* ⭐⭐⭐ RELATED ARTICLES SECTION (Correct Location) ⭐⭐⭐ */}
      <div className="max-w-3xl mx-auto mt-10 p-5 bg-gray-100 dark:bg-[#0f1a2b] rounded-xl">
        <h3 className="text-xl font-semibold mb-3">Related Articles</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
         <Link to="/article/1" className="hover:text-blue-500">• Rising Interest in Local Digital News Platforms</Link>
          <Link to="/article/2" className="hover:text-blue-500">• AI Adoption Growing in Indian Villages</Link>
          <Link to="/article/3" className="hover:text-blue-500">• Youth Returning to Traditional Careers</Link>
          <Link to="/article/4" className="hover:text-blue-500">• Digital Payments Expansion in Rural India</Link>
          <Link to="/article/5" className="hover:text-blue-500">• Rise of Regional OTT Platforms</Link>
          <Link to="/article/6" className="hover:text-blue-500">• Growth of Local Tourism</Link>
          <Link to="/article/7" className="hover:text-blue-500">• India's Digital Government Services</Link>
          <Link to="/article/8" className="hover:text-blue-500">• India's Renewable Energy Push</Link>
        </div>
      </div>

    </div>
    </>
  );
}
