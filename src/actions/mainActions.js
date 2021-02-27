import axios from "axios";
import { topRatedMoviesUrl } from "../api";

export const mainFetch = () => async (dispatch) => {
  const topRatedMovies = await axios.get(topRatedMoviesUrl());
  dispatch({
    type: "FETCH_MAIN",
    payload: {
      topRatedMovies: topRatedMovies.data.results,
    },
  });
};
