import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BLUE_ARROW } from "../../assets/svg/paths";
// import InputFlow from "../InputFlow";

const SelectorInput: React.FC<Props> = ({ title }) => {
  // const [type, setType] = useState({ type });
  // const [text, setText] = useState(title);
  const [isActive, setIsActive] = useState<boolean>(false);
  const setActiveSelect = (text: string) => {
    // onSelect({ type: text });
    // setIsActive(text);
  };
  const onSelect = (text: string) => {
    // setText(text);
  };

  const focusInput = () => {
    const input = document.getElementById("Input");
    input!.focus();
  };

  return (
    <Container onClick={focusInput}>
      <Input
        id="Input"
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        placeholder={title}
      ></Input>

      <Span $isActive={isActive}>
        <Svg width="16" height="9" viewBox="0 0 16 9">
          <Path fill="#48BBFF" fill-rule="nonzero" d={BLUE_ARROW}></Path>
        </Svg>
      </Span>
    </Container>
  );
};

const Input = styled.input`
  display: block;
  width: 66px;
  font-size: 16px;
  line-height: 19px;
  min-height: 38px;
  font-weight: 400;
  color: #788b99;

  border: none;
  outline: none;

  -webkit-transition: width 0.5s;
  transition: width 0.5s;
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  text-align: start;
  appearance: auto;
  cursor: text;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;

  &:focus {
    width: 180px;
    background-color: white;
    border-bottom: 1px solid #48bbff;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  font-size: 16px;
  line-height: 1.19;
  background-color: transparent;
  padding-right: 22px;
  /* width: 100%; */
  border: none;

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
const Span = styled.span<{ $isActive: boolean }>`
  display: flex;
  margin-left: 6px;
  margin-top: 6px;
  width: 16px;
  transform: ${(props) => (props.$isActive ? "rotate(180deg)" : "none")};
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

export default SelectorInput;

type Props = {
  title: string;
};
