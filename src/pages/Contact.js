import React from 'react';

export default function Contact() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto glass-card mt-24 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">Contact Us</h1>
      <p className="text-lg text-gray-200 mb-8">
        Have a story idea, feedback on our coverage, or a business inquiry? We would love to hear from you. The team at Local News India is dedicated to responding to our readers and partners promptly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Get In Touch</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" className="w-full bg-black/40 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" className="w-full bg-black/40 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" rows="4" className="w-full bg-black/40 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Contact Support</h3>
            <p className="text-gray-300">For press releases, news tips, editorial corrections, or advertising inquiries.</p>
            <p className="text-white mt-1">Email: <a href="mailto:localnewsappin@gmail.com" className="text-blue-400 hover:underline">localnewsappin@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
