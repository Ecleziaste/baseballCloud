import { http } from "../../services/http";

export const schoolsApi = (payload: string) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: string) => {
  const query = {
    variables: { search: data },

    query: `query Schools($search:String!)
    { schools(search: $search) {
      schools {
        id
        name
      }
    }
    }`,
  };
  return query;
};
