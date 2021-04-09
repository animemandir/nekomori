import navbarReducer from "./navbar";
import errorReducer from "./error";
import modalReducer from "./modal";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navbar: navbarReducer,
  errors: errorReducer,
  modal: modalReducer,
});

export default rootReducer;
