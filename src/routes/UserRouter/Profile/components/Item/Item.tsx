import React from "react";
import styled from "styled-components";

const Item: React.FC<Props> = ({ svg, text, value }) => {
  return (
    <div>
      <Container>
        <Image>{svg}</Image>
        <Text>{text}</Text>
        <Value>{value}</Value>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 0;
  justify-content: space-between;
`;
const Image = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const Text = styled.span`
  height: 24px;
  width: auto;
  margin-right: auto;
`;
const Value = styled.span`
  height: 24px;
`;

export default Item;

type Props = { svg: any; text: string; value: string };
