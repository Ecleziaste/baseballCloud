import React from "react";
import styled from "styled-components";

const DropdownSimple: React.FC<Props> = ({
  width,
  height,
  children,
  refer,
  // options,
  // onSelect,
  // type,
}) => {
  return (
    <DropdownMenu width={width} height={height} ref={refer}>
      {children}
      {/* {options.map(o => {
        return <Text onClick(() => onSelect({type: type,  text: '123213'}))>{o}</Text>
      })} */}
    </DropdownMenu>
  );
};

// const options = ['123', '123']
// const onSelect = (text) => void

const DropdownMenu = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-flow: column nowrap;
  width: ${(props) => props.width};
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
  height: ${(props) => props.height};
  overflow: ${(props) => {
    if (props.height === "188px") {
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

export default DropdownSimple;

type Props = {
  width: string;
  height: string;
  refer?: React.RefObject<HTMLDivElement>;
};
