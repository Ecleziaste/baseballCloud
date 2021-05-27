import React from "react";
import styled from "styled-components";

const TabBtn: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Button>{text}</Button>
    </div>
  );
};

const Button = styled.div`
  padding: 8px;
  margin: 8px;
  border: 2px solid #788b99;
  border-radius: 40px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  /* background: #788b99; */
  background: #fff;
  /* color: #fff; */
  color: #667784;
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

type Props = { text: string };
