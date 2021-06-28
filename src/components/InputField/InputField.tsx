import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputField: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  meta,
  value,
  secure,
}) => {
  return (
    <Root>
      <Input
        {...input}
        value={value || undefined}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
      {(meta.error || meta.submitError) && meta.touched && (
        <ValidationText>{meta.error || meta.submitError}</ValidationText>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Input = styled.input`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  height: 32px;
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

const ValidationText = styled.div`
  display: flex;
  color: #f05f62;
  margin-bottom: 2px;
`;
export default InputField;

type Props = {
  placeholder: string;
  input: any;
  value: string;
  secure?: boolean;
};
