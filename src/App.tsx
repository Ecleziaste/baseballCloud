import React from "react";
import SignInScreen from "./navigation/SignInScreen";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import styled from "styled-components";

import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderWrapper>
        <Header></Header>
      </HeaderWrapper>
      <SignInScreen></SignInScreen>
      <FooterWrapper>{/* <Footer></Footer> */}</FooterWrapper>
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

export default App;
