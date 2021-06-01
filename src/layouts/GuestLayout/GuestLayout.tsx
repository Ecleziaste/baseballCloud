import React from "react";
import styled from "styled-components";
import MAIN_SRC from "../../assets/images/main.png";

const GuestLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 100%;
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

export default GuestLayout;

type Props = {};
