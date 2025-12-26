export default function About() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto glass-card mt-24 leading-relaxed">

      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">About Local News India</h1>

      <p className="mb-6 text-lg text-gray-200">
        Local News India is a premier digital news aggregation platform dedicated to delivering real-time, hyper-local updates to the diverse linguistic communities of India.
        We recognize the gap in high-quality, instant regional news coverage and strive to bridge it by providing a seamless, distraction-free reading experience in Telugu, Tamil, Kannada, Malayalam, and Hindi.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to democratize access to information. In an era of information overload, we cureate, verify, and present only the most relevant stories that impact your daily life.
            We believe that language should never be a barrier to being informed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-400">Editorial Standards</h2>
          <p className="text-gray-300">
            Although we are an aggregator, we prioritize accuracy and reliability. Our algorithms and diverse sourcing strategy ensure that you receive news from established, credible publishers.
            We strictly filter out clickbait and misinformation to respect your time and intelligence.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white/5 p-6 rounded-xl border border-white/10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Why Trust Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Unbiased Reporting:</strong> We present multiple perspectives by aggregating from diverse sources.</li>
          <li><strong>Real-Time Updates:</strong> Our feed is updated every minute to ensure you never miss breaking news.</li>
          <li><strong>User-Centric Design:</strong> No intrusive pop-ups, no paywalls, just news.</li>
        </ul>
      </div>

      <div className="mt-10 text-sm text-gray-400">
        <p>
          *Disclaimer: Local News India is an aggregator. All trademarks and copyrights belong to their respective owners. We direct traffic to original publishers to support the ecosystem.*
        </p>
      </div>

    </div>
  );
}
