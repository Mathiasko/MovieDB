import axios from "axios";
import { searchMovieUrl } from "../api";

export const searchMovie = (movieName) => async (dispatch) => {
  const searchMovie = await axios.get(searchMovieUrl(movieName));
  dispatch({
    type: "FETCH_SEARCHMOVIE",
    payload: {
        searchMovie: searchMovie.data
    },
  });
};
