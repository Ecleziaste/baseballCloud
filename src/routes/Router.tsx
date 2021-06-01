import React from "react";
import GuestRouter from "./GuestRouter";
import UserRouter from "./UserRouter";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

const AppRouter: React.FC<Props> = () => {
  const user = useSelector(selectUser);
  return <Route path="/">{user ? <UserRouter /> : <GuestRouter />}</Route>;
};

export default AppRouter;

type Props = {};
