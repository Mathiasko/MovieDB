import * as actionType from '../actions/actionTypes'
const initState = {
  personDetail: [],
};

export const personFetch = (state = initState, action) => {
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
