import React from "react";
import styled from "styled-components";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import { Form, Field } from "react-final-form";

const SignInForm: React.FC<Props> = () => {
  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  return (
    <Container>
      <FormWrapper>
        <FormHeader>
          <Title>Welcome to BaseballCloud!</Title>
          <Text>Sign into your account here:</Text>
        </FormHeader>

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <FormContainer>
              <FieldContainer>
                <FieldIcon>
                  <Icon className="fas fa-check" aria-hidden="true"></Icon>
                </FieldIcon>
                <Field
                  name="email"
                  type="email"
                  component={InputField}
                  placeholder="Email"
                />
              </FieldContainer>
              <FieldContainer>
                <FieldIcon>
                  <Icon className="fas fa-check" aria-hidden="true"></Icon>
                </FieldIcon>
                <Field
                  name="password"
                  type="password"
                  component={InputField}
                  placeholder="Password"
                />
              </FieldContainer>

              <ButtonMain
                text="Sign in"
                handleClick={handleSubmit}
              ></ButtonMain>
            </FormContainer>
          )}
        />

        <Forgot>
          <ForgotLink>Forgotten password?</ForgotLink>
        </Forgot>

        <FormFooter>
          <Question>Don’t have an account?</Question>
          <SignUpLink href="#">Sign Up</SignUpLink>
        </FormFooter>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 16px;
`;
const FieldContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  margin-bottom: 15px;
`;
const FieldIcon = styled.span`
  display: flex;
  position: absolute;
  top: 10px;
  left: 17px;
  color: #667784;
`;
const Icon = styled.i`
  &:before {
    content: "\f007";
  }
`;
const FormWrapper = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
  backdrop-filter: blur(5px);
  width: 100%;
  max-width: 450px;
`;
const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #667784;
  margin-bottom: 8px;
`;
const Text = styled.div`
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #667784;
  font-size: 16px;
`;
const FormContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-flow: column nowrap;
`;
const Forgot = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
const ForgotLink = styled.a`
  cursor: pointer;
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
`;
const FormFooter = styled.div`
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
