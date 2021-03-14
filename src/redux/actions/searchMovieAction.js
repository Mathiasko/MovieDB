import * as actionType from "./actionTypes";
import { searchMovie } from "../../api/apiCalls";

export function searchMovieSuccess(movies) {
  return { type: actionType.FETCH_SEARCHMOVIE, movies };
}

export const searchMovieFetch = (movieName) => (dispatch) =>
  searchMovie(movieName)
    .then((searchMovie) => {
      dispatch(searchMovieSuccess(searchMovie.data));
    })
    .catch((error) => {
      throw error;
    });
