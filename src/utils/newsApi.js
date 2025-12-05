export async function fetchNews(language) {
  const API_KEY = "pub_db385b9685934a3a90ce8442af351fb9"; // Replace with your key other account :  pub_73688e7d4e6789934302705d47e31f7b785a0  other 2:  pub_db385b9685934a3a90ce8442af351fb9

  const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=${language}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results || [];
}


