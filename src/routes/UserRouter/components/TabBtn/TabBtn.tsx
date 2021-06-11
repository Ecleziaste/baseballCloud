import React from "react";
import styled from "styled-components";

const TabBtn: React.FC<Props> = ({ onClick, isActive, text }) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ isActive: boolean }>`
  padding: 8px;
  margin: 8px;
  border: 2px solid #788b99;
  border-radius: 40px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  background: ${(props) => (props.isActive ? "#788b99" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#788b99")};
  position: relative;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #c9d0d6;
  }
`;

export default TabBtn;

type Props = { onClick?: () => void; isActive: boolean; text: string };
