import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const searchMovieFetch = (
  state = initialState.searchMovieFetch,
  action
) => {
  switch (action.type) {
    case actionType.FETCH_SEARCHMOVIE:
      return {
        ...state,
        results: action.movies.results,
      };
    default:
      return { ...state };
  }
};
