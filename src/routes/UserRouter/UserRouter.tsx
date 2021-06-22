import React from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import Player from "./Player";
import Network from "./Network";
import Leaderboard from "./Leaderboard";

const UserRouter: React.FC<Props> = () => {
  return (
    <>
      <Route component={Profile} path="/profile" />
      <Route component={Leaderboard} path="/leaderboard" />
      <Route component={Network} path="/network" />
      {/* <Route component={Profile} path="profile/:id" /> */}

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
      {/* <Route exact path="/" render={() => <Redirect from="/" to="/profile" />} /> */}

    </>
  );
};

export default UserRouter;

type Props = {};
