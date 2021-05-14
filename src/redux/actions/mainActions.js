import { topRatedMovies } from "../../api/apiCalls";
import * as actionType from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function topRatedMoviesSuccess(topRatedMovies) {
  return { type: actionType.FETCH_MAIN_SUCCESS, topRatedMovies };
}

export const mainFetch = (page) => (dispatch) => {
  dispatch(beginApiCall());
  topRatedMovies(page)
    .then((topRatedMovies) => {
      dispatch(topRatedMoviesSuccess(topRatedMovies.data));
    })
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};
