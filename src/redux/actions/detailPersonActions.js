import axios from "axios";
import { personDetailUrl } from "../../api/apiUrl";
import * as actionType from './actionTypes'

export const personDetailFetch = (personId) => async (dispatch) => {
  const personDetail = await axios.get(personDetailUrl(personId));
  dispatch({
    type: actionType.FETCH_PERSON,
    payload: {
      personDetail: personDetail.data,
    },
  });
};
