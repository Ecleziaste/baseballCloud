import React, { useState } from "react";
import styled from "styled-components";
import { BLUE_ARROW } from "../../../../../assets/svg/paths";
import Dropdown from "../../../../../components/Dropdown";
import { FieldRenderProps } from "react-final-form";
import { Options } from "../../../../../Types";
import { v4 as uuidv4 } from "uuid";

const EditSelector: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  title,
  options,
  defaultTitle,
  handleSelect,
}) => {
  const buttonId = uuidv4();
  const [text, setText] = useState(title);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSelect = (value: string) => {
    setText(value);
    blurButton();
  };

  const blurButton = () => {
    const button = document.getElementById(buttonId);
    button!.blur();
  };

  return (
    <Container
      id={buttonId}
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <Label $isActive={isActive}>{title}</Label>
      {text}

      {isActive && (
        <Dropdown
          onSelect={onSelect}
          options={options}
          handleSelect={handleSelect}
        ></Dropdown>
      )}

      <Span $isActive={isActive}>
        <Svg width="16" height="9" viewBox="0 0 16 9">
          <Path fill="#909497" fill-rule="nonzero" d={BLUE_ARROW}></Path>
        </Svg>
      </Span>
    </Container>
  );
};

const Label = styled.label<{ $isActive: boolean }>`
  display: ${(props) => (props.$isActive ? "block" : "none")};
  position: absolute;
  top: 2px;
  left: 6px;
  font-size: 10px;
  color: #667784;
  transform: none;
  translate: none;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;
const Container = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: none;
  text-align: left;
  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid #48bbff;
  }
  &:after {
    content: url(${BLUE_ARROW});
    position: relative;
    right: -10px;
    top: -2px;
  }
  &:focus ~ ${Label} {
    display: flex;
    position: absolute;
    top: 2px;
    left: 6px;
    font-size: 10px;
    color: #667784;
    transform: none;
    translate: none;
    cursor: pointer;
    &:hover {
      color: #48bbff;
      text-decoration: underline;
    }
  }
`;
const Span = styled.span<{ $isActive: boolean }>`
  display: flex;
  position: absolute;
  top: 46%;
  right: 6px;
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
  fill: rgb(117, 120, 122);
  fill-rule: nonzero;
`;

export default EditSelector;

type Props = {
  title: string;
  options: Array<Options>;
  defaultTitle?: string;
  handleSelect: (fieldName: any, value: any) => void;
};
