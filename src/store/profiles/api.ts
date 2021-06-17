import { http } from "../../services/http";
import { ProfilesSelects } from "../../Types";

export const profilesApi = (payload: ProfilesSelects) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: ProfilesSelects) => {
  const query = {
    variables: { input: data },

    query: `query Profiles($input:FilterProfilesInput!){ profiles(input: $input)
      { profiles
        {
          id
          first_name
          last_name
          position
          position2
          school_year
          feet
          inches
          weight
          age
          events {
            id
          }
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
        total_count
      }
    }`,
  };
  return query;
};