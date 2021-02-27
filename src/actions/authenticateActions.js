import axios from "axios";
import { newTokenUrl, sessionIdUrl } from "../api";

export const getNewToken = () => async (dispatch) => {
  const newToken = await axios.get(newTokenUrl());
  dispatch({
    type: "GET_NEWTOKEN",
    payload: {
      requestToken: newToken.data
    },
  });
};

export const getSessionID = (payload) => async (dispatch) => {
  const sessionId = await axios.post(sessionIdUrl(), payload);
  dispatch({
    type: "GET_SESSIONID",
    payload: {
      sessionId: sessionId.data
    },
  });
};
