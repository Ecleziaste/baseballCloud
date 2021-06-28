import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPassForm from "./ForgotPassForm";
import { Route, Redirect, Switch } from "react-router-dom";

const GuestRouter: React.FC<Props> = () => {
  return (
    <>
      <Route component={SignInForm} path="/login" />
      <Route component={SignUpForm} path="/registration" />
      <Route component={ForgotPassForm} path="/forgotpassword" />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </>
  );
};

export default GuestRouter;

type Props = {};
