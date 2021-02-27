import axios from "axios";
import { personDetailUrl } from "../api";

export const personDetailFetch = (personId) => async (dispatch) => {
  const personDetail = await axios.get(personDetailUrl(personId));
  dispatch({
    type: "FETCH_PERSON",
    payload: {
      personDetail: personDetail.data,
    },
  });
};
