import React from 'react';

export default function About() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto glass-card mt-24 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">About Local News India</h1>

      <p className="mb-6 text-lg text-gray-200">
        Local News India is a premier digital news platform dedicated to bringing you <strong>original, in-depth, and impactful stories</strong> from the heart of India's diverse regions.
        Founded with the vision to bridge the information gap across linguistic and geographical barriers, we deliver news that matters to you, in the language you prefer.
      </p>

      <p className="mb-6 text-lg text-gray-200">
        While we aggregate breaking headlines to keep you informed of global and national events, our core mission is to uncover the stories that often go untold—from the revival of ancient traditions and the quiet revolutions in rural technology to the everyday triumphs of ordinary citizens.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Mission & Vision</h2>
          <p className="text-gray-300">
            We believe in <strong>Journalism with a Purpose</strong>. Beyond just headlines and clickbait, we focus on culture, innovation, community impact, and civic issues.
            Our dedicated team of editors, field journalists, and contributors works tirelessly across multiple states to produce high-value content that educates, inspires, and holds power accountable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-400">Our Editorial Standards</h2>
          <p className="text-gray-300">
            Trust is the currency of journalism. We adhere to strict, uncompromising editorial guidelines. Every original story published under the Local News India banner is thoroughly researched, cross-checked, and verified for factual accuracy.
            For our aggregated news section, we curate meticulously, partnering only with the most credible and established news agencies to ensure a noise-free, reliable news experience.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">What We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li><strong>Original Feature Stories:</strong> Deep dives into crucial topics like rural startups, heritage preservation, sustainable living, and localized economic shifts.</li>
          <li><strong>Curated Breaking Headlines:</strong> A quick, comprehensive snapshot of what's happening globally and nationally, translated across 5 major Indian languages (Telugu, Tamil, Malayalam, Kannada, Hindi).</li>
          <li><strong>Ad-Friendly, Safe Content:</strong> We maintain a strict policy against clickbait, hate speech, and adult content, ensuring full compliance with international advertising standards like Google AdSense.</li>
          <li><strong>User-First Design Experience:</strong> A clean, reading-focused interface free from intrusive pop-ups, optimized for low-bandwidth networks in rural areas.</li>
        </ul>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <address className="not-italic text-gray-300 space-y-2">
          <p>Email: <a href="mailto:localnewsappin@gmail.com" className="text-blue-400 hover:underline">localnewsappin@gmail.com</a></p>
        </address>
      </div>

      <div className="mt-10 text-xs text-gray-500 text-center">
        <p>
          *Local News India combines rigorous original reporting with responsible curated aggregation. We deeply respect the intellectual property of all publishers linked in our 'Around the Web' sections and strictly adhere to fair use policies.*
        </p>
      </div>

    </div>
  );
}
