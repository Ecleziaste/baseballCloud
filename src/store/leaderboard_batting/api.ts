import { http } from "../../services/http";
import { LeaderboardSelects } from "../../Types";

export const leaderboardBattingApi = (payload: LeaderboardSelects) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: LeaderboardSelects) => {
  const query = {
    variables: { input: data },

    query: ` query LeaderboardBatting($input:FilterLeaderboardInput!)
  { leaderboard_batting(input: $input)
   { leaderboard_batting {
     batter_name
     exit_velocity
     launch_angle
     distance
     batter_datraks_id
     age
     school {
       id
       name
     }
     teams {
       id
       name
     }
     favorite
   }
 }
 }
  `,
  };
  return query;
};
