import React from "react";
import styled from "styled-components";

const SelectableText: React.FC<Props> = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.div`
  display: block;
  padding: 8px 16px;
  background: #fff;
  line-height: 1;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #ecf8ff;
  }
`;

export default SelectableText;

type Props = { text: string };
