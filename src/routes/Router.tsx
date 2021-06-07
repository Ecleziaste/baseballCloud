import React from "react";
import GuestRouter from "./GuestRouter";
import UserRouter from "./UserRouter";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

const AppRouter: React.FC<Props> = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Route path="/">{user ? <UserRouter /> : <GuestRouter />}</Route>;
      <Redirect to={user ? "/profile" : "/login"}></Redirect>
    </>
  );
};

export default AppRouter;

type Props = {};
