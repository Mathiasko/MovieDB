import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export const personFetch = (state = initialState.personDetail, action) => {
  switch (action.type) {
    case actionType.FETCH_PERSON:
      return {
        ...state,
        personDetail: action.payload.personDetail,
      };
    default:
      return { ...state };
  }
};
