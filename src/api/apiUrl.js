const url = "https://api.themoviedb.org/3";
const api_key = "?api_key=12d0952d2ee273c948025b7c55a3f6f7";

export const topRatedMoviesUrl = (page) => `${url}/movie/top_rated${api_key}&page=${page}`;
export const movieDetailUrl = (movieID) => `${url}/movie/${movieID + api_key}`
export const movieExternalUrl = (movieID) => `${url}/movie/${movieID}/external_ids${api_key}`
export const searchMovieUrl = (movieName) => `${url}/search/movie${api_key}&language=en-US&page=1&include_adult=falseS&query=${movieName}`
export const movieCastUrl = (movieID) => `${url}/movie/${movieID}/credits${api_key}&language=en-US`
export const movieRecommendationUrl = (movieID) => `${url}/movie/${movieID}/recommendations${api_key}&language=en-US&page=1`
export const personDetailUrl = (personID) => `${url}/person/${personID}${api_key}&language=en-US`
export const movieReviewsUrl = (movieID) => `${url}/movie/${movieID}/reviews${api_key}&language=en-US&page=1`
export const newTokenUrl = () => `${url}/authentication/token/new${api_key}`
export const sessionIdUrl = () => `${url}/authentication/session/new${api_key}`
export const createListUrl = (sessionID) => `${url}/list${api_key}&session_id=${sessionID}`
export const getListsUrl = (sessionID) => `${url}/account/10093871/lists${api_key}&session_id=${sessionID}`
export const getListDetailUrl = (listID) => `${url}/list/${listID}${api_key}`
export const addToListUrl = (listID, sessionID) => `${url}/list/${listID}/add_item${api_key}&session_id=${sessionID}`
export const removeFromListUrl = (listID, sessionID) => `${url}/list/${listID}/remove_item${api_key}&session_id=${sessionID}`