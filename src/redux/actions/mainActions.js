import { topRatedMovies } from "../../api/apiCalls";
import * as actionType from "./actionTypes";

export function topRatedMoviesSuccess(topRatedMovies) {
  return { type: actionType.FETCH_MAIN, topRatedMovies };
}

export const mainFetch = (page) => (dispatch) =>
  topRatedMovies(page)
    .then((topRatedMovies) => {
      dispatch(topRatedMoviesSuccess(topRatedMovies.data));
    })
    .catch((error) => {
      throw error;
    });
