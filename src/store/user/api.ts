import { AxiosPromise } from "axios";
import { http } from "../../services/http";
import { Headers, User } from "./slice";

export const signUpApi = (payload: UserSignUp): AxiosPromise<User> => {
  return http.post("/auth/sign_up", payload);
};

export const signInApi = (
  payload: UserSignIn
): AxiosPromise<{
  data: User;
  headers: Headers;
}> => {
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
