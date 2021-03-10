import {
  movieDetail,
  externalIds,
  movieCast,
  movieRecommendation,
  movieReviews,
} from "../../api/apiCalls";
import * as actionType from "./actionTypes";

export function detailFetchSuccess(movie) {
  return { type: actionType.FETCH_DETAIL, movie };
}
export function externalIdsFetchSuccess(externalIds) {
  return { type: actionType.FETCH_EXTERNALIDS, externalIds };
}
export function movieCastFetchSuccess(movieCast) {
  return { type: actionType.FETCH_MOVIECAST, movieCast };
}
export function movieRecommendationFetchSuccess(movieRecommendation) {
  return { type: actionType.FETCH_MOVIERECOMMENDATION, movieRecommendation };
}
export function movieReviewsFetchSuccess(movieReviews) {
  return { type: actionType.FETCH_MOVIEREVIEWS, movieReviews };
}

export const detailFetch = (id) => (dispatch) =>
  movieDetail(id)
    .then((movieDetail) => {
      dispatch(detailFetchSuccess(movieDetail.data));
    })
    .catch((error) => {
      throw error;
    });

export const externalIdsFetch = (id) => (dispatch) =>
  externalIds(id)
    .then((externalIds) => {
      dispatch(externalIdsFetchSuccess(externalIds.data));
    })
    .catch((error) => {
      throw error;
    });

export const movieCastFetch = (id) => (dispatch) =>
  movieCast(id)
    .then((movieCast) => {
      dispatch(movieCastFetchSuccess(movieCast.data.cast.slice(0, 15)));
    })
    .catch((error) => {
      throw error;
    });

export const movieRecommendationFetch = (id) => (dispatch) =>
  movieRecommendation(id)
    .then((movieRecommendation) => {
      dispatch(
        movieRecommendationFetchSuccess(
          movieRecommendation.data.results.slice(0, 8)
        )
      );
    })
    .catch((error) => {
      throw error;
    });

export const reviewsFetch = (id) => (dispatch) =>
  movieReviews(id)
    .then((movieReviews) => {
      dispatch(movieReviewsFetchSuccess(movieReviews.data.results));
    })
    .catch((error) => {
      throw error;
    });

export const clearMovieDetail = () => (dispatch) => {
  dispatch({
    type: actionType.CLEAR_DETAIL,
  });
};
