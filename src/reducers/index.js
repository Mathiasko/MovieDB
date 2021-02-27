import { combineReducers } from "redux";
import { mainFetch } from "./mainReducer";
import { detailFetch } from "./detailReducer";
import { searchMovieFetch } from "./searchReducer";
import { personFetch } from "./personReducer";
import { getNewToken } from "./authenticateReducer";
import { listFetch } from "./listReducer";

export const rootReducer = combineReducers({
  mainFetch: mainFetch,
  detailFetch: detailFetch,
  searchMovieFetch: searchMovieFetch,
  personFetch: personFetch,
  getNewToken: getNewToken,
  listFetch: listFetch
});
