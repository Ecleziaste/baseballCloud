import React, { useState } from "react";
import styled from "styled-components";
import ButtonMain from "../../../components/ButtonMain";
import InputField from "../../../components/InputField";
import { Form, Field } from "react-final-form";
import { CHECK_SVG } from "../../../assets/svg/paths";
import { Link } from "react-router-dom";
import AppLayout from "../../../layouts";
import GuestLayout from "../../../layouts/GuestLayout";
import { signUp } from "../../../store/user/actions";
import { FORM_ERROR } from "final-form";
import { setCurrentProfile } from "../../../store/current_profile/actions";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../store";
import {
  regexpEmail,
  noSpaces,
  required,
  minValue,
  composeValidators,
} from "../../../utils";

const textPlayers =
  " Players have their own profile within the system and plan on having data collected.";
const textScouts =
  "Coaches and scouts can view players in the system but do not have their own profile.";

const SignUpForm: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [btnPress, setBtnPress] = useState(true);
  const [title, setTitle] = useState("Players");
  const [text, setText] = useState(textPlayers);
  const [role, setRole] = useState<string>("player");
  const handleLeftBtnClick = () => {
    setBtnPress(true);
    setTitle("Players");
    setText(textPlayers);
    setRole("player");
  };
  const handleRightBtnClick = () => {
    setBtnPress(false);
    setTitle("Scouts");
    setText(textScouts);
    setRole("scout");
  };

  const onSubmit = async (value: Values) => {
    if (value.password !== value.password_confirmation) {
      return { [FORM_ERROR]: "Passwords are not equal." };
    }
    try {
      const action = await dispatch(signUp({ role, ...value }));
      unwrapResult(action);
      await dispatch(setCurrentProfile({}));
    } catch (e) {
      if (Array.isArray(e.full_messages)) {
        return {
          [FORM_ERROR]: e.full_messages[0],
        };
      }
      return {
        [FORM_ERROR]: e.full_messages,
      };
    }
  };

  return (
    <AppLayout>
      <GuestLayout>
        <Container>
          <FormWrapper>
            <Form
              initialValues={{
                email: "",
                password: "",
                password_confirmation: "",
              }}
              onSubmit={onSubmit}
              render={({ handleSubmit, submitError }) => (
                <FormContainer>
                  <BtnsWrapper>
                    <BtnLeft isActive={btnPress} onClick={handleLeftBtnClick}>
                      <BtnIcon>
                        {btnPress && (
                          <Svg width="14" height="15" viewBox="0 0 14 15">
                            <Path fill="#FFF" d={CHECK_SVG}></Path>
                          </Svg>
                        )}
                      </BtnIcon>
                      Sign Up as Player
                    </BtnLeft>
                    <BtnRight
                      isActive={!btnPress}
                      onClick={handleRightBtnClick}
                    >
                      <BtnIcon>
                        {!btnPress && (
                          <Svg width="14" height="15" viewBox="0 0 14 15">
                            <Path fill="#FFF" d={CHECK_SVG}></Path>
                          </Svg>
                        )}
                      </BtnIcon>
                      &nbsp;Sign Up as Scout
                    </BtnRight>
                  </BtnsWrapper>

                  <FormHeader>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                  </FormHeader>
                  <FieldContainer>
                    <FieldIcon>
                      <UserIcon
                        className="fa fa-user"
                        aria-hidden="true"
                      ></UserIcon>
                    </FieldIcon>
                    <Field
                      validate={composeValidators(required, regexpEmail)}
                      name="email"
                      type="email"
                      component={InputField}
                      placeholder="Email"
                    />
                    {submitError && (
                      <ValidationText>{submitError}</ValidationText>
                    )}
                  </FieldContainer>
                  <FieldContainer>
                    <FieldIcon>
                      <LockIcon className="fa fa-lock"></LockIcon>
                    </FieldIcon>
                    <Field
                      validate={composeValidators(
                        required,
                        minValue(8),
                        noSpaces
                      )}
                      name="password"
                      type="password"
                      component={InputField}
                      placeholder="Password"
                      secure
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <FieldIcon>
                      <CheckIcon
                        className="fa fa-check"
                        aria-hidden="true"
                      ></CheckIcon>
                    </FieldIcon>
                    <Field
                      validate={composeValidators(
                        required,
                        minValue(8),
                        noSpaces
                      )}
                      name="password_confirmation"
                      type="password"
                      component={InputField}
                      placeholder="Confirm Password"
                      secure
                    />
                  </FieldContainer>

                  <FormText>
                    By clicking Sign Up, you agree to our
                    <span>
                      <FormLink>&nbsp;Terms of Service</FormLink>
                    </span>
                    &nbsp;and&nbsp;
                    <span>
                      <FormLink>Privacy Policy</FormLink>
                    </span>
                    .
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
              <SignUpLink to="login">Sign In</SignUpLink>
            </FormFooter>
          </FormWrapper>
        </Container>
      </GuestLayout>
    </AppLayout>
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: baseline;
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
const CheckIcon = styled.i`
  &:before {
    content: "\f00c";
  }
`;
const Container = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 16px;
`;
const BtnsWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const BtnLeft = styled.button<{ isActive: boolean }>`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 15px 5px 17px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.13;
  border: solid 1px #35c32a;
  background-color: ${(props) => (props.isActive ? "#35c32a" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#35c32a")};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  &:hover {
    background-color: #35c32a;
    color: #fff;
  }
`;
const BtnRight = styled(BtnLeft)<{ isActive: boolean }>`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const BtnIcon = styled.span`
  margin-right: 6px;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const Path = styled.path``;
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
  font-size: 36px;
  font-weight: 600;
  line-height: 0.78;
  text-align: center;
  color: #fff;
  margin-bottom: 21px;
`;
const Text = styled.div`
  line-height: 1.25;
  font-weight: 400;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;
const FormContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-flow: column nowrap;
`;
const FormText = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
`;
const FormLink = styled.a`
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
export default SignUpForm;

type Props = {};
type Values = {
  email: string;
  password: string;
  password_confirmation: string;
};
