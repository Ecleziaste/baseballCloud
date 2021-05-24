import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputField: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  value,
  secure,
}) => {
  return (
    <Input
      // onEndEditing={() => input.onChange("")}
      value={value}
      placeholder={placeholder}
      {...input}
      secureTextEntry={secure}
    />
  );
};

const Input = styled.input`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  height: 30px;
  margin-bottom: 15px;
  padding: 6px 12px 10px 37px;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
  outline: none;
  &:focus {
    background-color: white;
    border: 1px solid #48bbff;
  }
`;

export default InputField;

type Props = {
  placeholder: string;
  input: any;
  value: string;
  secure?: boolean;
};
