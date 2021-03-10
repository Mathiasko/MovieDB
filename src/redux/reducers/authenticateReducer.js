import * as actionType from '../actions/actionTypes'
import initialState from './initialState'
//
export const getNewToken = (state = initialState.authenticate, action) => {
  switch (action.type) {
    case actionType.GET_NEWTOKEN:
      return {
        ...state,
        requestToken: action.payload.requestToken,
      };
    case actionType.GET_SESSIONID:
      return {
        ...state,
        sessionId: action.payload.sessionId,
      };
    default:
      return { ...state };
  }
};
