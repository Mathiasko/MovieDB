import * as actionType from '../actions/actionTypes'

const initState = {
  searchMovie: [],
};

export const searchMovieFetch = (state = initState, action) => {
  switch (action.type) {
    case actionType.FETCH_SEARCHMOVIE:
      return {
        ...state,
        searchMovie: action.payload.searchMovie,
      };
    default:
      return { ...state };
  }
};
