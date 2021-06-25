import React, { useEffect } from "react";
import GuestRouter from "./GuestRouter";
import UserRouter from "./UserRouter";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

const AppRouter: React.FC<Props> = () => {
  const user = useSelector(selectUser);
  useEffect(() => {}, [user]);

  return <Switch>{user ? <UserRouter /> : <GuestRouter />}</Switch>;
};

export default AppRouter;

type Props = {};
