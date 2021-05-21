import React from "react";
import AuthScreen from "./screens/AuthScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

import "./App.css";

const App = () => {
  const user = true;

  return (
    <div>
      <HeaderWrapper>
        <Header user={user}></Header>
      </HeaderWrapper>
      {/* <MainContent> */}
      <AuthScreen></AuthScreen>
      {/* </MainContent> */}
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </div>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;
const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
const MainContent = styled.div`
  width: 100%;
  display: flex;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
`;

export default App;
