import { combineReducers } from "redux";
import { mainFetch } from "./mainReducer";
import { detailFetch } from "./detailReducer";
import { searchMovieFetch } from "./searchMovieReducer";
import { personFetch } from "./personDetailReducer";
import { authenticate } from "./authenticateReducer";
import { listFetch } from "./listReducer";

export const rootReducer = combineReducers({
  mainFetch,
  detailFetch,
  searchMovieFetch,
  personFetch,
  authenticate,
  listFetch,
});
