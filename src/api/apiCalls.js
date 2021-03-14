import axios from "axios";
import {
  addToListUrl,
  createListUrl,
  getListDetailUrl,
  getListsUrl,
  movieCastUrl,
  movieDetailUrl,
  movieExternalIdsUrl,
  movieRecommendationUrl,
  movieReviewsUrl,
  newTokenUrl,
  removeFromListUrl,
  searchMovieUrl,
  sessionIdUrl,
  topRatedMoviesUrl,
} from "./apiUrl";

// MAIN CALLS
export async function topRatedMovies(page) {
  return await axios.get(topRatedMoviesUrl(page));
}

// MOVIE DETAIL CALLS
export async function movieDetail(id) {
  return await axios.get(movieDetailUrl(id));
}

export async function externalIds(id) {
  return await axios.get(movieExternalIdsUrl(id));
}

export async function movieCast(id) {
  return await axios.get(movieCastUrl(id));
}

export async function movieRecommendation(id) {
  return await axios.get(movieRecommendationUrl(id));
}
export async function movieReviews(id) {
  return await axios.get(movieReviewsUrl(id));
}

// AUTHENTICATE CALLS

export async function newToken() {
  return await axios.get(newTokenUrl());
}

export async function sessionId(payload) {
  return await axios.post(sessionIdUrl(), payload);
}

// SEARCH MOVIE

export async function searchMovie(movieName) {
  return await axios.get(searchMovieUrl(movieName));
}

// MY LISTS
export async function createList(payload, sessionId) {
  return await axios.post(createListUrl(sessionId), payload);
}

export async function getMyLists(sessionId) {
  return await axios.get(getListsUrl(sessionId));
}

export async function getListDetail(listId) {
  return await axios.get(getListDetailUrl(listId));
}

export async function movieInList(listId, sessionId, payload) {
  return await axios.post(addToListUrl(listId, sessionId), payload);
}

export async function removeMovie(listId, sessionId, payload) {
  return await axios.post(removeFromListUrl(listId, sessionId), payload);
}
