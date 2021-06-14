import React from "react";
import styled from "styled-components";
import { SEARCH_ICON } from "../../../../assets/svg/paths";
import { FieldRenderProps } from "react-final-form";

const SearchInput: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  fieldName,
  handleSelect,
}) => {
  const handleInput = (text: string) => {
    handleSelect(fieldName, text);
  };

  return (
    <Container>
      <Btn>
        <Span>
          <Svg width="16" height="16" viewBox="0 0 16 16">
            <Path fill="#48BBFF" fill-rule="nonzero" d={SEARCH_ICON}></Path>
          </Svg>
        </Span>
      </Btn>

      <Input
        {...input}
        placeholder={placeholder}
        onInput={(e) => handleInput(e.currentTarget.value)}
      ></Input>
    </Container>
  );
};

const Btn = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  position: absolute;
  top: 5px;
  left: 0;
  cursor: pointer;
`;
const Input = styled.input`
  display: block;
  outline: none;
  border: none;
  width: 100px;
  padding: 5px 5px 5px 33px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #788b99;
  border-bottom: 1px solid #48bbff;
  ::placeholder {
    color: #cccaca;
  }
`;
const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
`;
const Span = styled.span`
  display: flex;
  margin-left: 6px;
  margin-top: 2px;
  width: 16px;
  height: 9px;
  color: #48bbff;
  white-space: nowrap;
  font-weight: 400;
`;
const Svg = styled.svg`
  padding: 0;
  fill: currentColor;
  width: 16;
  height: 16;
  overflow: hidden;
`;
const Path = styled.path``;

export default SearchInput;

type Props = {
  placeholder: string;
  fieldName: string;
  handleSelect: (fieldName: any, value: any) => void;
};
