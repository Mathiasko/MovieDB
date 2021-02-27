const initState = {
  topRatedMovies: [],
};

export const mainFetch = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MAIN":
      return {
        ...state,
        topRatedMovies: action.payload.topRatedMovies,
      };
    default:
      return { ...state };
  }
};
