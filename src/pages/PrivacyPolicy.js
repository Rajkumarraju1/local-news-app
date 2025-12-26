export default function PrivacyPolicy() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto space-y-6 glass-card mt-24 leading-relaxed">

      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">Privacy Policy</h1>

      <p className="text-lg">
        Local News India ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you access our platform.
        By using our website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">1. Information Collection</h2>
        <p className="text-gray-300">
          We do NOT collect personally identifiable information (PII) like your name, address, or phone number explicitly.
          However, standard non-personal data (Log Data) such as your browser type, device info, IP address, and pages visited may be collected for analytics and security purposes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">2. Cookies and Advertising</h2>
        <p className="text-gray-300 mb-2">
          We use <strong>Google AdSense</strong> to display advertisements. AdSense uses cookies to serve ads based on your prior visits to our website or other websites.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
          <li>Google allows the use of the <strong>DoubleClick DART cookie</strong> to serve ads to users based on their visit to our sites and other sites on the Internet.</li>
          <li>Users may opt-out of the use of the DART cookie by visiting the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="text-blue-300 underline">Google Ad and Content Network Privacy Policy</a>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">3. Third-Party Services</h2>
        <p className="text-gray-300">
          We aggregate news from <strong>NewsData.io</strong>. By using our service, you acknowledge that content is sourced from third parties. We are not responsible for the privacy practices of external sites you may visit via our links.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">4. Your Rights (GDPR & CCPA)</h2>
        <p className="text-gray-300">
          Depending on your location, you may have rights regarding your data (e.g., the right to opt-out of personalized ads). We respect these rights and provide mechanisms via our Consent Management Platform (if applicable) or browser settings to control your preferences.
        </p>
      </section>

      <section className="mt-8 pt-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-400">
          If you have questions about this policy, please contact us at: <br />
          <strong className="text-white">privacy@localnewsindia.in</strong>
        </p>
      </section>

    </div>
  );
}
