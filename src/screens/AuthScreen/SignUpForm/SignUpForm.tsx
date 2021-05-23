import React from "react";
import styled from "styled-components";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import { Form, Field } from "react-final-form";

const SignUpForm: React.FC<Props> = () => {
  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  return (
    <Container>
      <FormWrapper>
        <div>
          <div></div>
          <div></div>
        </div>
        <FormHeader>
          <Title>Players</Title>
          <Text>
            Players have their own profile within the system and plan on having
            data collected.
          </Text>
        </FormHeader>

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <FormContainer>
              <Field
                name="email"
                type="email"
                component={InputField}
                placeholder="Email"
              />
              <Field
                name="password"
                type="password"
                component={InputField}
                placeholder="Password"
                secure
              />
              <Field
                name="confirm"
                type="password"
                component={InputField}
                placeholder="Confirm Password"
                secure
              />
              <FormText>
                By clicking Sign Up, you agree to our
                <span>
                  <FormLink>&nbsp;Terms of Service</FormLink>
                </span>
                &nbsp;and
                <span>
                  <FormLink>&nbsp;Privacy Policy.</FormLink>
                </span>
              </FormText>
              <ButtonMain
                text="Sign Up"
                handleClick={handleSubmit}
              ></ButtonMain>
            </FormContainer>
          )}
        />

        <FormFooter>
          <Question>Already registered?</Question>
          <SignUpLink href="#">Sign In</SignUpLink>
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
  background: #48bbff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin-bottom: 8px;
`;
const Text = styled.div`
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
const FormContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-flow: column nowrap;
`;
const FormText = styled.div`
  max-width: 100%;
  /* display: block; */
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;
const FormLink = styled.a`
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
export default SignUpForm;

type Props = {};
