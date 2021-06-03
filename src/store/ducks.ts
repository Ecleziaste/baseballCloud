import { combineReducers } from "redux";
import { userReducer } from "./user";
import { currentProfileReducer } from "./current_profile";

const rootReducer = combineReducers({
  auth: userReducer,
  profile: currentProfileReducer,
});

export { rootReducer };
