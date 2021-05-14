import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const authenticate = (state = initialState.authenticate, action) => {
  switch (action.type) {
    case actionType.GET_NEWTOKEN:
      return {
        ...state,
        requestToken: action.newToken,
      };
    case actionType.GET_SESSIONID:
      return {
        ...state,
        sessionId: action.sessionId,
      };
    case actionType.LOGOUT:
      return {
        ...state,
        logOutSuccess: action.status.data.success,
        sessionId:{},
        requestToken: action.newToken={},
      };
    default:
      return { ...state };
  }
};
