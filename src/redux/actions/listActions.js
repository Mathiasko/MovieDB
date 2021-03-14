import {
  createList,
  getMyLists,
  getListDetail,
  movieInList,
  removeMovie,
} from "../../api/apiCalls";
import { errorHandler, successHandler } from "../../helper/Notification";
import * as actionType from "./actionTypes";

export function createListSuccess(newList) {
  return { type: actionType.POST_NEWLIST, newList };
}
export function getMyListsSuccess(myLists) {
  return { type: actionType.GET_MYLISTS, myLists };
}
export function getListDetailSuccess(listDetail) {
  return { type: actionType.GET_LISTSDETAIL, listDetail };
}
export function movieInListSuccess(movieInList) {
  return { type: actionType.POST_MOVIETOLIST, movieInList };
}
export function movieRemovedSuccess(movieRemoved) {
  return { type: actionType.POST_REMOVEMOVIEFROMLIST, movieRemoved };
}

export const postNewList = (list, sessionID) => (dispatch) =>
  createList(list, sessionID)
    .then((newList) => {
      dispatch(createListSuccess(newList.data));
    })
    .catch((error) => {
      throw error;
    });

export const fetchMyLists = (sessionID) => (dispatch) =>
  getMyLists(sessionID)
    .then((myLists) => {
      dispatch(getMyListsSuccess(myLists.data));
    })
    .catch((error) => {
      throw error;
    });

export const fetchListDetail = (listId) => (dispatch) =>
  getListDetail(listId)
    .then((listDetail) => {
      dispatch(getListDetailSuccess(listDetail.data));
    })
    .catch((error) => {
      throw error;
    });

export const addMovieToAList = (listId, sessionId, payload) => (dispatch) =>
  movieInList(listId, sessionId, payload)
    .then((movieInList) => {
      dispatch(movieInListSuccess(movieInList.data));
      successHandler("Movie added to tht list");
    })
    .catch((error) => {
      errorHandler("This movie is in the list already!");
      throw error;
    });

export const removeMovieFromList = (listId, sessionId, payload) => (dispatch) =>
  removeMovie(listId, sessionId, payload)
    .then((removeMovie) => {
      dispatch(movieRemovedSuccess(removeMovie.data));
      successHandler("Movie removed from list");
    })
    .catch((error) => {
      errorHandler("Error");
      throw error;
    });
