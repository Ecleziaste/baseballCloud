import React from "react";
import GuestRouter from "./GuestRouter";
import UserRouter from "./UserRouter";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
const AppRouter: React.FC<Props> = ({ children }) => {
  const user = useSelector(selectUser);

  return <Switch>{user ? <UserRouter /> : <GuestRouter />}</Switch>;
};

export default AppRouter;

type Props = {};
