import React, { useState } from "react";
import styled from "styled-components";
import { FieldRenderProps } from "react-final-form";
import { v4 as uuidv4 } from "uuid";

const EditInput: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  title,
  input,
  fieldName,
  handleSelect,
}) => {
  const inputId = uuidv4();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleInput = (text: string) => {
    handleSelect(fieldName, text);
  };

  return (
    <Container>
      <Label $isActive={isActive} htmlFor={inputId}>
        {title}
      </Label>
      <Input
        id={inputId}
        {...input}
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onInput={(e) => handleInput(e.currentTarget.value)}
        placeholder={title}
      ></Input>
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
const Input = styled.input`
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
    background-color: white;
    border: 1px solid #48bbff;
  }
`;
const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export default EditInput;

type Props = {
  title: string;
  fieldName: string;
  handleSelect: (fieldName: any, value: any) => void;
};
