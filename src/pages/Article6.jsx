import tourism from "../images/tourism.png"; 
 import { Link } from "react-router-dom";
  import { Helmet } from "react-helmet";


export default function Article6() {
  return (

    <>
   

<Helmet>
  <title>Growth of Local Tourism in India: Small Places Getting Big Attention</title>
  <meta
    name="description"
    content="Indian travellers are exploring lesser-known destinations more than ever. Local tourism is growing fast."
  />
  <meta property="og:title" content="Growth of Local Tourism in India" />
  <meta property="og:description" content="Small towns and hidden gems across India are becoming major tourist hotspots." />
  <meta property="og:image" content="/images/article6.png" />
</Helmet>

    <div className="min-h-screen bg-gray-50 dark:bg-[#07101a] py-10 px-4">

      {/* ARTICLE CONTAINER */}
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-[#0c1624] rounded-xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-black dark:text-white">
          Growth of Local Tourism in India: Small Places Now Getting Big Attention
        </h1>

        {/* META INFO */}
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          <p>Published on: 09 December 2025</p>
          <p>Author: Local News India Desk</p>
        </div>

        {/* FEATURED IMAGE */}
        <img
          src={tourism}
          alt="Local Tourism India"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* ARTICLE CONTENT */}
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">

          <p>
            Over the past few years, India has witnessed a surprising trend: 
            <strong>small towns, villages, and lesser-known destinations</strong> 
            are becoming the new favorites for travelers. With the rise of social media,
            weekend trips, vloggers, and improved road connectivity, local tourism
            is growing faster than ever.
          </p>

          <h2>Why Small Places Are Becoming Popular</h2>

          <p>
            Many Indian travelers, especially the youth, now prefer peaceful,
            budget-friendly and culturally rich destinations rather than crowded
            metros or over-commercialized tourist spots.
          </p>

          <ul>
            <li><strong>Affordable stays</strong> at homestays & local lodges</li>
            <li><strong>Beautiful natural spots</strong> that were previously unknown</li>
            <li><strong>Authentic food</strong> and local traditions</li>
            <li><strong>Quick weekend travel</strong> within 100–200 km of major cities</li>
          </ul>

          <h2>Role of Social Media & Vloggers</h2>

          <p>
            Travel influencers on YouTube, Instagram, and Facebook are giving 
            massive exposure to hidden gems across India. A single viral video 
            can make a small waterfall or viewpoint instantly famous.
          </p>

          <h2>Government Efforts Boosting Regional Tourism</h2>

          <p>
            State governments are also actively promoting lesser-known destinations 
            through tourism campaigns, road upgrades, and eco-tourism projects.
          </p>

          <h3>Examples of Local Spots That Recently Went Viral</h3>
          <ul>
            <li>Gandikota (Andhra Pradesh) – India’s Grand Canyon</li>
            <li>Varkala (Kerala) – Cliffs & beaches</li>
            <li>Coorg small villages (Karnataka) – Coffee & nature</li>
            <li>Pondicherry outskirts – Calm beaches & cafés</li>
          </ul>

          <h2>The Future of Local Tourism in India</h2>

          <p>
            With better transportation, affordable local stays, and increasing 
            interest in culture-based travel, local tourism will continue to rise. 
            It also creates jobs for local communities, boosts small businesses,
            and strengthens rural economies.
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
