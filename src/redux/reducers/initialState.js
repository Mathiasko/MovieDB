export default {
  mainFetch: { topRatedMovies: { results: [] } },
  searchMovie: [],
  authenticate: {
    requestToken: {
      request_token: "",
    },
    sessionId: {},
  },
  detail: {
    movieDetail: {},
    externalIds: {},
    movieCast: [],
    movieRecommendation: [],
    movieReviews: [],
    production_companies: [],
  },
  list: {
    myNewList: [],
    myLists: [],
    listDetail: [],
    movieInList: [],
  },
  apiCallsInProgress: 0,
};
