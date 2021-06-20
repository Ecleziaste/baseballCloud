import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer as reducer } from "./ducks";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authMiddleware } from "./authMidleware";
import { signOut } from "./user/actions";

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth.headers"],
  // сохраянет sign in при обновлении страницы
};

export const rootReducer = (state: any, action: any) => {
  let nextState = state;
  if (action.type === signOut.type) {
    // @ts-ignore
    nextState = undefined;
  }
  return reducer(nextState, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authMiddleware),
});
const persistor = persistStore(store);

export { store, persistor };
