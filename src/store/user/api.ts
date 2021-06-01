import { AxiosPromise } from "axios";
import { http } from "../../services/http";
import { User } from "./slice";

export const signUpApi = (payload: UserSignUp): AxiosPromise<User> => {
  return http.post("/auth/sign_up", payload);
};

export const signInApi = (payload: UserSignIn): AxiosPromise<User> => {
  return http.post("/auth/sign_in", payload);
};

type UserSignUp = {
  email: string;
  password: string;
  name: string;
};

type UserSignIn = {
  email: string;
  password: string;
};
