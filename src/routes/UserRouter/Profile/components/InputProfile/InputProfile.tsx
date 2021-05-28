import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputProfile: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  value,
  secure,
}) => {
  return (
    <Input
      // onEndEditing={() => input.onChange("")}
      {...input}
      value={value || undefined}
      placeholder={placeholder}
      secureTextEntry={secure}
    />
  );
};

const Input = styled.input`
  /* display: block; */
  width: 100%;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: none;
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #48bbff;
  }
`;

export default InputProfile;

type Props = {
  placeholder: string;
  input: any;
  value: string;
  secure?: boolean;
};
