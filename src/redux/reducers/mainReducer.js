import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const mainFetch = (state = initialState.mainFetch, action) => {
  switch (action.type) {
    case actionType.FETCH_MAIN_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.topRatedMovies,
      };
    default:
      return { ...state };
  }
};
