import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputProfile: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  input,
  val,
  secure,
}) => {
  const handleChange = (e: any): void => {
    // (e: React.ChangeEvent<HTMLInputElement>)

    console.log(e.target.value);
  };

  const labelText = "First Name *";

  return (
    <Container>
      <Input
        onChange={() => input.onChange(handleChange)}
        // onInput={() => input.onChange(handleChange)}
        {...input}
        // value={val}
        // defaultValue={val}
        type="text"
        placeholder={placeholder}
        secureTextEntry={secure}
      />
      <Label className="VisibleLabel">{labelText}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
`;
const Label = styled.label`
  display: none;
  position: absolute;
  width: 100%;
  /* z-index: 0; */
  top: 2px;
  left: 6px;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  text-align: center;
  /* margin-bottom: 0; */
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: transparent;
  cursor: pointer;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
  &:focus {
    font-size: 8px;
    color: #788b99;
    top: 2px;
    left: 6px;
  }
`;
const Input = styled.input`
  /* z-index: 1; */
  width: 100%;
  padding: 0 16px;
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
    font-size: 16px;
    &.Label {
      display: flex;
    }
  }
`;

export default InputProfile;

type Props = {
  placeholder: string;
  input: any;
  val: string;
  secure?: boolean;
};
