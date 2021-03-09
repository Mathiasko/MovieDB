import axios from "axios";
import {
  movieCastUrl,
  movieDetailUrl,
  movieExternalUrl,
  movieRecommendationUrl,
  movieReviewsUrl
} from "../../api";
import * as actionType from './actionTypes'

export const detailFetch = (id) => async (dispatch) => {
  const movieDetail = await axios.get(movieDetailUrl(id));
  dispatch({
    type: actionType.FETCH_DETAIL,
    payload: {
      movieDetail: movieDetail.data,
    },
  });
};

export const externalIdsFetch = (id) => async (dispatch) => {
  const externalIds = await axios.get(movieExternalUrl(id));
  dispatch({
    type: actionType.FETCH_EXTERNALIDS,
    payload: {
      externalIds: externalIds.data,
    },
  });
};

export const movieCastFetch = (id) => async (dispatch) => {
  const movieCast = await axios.get(movieCastUrl(id));
  dispatch({
    type: actionType.FETCH_MOVIECAST,
    payload: {
      movieCast: movieCast.data.cast.slice(0, 15),
    },
  });
};

export const movieRecommendationFetch = (id) => async (dispatch) => {
  const movieRecommendation = await axios.get(movieRecommendationUrl(id));
  dispatch({
    type: actionType.FETCH_MOVIERECOMMENDATION,
    payload: {
      movieRecommendation: movieRecommendation.data.results.slice(0, 8),
    },
  });
};

export const reviewsFetch = (id) => async (dispatch) => {
  const movieReviews = await axios.get(movieReviewsUrl(id));
  dispatch({
    type: actionType.FETCH_MOVIEREVIEWS,
    payload: {
      movieReviews: movieReviews.data.results
    },
  });
};

export const clearMovieDetail = () => (dispatch) => {
  dispatch({
    type: actionType.CLEAR_DETAIL,
  });
};
