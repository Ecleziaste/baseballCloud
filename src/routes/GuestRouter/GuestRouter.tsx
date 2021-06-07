import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPassForm from "./ForgotPassForm";
import { Switch, Route, Redirect } from "react-router-dom";

const GuestRouter: React.FC<Props> = () => {
  return (
    <>
      {/* <Redirect to="/login" /> */}
      <Switch>
        <Route component={SignInForm} exact path="/login" />
        <Route component={SignUpForm} path="/registration" />
        <Route component={ForgotPassForm} path="/forgotpassword" />
      </Switch>
    </>
  );
};

export default GuestRouter;

type Props = {};
