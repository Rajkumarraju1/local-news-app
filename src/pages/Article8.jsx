import clean from "../images/clean.png";  
import { Link } from "react-router-dom";
 import { Helmet } from "react-helmet";

export default function Article8() {
  return (
    <>
   
 <Helmet>
  <title>India's Renewable Energy Push: Solar and Wind Power Surge</title>
  <meta 
    name="description" 
    content="India is massively expanding solar, wind and green energy projects for a sustainable future." 
  />

  <link rel="canonical" href="https://www.localnewsindia.in/article/8" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="India's Renewable Energy Push" />
  <meta property="og:description" content="Solar and wind energy adoption is rapidly increasing across India." />
  <meta property="og:image" content="https://www.localnewsindia.in/renewable-energy.png" />
  <meta property="og:url" content="https://www.localnewsindia.in/article/8" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="India's Renewable Energy Push" />
  <meta name="twitter:description" content="India's green energy transformation is accelerating fast." />
  <meta name="twitter:image" content="https://www.localnewsindia.in/renewable-energy.png" />

  <script type="application/ld+json">
  {`
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "India's Renewable Energy Push: Solar and Wind Power Surge",
    "image": "https://www.localnewsindia.in/renewable-energy.png",
    "datePublished": "2025-12-16",
    "author": {"@type": "Organization", "name": "Local News India"},
    "publisher": {
      "@type": "Organization",
      "name": "Local News India",
      "logo": {"@type": "ImageObject", "url": "https://www.localnewsindia.in/localnews.png"}
    },
    "description": "India is rapidly adopting renewable energy technologies to reduce carbon footprint."
  }
  `}
  </script>
</Helmet>


    <div className="min-h-screen bg-gray-50 dark:bg-[#07101a] py-10 px-4">
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-[#0c1624] rounded-xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white leading-snug">
          India’s Clean Energy Boom: Solar & Wind Power Transforming Rural Areas
        </h1>

        {/* META INFO */}
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          <p>Published on: 12 December 2025</p>
          <p>Author: Local News India Desk</p>
        </div>

        {/* FEATURED IMAGE */}
        <img
          src={clean}
          alt="Clean Energy India"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* ARTICLE CONTENT */}
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
          <p>
            India is witnessing a large-scale shift toward <strong>clean and renewable
            energy</strong>, especially in rural regions where electricity shortages were
            once common. Solar panels on rooftops, windmills across open farmlands, and
            renewable micro-grids are now becoming a part of daily life.
          </p>

          <h2>Solar Energy Lighting Up Villages</h2>
          <p>
            According to government data, more than <strong>3 crore rural households</strong>
            now use solar-based solutions for lighting, water pumping, and heating. This
            shift significantly reduces electricity bills and makes villages more
            self-sustainable.
          </p>

          <h2>Wind Energy Expanding Rapidly</h2>
          <p>
            India ranks <strong>4th in global wind power capacity</strong>, and states like
            Tamil Nadu, Karnataka, and Gujarat are leading the growth. Many rural areas
            now host wind farms, generating income and employment.
          </p>

          <h2>Why Clean Energy Is Growing So Fast?</h2>
          <ul>
            <li>Lower cost of solar panels and inverters</li>
            <li>Government subsidies and rural solar schemes</li>
            <li>High awareness about sustainable energy</li>
            <li>Corporate investments in renewable power</li>
          </ul>

          <h2>Impact on Rural Economy</h2>
          <p>
            Clean energy is enabling farmers to irrigate fields at low cost, powering
            schools and health centers, and creating skilled jobs for rural youth. The
            shift is not just environmental—it is <strong>economic transformation</strong>.
          </p>
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
