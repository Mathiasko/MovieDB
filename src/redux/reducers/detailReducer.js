import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const detailFetch = (state = initialState.detail, action) => {
  switch (action.type) {
    case actionType.FETCH_DETAIL:
      return {
        ...state,
        movieDetail: action.movie,
      };
    case actionType.FETCH_EXTERNALIDS:
      return {
        ...state,
        externalIds: action.externalIds,
      };
    case actionType.FETCH_MOVIECAST:
      return {
        ...state,
        movieCast: action.movieCast,
      };
    case actionType.FETCH_MOVIERECOMMENDATION:
      return {
        ...state,
        movieRecommendation: action.movieRecommendation,
      };
    case actionType.FETCH_MOVIEREVIEWS:
      return {
        ...state,
        movieReviews: action.movieReviews,
      };
    case actionType.CLEAR_DETAIL:
      return {
        ...state,
        movieDetail: {},
        externalIds: {},
        movieCast: [],
        movieRecommendation: [],
      };
    default:
      return { ...state };
  }
};
