import { http } from "../../services/http";
import { LeaderboardSelects } from "../../Types";

export const leaderboardPitchingApi = (payload: LeaderboardSelects) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: LeaderboardSelects) => {
  const query = {
    variables: { input: data },

    query: `query LeaderboardPitching($input:FilterLeaderboardInput!)
    { leaderboard_pitching(input: $input)
      { leaderboard_pitching
        {
          pitcher_name
          pitch_type
          velocity
          spin_rate
          vertical_break
          horizontal_break
          pitcher_datraks_id
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
    }`,
  };
  return query;
};
