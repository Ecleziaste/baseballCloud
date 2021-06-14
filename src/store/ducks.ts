import { combineReducers } from "redux";
import { userReducer } from "./user";
import { currentProfileReducer } from "./current_profile";
import { profileReducer } from "./profile";

const rootReducer = combineReducers({
  auth: userReducer,
  current_profile: currentProfileReducer,
  profile: profileReducer,
});

export { rootReducer };
