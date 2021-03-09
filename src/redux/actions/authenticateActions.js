import axios from "axios";
import { newTokenUrl, sessionIdUrl } from "../../api";
import * as actionType from './actionTypes'

export const getNewToken = () => async (dispatch) => {
  const newToken = await axios.get(newTokenUrl());
  dispatch({
    type: actionType.GET_NEWTOKEN,
    payload: {
      requestToken: newToken.data,
    },
  });
};

export const getSessionID = (payload) => async (dispatch) => {
  const sessionId = await axios.post(sessionIdUrl(), payload);
  dispatch({
    type: actionType.GET_SESSIONID,
    payload: {
      sessionId: sessionId.data,
    },
  });
};
