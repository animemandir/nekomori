import navbarReducer from "./navbar";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navbar: navbarReducer,
});

export default rootReducer;
