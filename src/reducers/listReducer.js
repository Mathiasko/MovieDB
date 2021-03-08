const initState = {
  myNewList: [],
  myLists: [],
  movieInList: [],
};

export const listFetch = (state = initState, action) => {
  switch (action.type) {
    case "POST_NEWLIST":
      return {
        ...state,
        myNewList: action.payload.myNewList,
      };
    case "GET_MYLISTS":
      return {
        ...state,
        myLists: action.payload.myLists.results,
      };
    case "GET_LISTSDETAIL":
      return {
        ...state,
        listDetail: action.payload.listDetail,
      };
    case "POST_MOVIETOLIST":
      return {
        ...state,
        movieInList: action.payload.movieInList,
      };
    case "POST_REMOVEMOVIEFROMLIST":
      return {
        ...state,
        movieInList: action.payload.movieInList,
      };
    default:
      return { ...state };
  }
};
