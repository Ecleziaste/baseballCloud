import React from "react";
import styled from "styled-components";
import ButtonMain from "../ButtonMain";
import { Form, Field } from "react-final-form";

const SignInForm: React.FC<Props> = () => {
  return (
    <Container>
      <InnerContainer>
        <FormWrapper>
          <Greetings>
            <Welcome>Welcome to BaseballCloud!</Welcome>
            <SignIn>Sign into your account here:</SignIn>
          </Greetings>

          <form>
            <FieldBox></FieldBox>

            <FieldBox></FieldBox>

            <ButtonMain text="Sign in"></ButtonMain>
            <Forgot>
              <ForgotButton>Forgotten password?</ForgotButton>
            </Forgot>
          </form>

          <SignUpBox>
            <Question>Don’t have an account?</Question>
            <SignUpLink href="#">Sign Up</SignUpLink>
          </SignUpBox>
        </FormWrapper>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  /* grid-area: content; */
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-self: center;
  overflow: hidden;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  overflow: auto;
  padding: 16px;
`;
const FormWrapper = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  /* background-color: #cbcccd; */
  background-color: #e5dfe2;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
  backdrop-filter: blur(5px);
  width: 100%;
  max-width: 450px;
`;
const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;
const Welcome = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #667784;
  margin-bottom: 8px;
`;
const SignIn = styled.div`
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #667784;
  font-size: 16px;
`;
const FieldBox = styled.div`
  display: flex;
  /* flex: 1; */
  flex: 0 0 100%;
  justify-content: flex-start;
  flex-direction: row;
  height: 30px;
  margin-bottom: 15px;
  padding: 6px 12px 10px 37px;
  /* background-color: #b3d4fc; */
  color: #000;
  /* position: relative; */
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
  /* &:focus {
    background-color: #fcfcfc;
  } */
`;
const Forgot = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
const ForgotButton = styled.a`
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
`;
const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Question = styled.div`
  font-size: 16px;
  color: #667784;
`;
const SignUpLink = styled.a`
  color: #48bbff;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  cursor: pointer;
  margin-left: 4px;
`;
export default SignInForm;

type Props = {};
