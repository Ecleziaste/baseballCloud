import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const user = null;

  return (
    <MainContent>
      <HeaderWrapper>
        <Header user={user}></Header>
      </HeaderWrapper>
      <AppRouter user={user}></AppRouter>
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
