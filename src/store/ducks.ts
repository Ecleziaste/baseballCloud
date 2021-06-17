import { combineReducers } from "redux";
import { userReducer } from "./user";
import { currentProfileReducer } from "./current_profile";
import { profileReducer } from "./profile";
import { leaderboardBattingReducer } from "./leaderboard_batting";
import { leaderboardPitchingReducer } from "./leaderboard_pitching";
import { profilesReducer } from "./profiles";

const rootReducer = combineReducers({
  auth: userReducer,
  current_profile: currentProfileReducer,
  profile: profileReducer,
  leaderboard_batting: leaderboardBattingReducer,
  leaderboard_pitching: leaderboardPitchingReducer,
  profiles: profilesReducer,
});

export { rootReducer };
