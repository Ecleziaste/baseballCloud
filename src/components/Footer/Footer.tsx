import React from "react";
import styled from "styled-components";

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <Legal>
        <Span>© 2018 BaseballCloud</Span>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Privacy Policy</Link>
      </Legal>
      <SocialMedia>
        <Link href="#">Blog</Link>
        <Link href="#">Twitter</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Facebook</Link>
      </SocialMedia>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
`;
const Legal = styled.div``;
const SocialMedia = styled.div``;
const Span = styled.span`
  padding-right: 10px;
`;
const Link = styled.a`
  padding: 0 8px;
  color: #337ab7;
  text-decoration: none;
`;

export default Footer;

type Props = {};
