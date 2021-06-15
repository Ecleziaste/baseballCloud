import React, { useState } from "react";
import styled from "styled-components";
import { BLUE_ARROW } from "../../assets/svg/paths";
import Dropdown from "../Dropdown";
import { FieldRenderProps } from "react-final-form";
import { Options } from "../../Types";

const Selector: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  title,
  options,
  defaultTitle,
  handleSelect,
}) => {
  const [text, setText] = useState(title);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSelect = (value: string) => {
    let newValue = "";
    switch (value) {
      case "10":
      case "15":
      case "25":
        newValue = `Show: ${value}`;
        break;
      case "All":
        newValue = defaultTitle!;
        break;
      case "Last Week":
        newValue = "Date (Last Week)";
        break;
      case "Last Month":
        newValue = "Date (Last Month)";
        break;
      default:
        newValue = value;
        break;
    }
    setText(newValue);
  };

  return (
    <Container
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {text}
      {isActive && (
        <Dropdown
          // handleClick={setIsActive(!isActive)}
          onSelect={onSelect}
          options={options}
          handleSelect={handleSelect}
        ></Dropdown>
      )}

      <Span $isActive={isActive}>
        <Svg width="16" height="9" viewBox="0 0 16 9">
          <Path fill="#48BBFF" fill-rule="nonzero" d={BLUE_ARROW}></Path>
        </Svg>
      </Span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  position: relative;
  font-size: 16px;
  line-height: 1.19;
  background-color: transparent;
  padding-right: 22px;
  max-width: 100%;
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

export default Selector;

type Props = {
  title: string;
  options: Array<Options>;
  defaultTitle?: string;
  handleSelect: (fieldName: any, value: any) => void;
};
