import axios from "axios";
import { topRatedMoviesUrl } from "../api";

export const mainFetch = (page) => async (dispatch) => {
  const topRatedMovies = await axios.get(topRatedMoviesUrl(page));
  dispatch({
    type: "FETCH_MAIN",
    payload: {
      topRatedMovies: topRatedMovies.data.results,
    },
  });
};
