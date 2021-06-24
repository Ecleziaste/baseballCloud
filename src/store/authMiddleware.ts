import { AnyAction, Dispatch } from "redux";
import { REHYDRATE } from "redux-persist";
import { http } from "../services/http";
import { signUp, signIn } from "../store/user/actions";
import { setProfiles, updateFavoriteProfile } from "../store/profiles/actions";

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (action.type === signUp.fulfilled.type) {
      action.payload?.headers &&
        http.setAuthorizationHeader(action.payload.headers);
    }
    if (action.type === signIn.fulfilled.type) {
      action.payload?.headers &&
        http.setAuthorizationHeader(action.payload.headers);
    }
    if (action.type === REHYDRATE) {
      action.payload?.user?.token &&
        http.setAuthorizationHeader(action.payload.user.token);
    }

    // if (action.type === setProfiles.fulfilled.type) {

    //   http.setAuthorizationHeader();
    // }
    // if (action.type === updateFavoriteProfile.fulfilled.type) {

    //   http.setAuthorizationHeader();
    // }

    return next(action);
  };
