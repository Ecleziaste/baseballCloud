import React from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import ForgotPassForm from "./ForgotPassForm";
import MAIN_SRC from "../../assets/images/main.png";

const SignInScreen: React.FC<Props> = () => {
  return (
    <Container>
      <SignUpForm></SignUpForm>
      <SignInForm></SignInForm>
      <ForgotPassForm></ForgotPassForm>
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
  /* background-color: #f84728; */
  background-position: top center;
  background-size: cover;

  overflow: auto;
`;

export default SignInScreen;

type Props = {};
