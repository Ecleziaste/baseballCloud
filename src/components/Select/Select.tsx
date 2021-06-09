import React, { useState } from "react";
import styled from "styled-components";
import { BLUE_ARROW } from "../../assets/svg/paths";

const Select: React.FC<Props> = ({ children, onSelect, type }) => {
  const [isActive, setIsActive] = useState(false);
  const setActiceSelect = (text: string) => {
    onSelect({type: text})
    setIsActive(text)

  }
  return (
    <Container onClick={() => setIsActive(!isActive)} onSelect={setActiceSelect}>
      {isActive && { children }}

      <Span $changeRotation={isActive}>
        <Svg width="16" height="9" viewBox="0 0 16 9">
          <Path fill="#48BBFF" fill-rule="nonzero" d={BLUE_ARROW}></Path>
        </Svg>
      </Span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 0;
  font-size: 16px;
  line-height: 1.19;
  color: #48bbff;
  white-space: nowrap;
  cursor: pointer;
  &:after {
    content: url(${BLUE_ARROW});
    position: relative;
    right: -10px;
    top: -2px;
  }
`;
const Span = styled.span<{ $changeRotation: boolean }>`
  display: flex;
  margin-left: 6px;
  margin-top: 6px;
  width: 16px;
  transform: ${(props) => (props.$changeRotation ? "rotate(180deg)" : "none")};
  height: 9px;
  font-size: 16px;
  line-height: 1.19;
  color: #48bbff;
  white-space: nowrap;
  font-weight: 400;
`;
const Svg = styled.svg`
  padding: 0;
  fill: currentColor;
  width: 16;
  height: 9;
  overflow: hidden;
`;
const Path = styled.path`
  fill: rgb(72, 187, 255);
  fill-rule: nonzero;
`;

export default Select;

type Props = { isActive: boolean; children: string };
