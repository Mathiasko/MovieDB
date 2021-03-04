const initState = {
  requestToken: [],
  sessionId: [],
};

export const getNewToken = (state = initState, action) => {
  switch (action.type) {
    case "GET_NEWTOKEN":
      return {
        ...state,
        requestToken: action.payload.requestToken,
      };
    case "GET_SESSIONID":
      return {
        ...state,
        sessionId: action.payload.sessionId,
      };
    default:
      return { ...state };
  }
};
