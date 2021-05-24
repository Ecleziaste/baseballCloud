import React from "react";
import AuthScreen from "./screens/AuthScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const App = () => {
  const user = true;

  return (
    <MainContent>
      <HeaderWrapper>
        <Header user={user}></Header>
      </HeaderWrapper>
      <AuthScreen></AuthScreen>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  /* position: fixed;
  top: 0; */
`;
const FooterWrapper = styled.div`
  width: 100%;
`;

export default App;
