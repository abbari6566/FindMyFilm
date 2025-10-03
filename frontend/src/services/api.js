const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";
const BASE_URL = (
  import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3"
).replace(/\/$/, "");

function assertEnv() {
  if (!API_KEY)
    console.error(
      "TMDB API key is missing. Set VITE_TMDB_API_KEY (GitHub Secret for prod)."
    );
  if (!BASE_URL)
    console.error(
      "TMDB base URL is missing. Set VITE_TMDB_BASE_URL or keep the fallback."
    );
}
assertEnv();

async function safeGetJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      // Log full URL to help debugging in prod
      console.error("TMDB HTTP error:", res.status, res.statusText, "for", url);
      const text = await res.text().catch(() => "");
      throw new Error(
        `HTTP ${res.status} ${res.statusText} – ${text.slice(0, 120)}`
      );
    }
    return await res.json();
  } catch (err) {
    console.error("TMDB fetch failed:", err, "for", url);
    return { results: [] }; // prevent UI crash
  }
}

export const getPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const data = await safeGetJSON(url);
  return data.results || [];
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  const data = await safeGetJSON(url);
  return data.results || [];
};
