import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Options } from "../../Types";

const Dropdown: React.FC<Props> = ({
  options,
  onSelect,
  refer,
  handleSelect,
  renderElement,
}) => {
  return (
    <DropdownMenu options={options} ref={refer}>
      {renderElement && renderElement()}
      {options.map((o) => {
        return (
          <Option
            onClick={() => {
              onSelect(o.text);
              handleSelect(o.fieldName, o.payload);
            }}
            key={uuidv4()}
          >
            {o.text}
          </Option>
        );
      })}
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div<{ options: Array<Options> }>`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  min-width: 100%;
  position: absolute;
  top: 100%;
  right: -5px;
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  z-index: 100;
  height: ${(props) => {
    if (props.options.length > 3) {
      return "188px";
    }
    return "auto";
  }};
  overflow: ${(props) => {
    if (props.options.length > 3) {
      return "auto";
    }
    return "visible";
  }};
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    z-index: 2;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    right: 25px;
    z-index: 1;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent rgba(0, 0, 0, 0.15) transparent;
  }
`;
const Option = styled.option`
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

export default Dropdown;

type Props = {
  options: Array<Options>;
  onSelect: (value: string) => void;
  refer?: React.RefObject<HTMLDivElement>;
  handleSelect: (fieldName: any, value: any) => void;
  renderElement?: () => JSX.Element;
};
