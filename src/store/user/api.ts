import { AxiosPromise } from "axios";
import { http } from "../../services/http";
import { Headers, User } from "./slice";
import { SignUpParams, SignInParams } from "./actions";
// это норм? импорт типов из экшн

export const signUpApi = (
  payload: SignUpParams
): AxiosPromise<{
  // FIXME:
  status: string;
  data: User;
  headers: Headers;
}> => {
  return http.post("/auth", payload);
};

export const signInApi = (
  payload: SignInParams
): AxiosPromise<{
  data: User;
  headers: Headers;
}> => {
  return http.post("/auth/sign_in", payload);
};
