import React from "react";
import styled from "styled-components";
import SignInForm from "./SignInForm";

const SignInScreen: React.FC<Props> = () => {
  return (
    <Container>
      <InnerContainer>
        <SignInForm></SignInForm>
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

export default SignInScreen;

type Props = {};
