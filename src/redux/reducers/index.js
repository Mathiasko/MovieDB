import { combineReducers } from "redux";
import { mainFetch } from "./mainReducer";
import { detailFetch } from "./detailReducer";
import { searchMovieFetch } from "./searchReducer";
import { personFetch } from "./personReducer";
import { authenticate } from "./authenticateReducer";
import { listFetch } from "./listReducer";

export const rootReducer = combineReducers({
  mainFetch,
  detailFetch,
  searchMovieFetch,
  personFetch,
  authenticate,
  listFetch
});
