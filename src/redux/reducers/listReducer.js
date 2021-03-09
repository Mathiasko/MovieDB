import * as actionType from '../actions/actionTypes'
const initState = {
  myNewList: [],
  myLists: [],
  movieInList: [],
};

export const listFetch = (state = initState, action) => {
  switch (action.type) {
    case actionType.POST_NEWLIST:
      return {
        ...state,
        myNewList: action.payload.myNewList,
      };
    case actionType.GET_MYLISTS:
      return {
        ...state,
        myLists: action.payload.myLists.results,
      };
    case actionType.GET_LISTSDETAIL:
      return {
        ...state,
        listDetail: action.payload.listDetail,
      };
    case actionType.POST_MOVIETOLIST:
      return {
        ...state,
        movieInList: action.payload.movieInList,
      };
    case actionType.POST_REMOVEMOVIEFROMLIST:
      return {
        ...state,
        movieInList: action.payload.movieInList,
      };
    default:
      return { ...state };
  }
};
