import axios from "axios";
import {
    movieDetailUrl,
  } from "../api/apiUrl";

export function movieDetail(id) {
   return axios.get(movieDetailUrl(id));
}