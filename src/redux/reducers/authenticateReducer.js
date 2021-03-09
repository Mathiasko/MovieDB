import * as actionType from '../actions/actionTypes'
const initState = {
  requestToken: [],
  sessionId: [],
};

export const getNewToken = (state = initState, action) => {
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
