import React from "react";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPassForm from "./ForgotPassForm";
import MAIN_SRC from "../../assets/images/main.png";
import { Switch, Route, Redirect } from "react-router-dom";

const GuestRouter: React.FC<Props> = () => {
  return (
    <Container>
      <Redirect to="/login" />
      <Switch>
        <Route component={SignInForm} exact path="/login" />
        <Route component={SignUpForm} path="/registration" />
        <Route component={ForgotPassForm} path="/forgotpassword" />
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  /* height: calc(100vh - 40px); */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-image: url(${MAIN_SRC});
  background-position: top center;
  background-size: cover;
  overflow: hidden;
`;

export default GuestRouter;

type Props = {};
