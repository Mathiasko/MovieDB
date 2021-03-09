import axios from "axios";
import { searchMovieUrl } from "../../api";
import * as actionType from './actionTypes'

export const searchMovie = (movieName) => async (dispatch) => {
  const searchMovie = await axios.get(searchMovieUrl(movieName));
  dispatch({
    type: actionType.FETCH_SEARCHMOVIE,
    payload: {
        searchMovie: searchMovie.data
    },
  });
};
