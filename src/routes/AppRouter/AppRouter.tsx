import React from "react";
import GuestRouter from "../GuestRouter";
import UserRouter from "../UserRouter";
import { Route } from "react-router-dom";

const AppRouter: React.FC<Props> = ({ user }) => {
  return <Route path="/">{user ? <UserRouter /> : <GuestRouter />}</Route>;
};

export default AppRouter;

type Props = { user: any };
