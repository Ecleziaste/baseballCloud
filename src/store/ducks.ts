import { combineReducers } from "redux";
import { userReducer } from "./user";
import { currentProfileReducer } from "./current_profile";

const rootReducer = combineReducers({
  user: userReducer,
  current_profile: currentProfileReducer,
});

export { rootReducer };
