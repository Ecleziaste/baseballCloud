import React, { useState } from "react";
import styled from "styled-components";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import AppLayout from "../../../layouts";
import GuestLayout from "../../../layouts/GuestLayout";

const ForgotPassForm: React.FC<Props> = () => {
  const [emailError, emailErrorSet] = useState<null | boolean>(null);

  const onSubmit = (value: Values) => {
    if (!value.email) {
      emailErrorSet(true);
    } else emailErrorSet(null);
    console.log("value", value);
  };

  return (
    <AppLayout>
      <GuestLayout>
        <Container>
          <FormWrapper>
            <FormHeader>
              <Title>Forgot Password</Title>
              <Text>
                Please enter your email address. You will receive a link to
                reset your password via email.
              </Text>
            </FormHeader>
            <FormContainer>
              <Form
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
                        // validate={undefined}
                        value={"undefined"}
                        name="email"
                        type="email"
                        component={InputField}
                        placeholder="Email"
                      />
                      {emailError && <ValidationText>Required</ValidationText>}
                    </FieldContainer>

                    <ButtonMain
                      text="Submit"
                      handleClick={handleSubmit}
                    ></ButtonMain>
                  </FormContainer>
                )}
              />
            </FormContainer>

            <FormFooter>
              <Question>Remembered password?</Question>
              <SignUpLink to="login">Sign In</SignUpLink>
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
  flex-flow: column nowrap;
  position: relative;
  max-width: 100%;
  margin-bottom: 15px;
`;
const ValidationText = styled.div`
  display: flex;
  margin-top: 8px;
  color: #f05f62;
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

export default ForgotPassForm;

type Props = {};
type Values = { email: string | {} };
