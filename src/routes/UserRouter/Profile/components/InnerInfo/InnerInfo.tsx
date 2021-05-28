import React from "react";
import styled from "styled-components";

const InnerInfo: React.FC<Props> = ({ title, text }) => {
  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  color: #667784;
  margin-bottom: 3px;
  text-align: left;
`;
const Text = styled.div`
  font-size: 16px;
  color: #667784;
  word-wrap: break-word;
  margin-bottom: 11px;
`;

export default InnerInfo;

type Props = { title: string; text: string };
