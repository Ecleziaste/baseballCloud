import { AxiosPromise } from "axios";
import { http } from "../../services/http";
import { CurrentProfile } from "./slice";

export const currentProfileApi = (
  payload: CurrentProfile
): AxiosPromise<setCurrentProfile> => {
  return http.post(`/graphql/${query}`, payload);
};

//  query: "{ current_profile (){  id  first_name  last_name  position  position2  avatar  throws_hand  bats_hand  biography  school_year  feet  inches  weight  age  school {    id    name  }  teams {    id    name  }  facilities {    id    email    u_name  }}}";

type setCurrentProfile = {
  // query: {
  current_profile: {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    position2: string;
    avatar: string;
    throws_hand: string;
    bats_hand: string;
    biography: string;
    school_year: string;
    feet: number;
    inches: number;
    weight: number;
    age: number;
    school: { id: number; name: string };
    teams: [{ id: number; name: string }];
    facilities: [{ id: number; email: string; u_name: string }];
  };
  // };
};

const query = `query: { current_profile (){  id  first_name  last_name  position  position2  avatar  throws_hand  bats_hand  biography  school_year  feet  inches  weight  age  school {    id    name  }  teams {    id    name  }  facilities {    id    email    u_name  }}}`;
// (${id})
// query myQuery($id: '1'){
//   user (id:$id){
//      firstName
//      lastName
//  }
// }
