const initState = {
  
};

export const detailFetch = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        movieDetail: action.payload.movieDetail,
      };
    case "FETCH_EXTERNALIDS":
      return {
        ...state,
        externalIds: action.payload.externalIds,
      };
    case "FETCH_MOVIECAST":
      return {
        ...state,
        movieCast: action.payload.movieCast,
      };
    case "FETCH_MOVIERECOMMENDATION":
      return {
        ...state,
        movieRecommendation: action.payload.movieRecommendation,
      };
    case "FETCH_MOVIEREVIEWS":
      return {
        ...state,
        movieReviews: action.payload.movieReviews,
      };
    case "CLEAR_DETAIL":
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
