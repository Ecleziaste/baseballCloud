import { http } from "../../services/http";

export const teamsApi = (payload: string) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: string) => {
  const query = {
    variables: { search: data },

    query: `query Teams($search:String!)
    { teams(search: $search) {
      teams {
        id
        name
      }
    }
    }`,
  };
  return query;
};
