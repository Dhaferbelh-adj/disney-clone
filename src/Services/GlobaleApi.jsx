import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "54060af996ba0304ced2ac368fb5a369";

// Fixing the URL by adding the '=' and using proper concatenation
const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

export default {
    getTrendingVideos
};
