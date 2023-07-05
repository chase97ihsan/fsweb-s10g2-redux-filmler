import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducers from "./favoriteReducers";

const rootReducers = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducers,
});

export default rootReducers;
