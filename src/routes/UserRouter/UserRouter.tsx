import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Profile from "./Profile";
import Network from "./Network";
import Leaderboard from "./Leaderboard";

const UserRouter: React.FC<Props> = () => {
  <Redirect to="/profile" />;

  return (
    <>
      <Route exact component={Profile} path="/profile" key={"profile"} />
      <Route component={Profile} path="/profile/:id" key={"profile with id"} />
      <Route component={Leaderboard} path="/leaderboard" />
      <Route component={Network} path="/network" />

      <Route
        exact
        path="/login"
        render={() => <Redirect from="/login" to="/profile" />}
      />
      <Route
        exact
        path="/registration"
        render={() => <Redirect from="/registration" to="/profile" />}
      />
      <Route
        exact
        path="/"
        render={() => <Redirect from="/" to="/profile" />}
      />
    </>
  );
};

export default UserRouter;

type Props = {};
