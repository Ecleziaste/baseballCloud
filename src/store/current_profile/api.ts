import { http } from "../../services/http";
import { UpdateProfileSelects } from "../../Types";

export const currentProfileApi = (payload: {}) =>
  http.post(`/graphql`, { getCurrent });

const getCurrent = `{ current_profile ()
  {
    id
    first_name
    last_name
    position
    position2
    avatar
    throws_hand
    bats_hand
    biography
    school_year
    feet
    inches
    weight
    age
    school {
      id
      name
    }
    teams {
      id
       name
      }
      facilities {
        id
        email
        u_name
      }
    }
  }`;

export const updateCurrentProfileApi = (payload: UpdateProfileSelects) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: UpdateProfileSelects) => {
  const update = {
    // headers: { access-token: null, client: null, uid: null },
    variables: { form: { data } },
    query: `mutation UpdateProfile($form:UpdateProfileInput!)
  { update_profile (input:$form)
    { profile
      {
        id
        first_name
        last_name
        position
        position2
        avatar
        throws_hand
        bats_hand
        biography
        school_year
        feet
        inches
        weight
        age
        recent_events {
          id
          event_type
          event_name
          date
          recent_avatars {
            id
            first_name
            last_name
            avatar
          }
        }
        school {
          id
          name
        }
        teams {
          id
          name
        }
        facilities {
          id
          email
          u_name
        }
      }
    }
  }`,
  };

  return update;
};
