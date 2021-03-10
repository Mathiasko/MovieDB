import * as actionType from '../actions/actionTypes'
import initialState from './initialState'

export const searchMovieFetch = (state = initialState.searchMovie, action) => {
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
