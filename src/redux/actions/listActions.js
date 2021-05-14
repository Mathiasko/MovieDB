import {
  createList,
  getMyLists,
  getListDetail,
  movieInList,
  removeMovie,
  deleteList,
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
export function listDeletedSuccess(listDeleted) {
  return { type: actionType.DELETE_LIST, listDeleted };
}

export const postNewList = (list, sessionID) => (dispatch) =>
  createList(list, sessionID)
    .then((newList) => {
      dispatch(createListSuccess(newList.data));
      fetchMyLists(sessionID)();
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

export const deleteThisList = (listId, sessionId) => (dispatch) =>
  deleteList(listId, sessionId)
    .then((confirm) => {
      dispatch(listDeletedSuccess(confirm.data));
      successHandler("List deleted");
    })
    .catch((error) => {
      errorHandler("Error");
      throw error;
    });
