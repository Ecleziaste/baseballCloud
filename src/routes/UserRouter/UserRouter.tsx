import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import Player from "./Player";
import Network from "./Network";
import Leaderboard from "./Leaderboard";

const UserRouter: React.FC<Props> = () => {
  return (
    <>
      <Redirect to="/profile" />
      <Switch>
        <Route component={Profile} exact path="/profile" />
        <Route component={Leaderboard} path="/leaderboard" />
        <Route component={Network} path="/network" />
        <Route component={Player} path={`/profile/`} />
      </Switch>
    </>
  );
};

export default UserRouter;

type Props = {};
