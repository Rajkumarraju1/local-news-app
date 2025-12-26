const API_KEY = 'pub_73688e7d4e6789934302705d47e31f7b785a0'; // NewsData.io Key

export async function fetchNews(language) {
    // NewsData.io supports 'te' (Telugu), 'ta' (Tamil), 'hi' (Hindi), etc.
    // If language is 'en', use 'en'.
    // If mapping needed: 
    // te -> te, ta -> ta, hi -> hi, kn -> kn, ml -> ml (Check if supported, usually yes for major Indian langs)

    // Fallback to 'en' if undefined
    const langParam = language || 'en';

    // NewsData.io API Endpoint
    // added 'image=1' (if supported by plan) or just fetch and filter. 
    // Free plan has limits, so let's stick to basic query.
    let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=${langParam}`;

    // If fetching 'en', we might want to ensure it's not just generic but maybe top news
    if (langParam === 'en') {
        url += '&category=top';
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'success') {
            return data.results.map(article => ({
                title: article.title,
                link: article.link,
                pubDate: article.pubDate,
                description: article.description,
                image_url: article.image_url, // NewsData.io key
                source_id: article.source_id
            })).filter(article => article.image_url); // Only show articles with images
        } else {
            console.error("NewsData.io Error:", data.results?.message || data.message);
            return [];
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}
