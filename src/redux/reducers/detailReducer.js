import * as actionType from '../actions/actionTypes'

const initState = {
  
};

export const detailFetch = (state = initState, action) => {
  switch (action.type) {
    case actionType.FETCH_DETAIL:
      return {
        ...state,
        movieDetail: action.payload.movieDetail,
      };
    case actionType.FETCH_EXTERNALIDS:
      return {
        ...state,
        externalIds: action.payload.externalIds,
      };
    case actionType.FETCH_MOVIECAST:
      return {
        ...state,
        movieCast: action.payload.movieCast,
      };
    case actionType.FETCH_MOVIERECOMMENDATION:
      return {
        ...state,
        movieRecommendation: action.payload.movieRecommendation,
      };
    case actionType.FETCH_MOVIEREVIEWS:
      return {
        ...state,
        movieReviews: action.payload.movieReviews,
      };
    case actionType.CLEAR_DETAIL:
      return {
        ...state,
        movieDetail: null,
        externalIds: null,
        movieCast: null,
        movieRecommendation: null,
      };
    default:
      return { ...state };
  }
};
