import axios from "axios";
import {
  addToListUrl,
  createListUrl,
  getListDetailUrl,
  getListsUrl,
  sessionIdUrl,
} from "../api";

export const postNewList = (payload, sessionId) => async (dispatch) => {
  const newList = await axios.post(createListUrl(sessionId), payload);
  dispatch({
    type: "POST_NEWLIST",
    payload: {
      myNewList: newList.data,
    },
  });
};

export const getMyLists = (sessionId) => async (dispatch) => {
  const myLists = await axios.get(getListsUrl(sessionId));
  dispatch({
    type: "GET_MYLISTS",
    payload: {
      myLists: myLists.data,
    },
  });
};

export const getListDetail = (listId) => async (dispatch) => {
  const listDetail = await axios.get(getListDetailUrl(listId));
  dispatch({
    type: "GET_LISTSDETAIL",
    payload: {
      listDetail: listDetail.data,
    },
  });
};

export const addMovieToAList = (listId, sessionId, payload) => async (dispatch) => {
  const movieInList = await axios.post(addToListUrl(listId, sessionId), payload);
  dispatch({
    type: "POST_MOVIETOLIST",
    payload: {
      movieInList: movieInList.data,
    },
  });
};
