import * as actionType from "./actionTypes";
import { newToken, sessionId } from "../../api/apiCalls";

export function newTokenSuccess(newToken) {
  return { type: actionType.GET_NEWTOKEN, newToken };
}

export function sessionIdSuccess(sessionId) {
  return { type: actionType.GET_SESSIONID, sessionId };
}

export const getNewToken = () => (dispatch) =>
  newToken()
    .then((newToken) => {
      dispatch(newTokenSuccess(newToken.data));
    })
    .catch((error) => {
      throw error;
    });

export const getSessionId = (payload) => (dispatch) =>
  sessionId(payload)
    .then((sessionId) => {
      dispatch(sessionIdSuccess(sessionId.data));
    })
    .catch((error) => {
      throw error;
    });
