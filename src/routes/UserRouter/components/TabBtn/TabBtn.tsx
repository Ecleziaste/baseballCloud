import React from "react";
import styled from "styled-components";

const TabBtn: React.FC<Props> = ({ isActive, text }) => {
  return (
    <div>
      <Button isActive={isActive}>{text}</Button>
    </div>
  );
};

const Button = styled.div<{ isActive: boolean }>`
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

type Props = { isActive: boolean; text: string };
