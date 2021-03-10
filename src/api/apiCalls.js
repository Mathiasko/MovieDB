import axios from "axios";
import { movieCastUrl, movieDetailUrl, movieExternalIdsUrl, movieRecommendationUrl, movieReviewsUrl } from "./apiUrl";

export async function movieDetail(id) {
  return await axios
    .get(movieDetailUrl(id))
}

export async function externalIds(id) {
  return await axios
    .get(movieExternalIdsUrl(id))
}

export async function movieCast(id) {
  return await axios
    .get(movieCastUrl(id))
}

export async function movieRecommendation(id) {
  return await axios
    .get(movieRecommendationUrl(id))
}
export async function movieReviews(id) {
  return await axios
    .get(movieReviewsUrl(id))
}
