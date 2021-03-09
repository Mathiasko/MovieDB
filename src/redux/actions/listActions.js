import axios from "axios";
import {
  addToListUrl,
  createListUrl,
  getListDetailUrl,
  getListsUrl,
  removeFromListUrl,
} from "../../api";
import { errorHandler, successHandler } from "../../helper/Notification";
import * as actionType from './actionTypes'

export const postNewList = (payload, sessionId) => async (dispatch) => {
  const newList = await axios.post(createListUrl(sessionId), payload);
  dispatch({
    type: actionType.POST_NEWLIST,
    payload: {
      myNewList: newList.data,
    },
  });
};

export const getMyLists = (sessionId) => async (dispatch) => {
  const myLists = await axios.get(getListsUrl(sessionId));
  dispatch({
    type: actionType.GET_MYLISTS,
    payload: {
      myLists: myLists.data,
    },
  });
};

export const getListDetail = (listId) => async (dispatch) => {
  const listDetail = await axios.get(getListDetailUrl(listId));
  dispatch({
    type: actionType.GET_LISTSDETAIL,
    payload: {
      listDetail: listDetail.data,
    },
  });
};

export const addMovieToAList = (listId, sessionId, payload) => async (dispatch) => {
  let movieInList={}
  await axios.post(addToListUrl(listId, sessionId), payload)
  .then((response)=> {
    movieInList = response
    successHandler("Movie added to tht list")
  }, (error) =>{
    errorHandler('This movie is in the list already!')
  })
  dispatch({
    type: actionType.POST_MOVIETOLIST,
    payload: {
      movieInList: movieInList.data,
    },
  });
};

export const removeMoveFromList = (listId, sessionId, payload) => async (dispatch) => {
  let movieInList={}
  await axios.post(removeFromListUrl(listId, sessionId), payload)
  .then((response)=> {
    movieInList = response
    successHandler("Movie removed from list")
    getMyLists(sessionId)
  }, (error) =>{
    errorHandler('Error')
  })
  dispatch({
    type: actionType.POST_REMOVEMOVIEFROMLIST,
    payload: {
      movieInList: movieInList.data,
    },
  });
};
