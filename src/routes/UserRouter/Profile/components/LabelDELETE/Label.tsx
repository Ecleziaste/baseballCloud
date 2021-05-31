import React from "react";
import styled from "styled-components";

const Item: React.FC<Props> = ({ text }) => {
  return <Container>{text}</Container>;
};

const Container = styled.label`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;

export default Item;

type Props = { text: string };
