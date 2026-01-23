export default function About() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto glass-card mt-24 leading-relaxed">

      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">About Local News India</h1>

      <p className="mb-6 text-lg text-gray-200">
        Local News India is a digital news platform dedicated to bringing you <strong>original, in-depth stories</strong> from the heart of India's diverse regions.
        While we aggregate breaking headlines to keep you informed, our core mission is to uncover the stories that often go untold—from the revival of ancient traditions to the rise of rural technology.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Mission</h2>
          <p className="text-gray-300">
            We believe in <strong>Journalism with a Purpose</strong>. Beyond just headlines, we focus on culture, innovation, and community impact.
            Our team of editors and contributors works tirelessly to produce high-value content that educates and inspires.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-400">Editorial Standards</h2>
          <p className="text-gray-300">
            We adhere to strict editorial guidelines. Every original story is researched and verified.
            For our aggregated news section, we curate only from the most credible sources, ensuring you get a noise-free, reliable news experience.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white/5 p-6 rounded-xl border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Why Read Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Original Feature Stories:</strong> Deep dives into topics like rural startups, heritage preservation, and sustainable living.</li>
          <li><strong>Curated Headlines:</strong> A quick snapshot of what's happening across 5 Indian languages.</li>
          <li><strong>User-First Design:</strong> A clean, reading-focused interface without intrusive distractions.</li>
        </ul>
      </div>

      <div className="mt-10 text-sm text-gray-400">
        <p>
          *Local News India combines original reporting with curated aggregation. We respect the intellectual property of all external publishers linked in our 'Around the Web' sections.*
        </p>
      </div>

    </div>
  );
}
