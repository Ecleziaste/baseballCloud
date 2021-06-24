import React from "react";
import { Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import Network from "./Network";
import Leaderboard from "./Leaderboard";

const UserRouter: React.FC<Props> = () => {
  return (
    <>
      <Route component={Profile} path="/profile" />
      <Route component={Leaderboard} path="/leaderboard" />
      <Route component={Network} path="/network" />
      <Route exact component={Profile} path="/profile/:id" />

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

      {/* <Route
        exact
        path="profile/:id"
        render={() => (
          <Redirect from="profile/:id/leaderboard" to="/leaderboard" />
        )}
      />
      <Route
        exact
        path="profile/:id"
        render={() => <Redirect from="profile/:id/network" to="/network" />}
      /> */}

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
