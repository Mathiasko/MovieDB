import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const listFetch = (state = initialState.list, action) => {
  switch (action.type) {
    case actionType.POST_NEWLIST:
      return {
        ...state,
        myNewList: action.newList,
      };
    case actionType.GET_MYLISTS:
      return {
        ...state,
        myLists: action.myLists.results,
      };
    case actionType.GET_LISTSDETAIL:
      return {
        ...state,
        listDetail: action.listDetail,
      };
    case actionType.POST_MOVIETOLIST:
      return {
        ...state,
        movieInList: action.movieInList,
      };
    case actionType.POST_REMOVEMOVIEFROMLIST:
      return {
        ...state,
        movieInList: action.removeMovie,
      };
      case actionType.DELETE_LIST:
        return{
          ...state,
          deletedList: action,
        }
    default:
      return { ...state };
  }
};
