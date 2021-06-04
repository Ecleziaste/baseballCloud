import React, { useState } from "react";
import styled from "styled-components";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import AppLayout from "../../../layouts";
import GuestLayout from "../../../layouts/GuestLayout";
import { useDispatch } from "react-redux";
import { signIn } from "../../../store/user/actions";
import { setCurrentProfile } from "../../../store/current_profile/actions";

const SignInForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [emailError, emailErrorSet] = useState<null | boolean>(null);

  const onSubmit = async (value: any) => {
    if (!value.email || !value.password) {
      emailErrorSet(true);
    } else {
      emailErrorSet(null);
      await dispatch(signIn(value));
      dispatch(setCurrentProfile({}));
      // await dispatch(setCurrentProfile({}));
    }
  };

  return (
    <AppLayout>
      <GuestLayout>
        <Container>
          <FormWrapper>
            <FormHeader>
              <Title>Welcome to BaseballCloud!</Title>
              <Text>Sign into your account here:</Text>
            </FormHeader>

            <Form
              initialValues={{
                email: "test@example.com",
                password: "12345678",
              }}
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <FormContainer>
                  <FieldContainer>
                    <FieldIcon>
                      <UserIcon
                        className="fa fa-user"
                        aria-hidden="true"
                      ></UserIcon>
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
                      <LockIcon
                        className="fa fa-lock"
                        aria-hidden="true"
                      ></LockIcon>
                    </FieldIcon>
                    <Field
                      name="password"
                      type="password"
                      component={InputField}
                      placeholder="Password"
                      secure
                    />
                  </FieldContainer>
                  {emailError && (
                    <ValidationText>
                      Invalid login credentials. Please try again.
                    </ValidationText>
                  )}
                  <ButtonMain
                    text="Sign in"
                    handleClick={handleSubmit}
                  ></ButtonMain>
                </FormContainer>
              )}
            />

            <Forgot>
              <ForgotLink to="forgotpassword">Forgotten password?</ForgotLink>
            </Forgot>

            <FormFooter>
              <Question>Don’t have an account?</Question>
              <SignUpLink to="registration">Sign Up</SignUpLink>
            </FormFooter>
          </FormWrapper>
        </Container>
      </GuestLayout>
    </AppLayout>
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
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;
const ValidationText = styled.div`
  display: flex;
  color: #f05f62;
  margin-bottom: 2px;
`;
const FieldIcon = styled.span`
  display: flex;
  position: absolute;
  top: 15px;
  left: 17px;
  color: #667784;
`;
const UserIcon = styled.i`
  &:before {
    content: "\f007";
  }
`;
const LockIcon = styled.i`
  &:before {
    content: "\f023";
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
  backdrop-filter: blur(5px);
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
const FormContainer = styled.form`
  display: flex;
  max-width: 100%;
  flex-flow: column nowrap;
`;
const Forgot = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
const ForgotLink = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #204b70;
  }
`;
const FormFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const Question = styled.div`
  font-size: 16px;
  color: #667784;
`;
const SignUpLink = styled(Link)`
  color: #48bbff;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  cursor: pointer;
  margin-left: 4px;
`;

export default SignInForm;

type Props = {};
