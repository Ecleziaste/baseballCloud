import { http } from "../../services/http";
import { ProfilesSelects, Favorite } from "../../Types";

export const profilesApi = (payload: ProfilesSelects) =>
  http.post(`/graphql`, getProfiles(payload));

const getProfiles = (data: ProfilesSelects) => {
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

export const favoriteProfileApi = (payload: Favorite) =>
  http.post(`/graphql`, updateFavoriteProfile(payload));

const updateFavoriteProfile = (data: Favorite) => {
  const query = {
    variables: { form: data },
    query: `mutation UpdateFavoriteProfile($form:UpdateFavoriteProfileInput!) {
      update_favorite_profile(input: $form) {
        favorite
      }
    }`,
  };
  return query;
};
