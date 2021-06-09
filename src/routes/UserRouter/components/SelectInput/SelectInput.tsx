import React from "react";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const SelectInput: React.FC<FieldRenderProps<string, HTMLElement> & Props> = ({
  placeholder,
  // input,
  // value,
}) => {
  return (
    <Input
      // {...input}
      // value={value || undefined}
      placeholder={placeholder}
    />
  );
};

const Input = styled.input`
  display: block;
  width: 66px;
  padding: 5px 5px 7px 0;
  font-size: 16px;
  line-height: 19px;
  min-height: 38px;
  font-weight: 400;
  color: #788b99;
  transition: width 0.5s;
  text-align: start;
  appearance: auto;
  cursor: text;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  &:focus {
    background-color: white;
    border: 1px solid #48bbff;
  }
`;

export default SelectInput;

type Props = {
  placeholder: string;
  // input: any;
  // value: string;
};
