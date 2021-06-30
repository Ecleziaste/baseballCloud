import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer as reducer } from "./ducks";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authMiddleware } from "./authMiddleware";
import { signOut } from "./user/actions";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

const persistConfig = {
  key: "root",
  storage,
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
