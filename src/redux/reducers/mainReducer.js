import * as actionType from '../actions/actionTypes'
import initialState from './initialState'

export const mainFetch = (state = initialState.topRatedMovies, action) => {
  switch (action.type) {
    case actionType.FETCH_MAIN:
      return {
        ...state,
        topRatedMovies: action.payload.topRatedMovies,
      };
    default:
      return { ...state };
  }
};
