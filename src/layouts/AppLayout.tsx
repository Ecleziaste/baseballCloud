import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Content>{children}</Content>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;
`;
const HeaderWrapper = styled.div`
  width: 100%;
`;
const FooterWrapper = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  overflow: hidden;
`;
// нужно скроллить картинку с формой при перекрывании хедером\футером

export default AppLayout;

type Props = {};
