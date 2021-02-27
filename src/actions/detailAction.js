import axios from "axios";
import {
  movieCastUrl,
  movieDetailUrl,
  movieExternalUrl,
  movieRecommendationUrl,
  movieReviewsUrl
} from "../api";

export const detailFetch = (id) => async (dispatch) => {
  const movieDetail = await axios.get(movieDetailUrl(id));
  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      movieDetail: movieDetail.data,
    },
  });
};

export const externalIdsFetch = (id) => async (dispatch) => {
  const externalIds = await axios.get(movieExternalUrl(id));
  dispatch({
    type: "FETCH_EXTERNALIDS",
    payload: {
      externalIds: externalIds.data,
    },
  });
};

export const movieCastFetch = (id) => async (dispatch) => {
  const movieCast = await axios.get(movieCastUrl(id));
  dispatch({
    type: "FETCH_MOVIECAST",
    payload: {
      movieCast: movieCast.data.cast.slice(0, 15),
    },
  });
};

export const movieRecommendationFetch = (id) => async (dispatch) => {
  const movieRecommendation = await axios.get(movieRecommendationUrl(id));
  dispatch({
    type: "FETCH_MOVIERECOMMENDATION",
    payload: {
      movieRecommendation: movieRecommendation.data.results.slice(0, 8),
    },
  });
};

export const reviewsFetch = (id) => async (dispatch) => {
  const movieReviews = await axios.get(movieReviewsUrl(id));
  dispatch({
    type: "FETCH_MOVIEREVIEWS",
    payload: {
      movieReviews: movieReviews.data.results
    },
  });
};

export const clearMovieDetail = () => (dispatch) => {
  dispatch({
    type: "CLEAR_DETAIL",
  });
};
