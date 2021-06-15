import React, { useState } from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputProfile: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  title,
  input,
  fieldName,
  handleSelect,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleInput = (text: string) => {
    handleSelect(fieldName, text);
  };

  return (
    <Container>
      <TextArea
        {...input}
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onInput={(e) => handleInput(e.currentTarget.value)}
        placeholder={title}
      />
      <Label $isActive={isActive}>{title}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
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
const TextArea = styled.textarea`
  width: 100%;
  height: 110px;
  padding: 11px 16px;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: none;
  resize: none;
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #48bbff;
  }
`;

export default InputProfile;

type Props = {
  title: string;
  fieldName: string;
  handleSelect: (fieldName: any, value: any) => void;
};
