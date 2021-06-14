import React, { useState } from "react";
import styled from "styled-components";
import { BLUE_ARROW } from "../../assets/svg/paths";
import { FieldRenderProps } from "react-final-form";
import { v4 as uuidv4 } from "uuid";

const SelectorInput: React.FC<FieldRenderProps<string, HTMLElement> & Props> =
  ({ title, input, fieldName, handleSelect }) => {
    const inputId = uuidv4();
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleInput = (text: string) => {
      handleSelect(fieldName, text);
    };

    const focusInput = () => {
      const input = document.getElementById(inputId);
      input!.focus();
    };

    return (
      <Container onClick={focusInput}>
        <Input
          $isActive={isActive}
          id={inputId}
          {...input}
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          onInput={(e) => handleInput(e.currentTarget.value)}
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

const Input = styled.input<{ $isActive: boolean }>`
  display: block;
  width: 48px;
  font-size: 16px;
  line-height: 19px;
  min-height: 38px;
  font-weight: 400;
  color: #788b99;
  border: none;
  outline: none;
  -webkit-transition: width 0.5s ease 0s;
  transition: width 0.5s ease 0s;
  text-align: start;
  appearance: auto;
  cursor: text;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  &::placeholder {
    color: ${(prop) => (prop.$isActive ? "#788b99" : "#48bbff")};
  }
  &:focus {
    width: 180px;
    background-color: white;
    border-bottom: 1px solid #48bbff;
    color: #788b99;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  line-height: 1.19;
  background-color: transparent;
  padding-right: 10px;
  /* max-width: 100%; */
  border: none;
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
  margin-top: 2px;
  width: 16px;
  transform: ${(props) => (props.$isActive ? "rotate(180deg)" : "none")};
  height: 9px;
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
  fieldName: string;
  handleSelect: (fieldName: any, value: any) => void;
};
