import { http } from "../../services/http";

export const facilitiesApi = (payload: string) =>
  http.post(`/graphql`, createQuery(payload));

const createQuery = (data: string) => {
  const query = {
    variables: { search: data },

    query: `query Facilities($search:String!)
    { facilities(search: $search) {
      facilities {
        id
        email
        u_name
      }
    }
    }`,
  };
  return query;
};
