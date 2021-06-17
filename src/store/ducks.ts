import { combineReducers } from "redux";
import { userReducer } from "./user";
import { currentProfileReducer } from "./current_profile";
import { profileReducer } from "./profile";
import { leaderboardBattingReducer } from "./leaderboard_batting";
import { profilesReducer } from "./profiles";

const rootReducer = combineReducers({
  auth: userReducer,
  current_profile: currentProfileReducer,
  profile: profileReducer,
  leaderboard_batting: leaderboardBattingReducer,
  profiles: profilesReducer,
});

export { rootReducer };
