import axios from "axios";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

export default axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: KEY,
  },
});
