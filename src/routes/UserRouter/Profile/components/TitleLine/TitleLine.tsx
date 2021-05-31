import React from "react";
import styled from "styled-components";

const Item: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TitleBox = styled.div`
  display: flex;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7ebef;
    z-index: 0;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #414f5a;
  text-align: left;
  display: inline-block;
  position: relative;
  z-index: 5;
  background-color: #ffffff;
  padding-right: 12px;
`;

export default Item;

type Props = { title: string };
