import axios from "axios";
import { topRatedMoviesUrl } from "../../api";
import * as actionType from './actionTypes'

export const mainFetch = (page) => async (dispatch) => {
  const topRatedMovies = await axios.get(topRatedMoviesUrl(page));
  dispatch({
    type: actionType.FETCH_MAIN,
    payload: {
      topRatedMovies: topRatedMovies.data.results,
    },
  });
};
