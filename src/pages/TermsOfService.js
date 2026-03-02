import React from 'react';

export default function TermsOfService() {
    return (
        <div className="p-8 text-white max-w-4xl mx-auto space-y-8 glass-card mt-24 leading-relaxed">
            <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">Terms of Service</h1>
            <p className="text-gray-300">Last updated: March 02, 2026</p>

            <p className="text-lg">
                Welcome to Local News India. These terms and conditions outline the rules and regulations for the use of Local News India's Website, located at https://www.localnewsindia.in.
            </p>

            <p className="text-lg">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Local News India if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">1. License</h2>
                <p className="text-gray-300 mb-3">
                    Unless otherwise stated, Local News India and/or its licensors own the intellectual property rights for all material on Local News India. All intellectual property rights are reserved. You may access this from Local News India for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p className="text-gray-300 mb-2">You must not:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Republish material from Local News India</li>
                    <li>Sell, rent, or sub-license material from Local News India</li>
                    <li>Reproduce, duplicate, or copy material from Local News India</li>
                    <li>Redistribute content from Local News India</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">2. User Comments</h2>
                <p className="text-gray-300 mb-3">
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Local News India does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Local News India, its agents, and/or affiliates.
                </p>
                <p className="text-gray-300">
                    Local News India reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">3. Hyperlinking to our Content</h2>
                <p className="text-gray-300 mb-2">The following organizations may link to our Website without prior written approval:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-3">
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">4. Content Liability</h2>
                <p className="text-gray-300">
                    We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">5. Limitation of Liability</h2>
                <p className="text-gray-300">
                    In no event shall Local News India, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. Local News India, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
                </p>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-700">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p className="text-gray-400">
                    If you have any queries regarding any of our terms, please contact us at: <br />
                    <strong className="text-white">localnewsappin@gmail.com</strong>
                </p>
            </section>

        </div>
    );
}
