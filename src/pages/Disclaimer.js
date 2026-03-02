import React from 'react';

export default function Disclaimer() {
    return (
        <div className="p-8 text-white max-w-4xl mx-auto space-y-8 glass-card mt-24 leading-relaxed">
            <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">Disclaimer</h1>
            <p className="text-gray-300">Last updated: March 02, 2026</p>

            <p className="text-lg">
                The information provided by Local News India ("we," "us," or "our") on https://www.localnewsindia.in (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">1. External Links Disclaimer</h2>
                <p className="text-gray-300 mb-3">
                    The Site contains links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
                <p className="text-gray-300">
                    WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">2. News Aggregation Disclaimer</h2>
                <p className="text-gray-300 mb-3">
                    Local News India operates partly as a news aggregator. Some content, specifically in the "Around the Web" or categorized aggregated sections, is sourced from third-party news agencies, RSS feeds, and publicly available APIs (e.g., NewsData.io).
                </p>
                <p className="text-gray-300 mb-3">
                    All copyrights, trademarks, and intellectual property rights associated with aggregated articles belong to their respective original publishers. We do not claim ownership of aggregated news content. If you are a publisher and wish for your content to be removed from our aggregation feed, please contact us at localnewsappin@gmail.com.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">3. Editorial Independence</h2>
                <p className="text-gray-300">
                    The views and opinions expressed in original articles and op-eds published on Local News India are those of the authors and do not necessarily reflect the official policy or position of Local News India. Any content provided by our bloggers or authors are of their opinion and are not intended to malign any religion, ethnic group, club, organization, company, individual, or anyone or anything.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3 text-blue-400">4. Advertising and Affiliates</h2>
                <p className="text-gray-300">
                    The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. The Site also uses Google AdSense to display advertisements. We do not personally endorse the products or services advertised on our Site through these automated ad networks.
                </p>
            </section>

        </div>
    );
}
