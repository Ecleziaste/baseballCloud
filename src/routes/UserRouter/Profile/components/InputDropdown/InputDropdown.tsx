import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FieldRenderProps } from "react-final-form";

import styled from "styled-components";

const InputDropdown: React.FC<FieldRenderProps<string, HTMLElement> & Props> =
  ({ placeholder, input, label, secure }) => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const menuEl = useRef<HTMLDivElement>(null);
    const toggleMenu = (value: boolean) => {
      console.log("true");

      setMenu(value);
    };

    const handleClickOutside = (event: Event) => {
      if (menuEl.current && !menuEl.current.contains(event.target as Node)) {
        toggleMenu(false);
      }
    };
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    });

    return (
      <Container>
        <Input
          onFocus={() => toggleMenu(true)}
          {...input}
          placeholder={placeholder}
        >
          {/* {placeholder} */}
        </Input>
        <ArrowBox></ArrowBox>
        <Label>{label}</Label>
        {menu && (
          <DropdownMenu ref={menuEl}>
            <select>
              <option>Catcher</option>
              <option>First base</option>
              <option>Second base</option>
            </select>
            <Item onClick={() => {}}>Catcher</Item>
            <Item>Second Base</Item>
            <Item>First base</Item>
            <Item>Real maaan</Item>
          </DropdownMenu>
        )}
      </Container>
    );
  };

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  display: none;
  position: absolute;
  /* z-index: 1; */
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: transparent;
  text-decoration: none;
`;
const Input = styled.input`
  width: 100%;
  position: relative;
  /* z-index: 1; */
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
  &:focus ~ ${Label} {
    display: flex;
    position: absolute;
    top: 2px;
    left: 6px;
    font-size: 10px;
    color: #667784;
    transform: none;
    translate: none;
    cursor: pointer;
    &:hover {
      color: #48bbff;
      text-decoration: underline;
    }
  }
`;
const DropdownMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 38px;
  position: absolute;
  top: 100%;
  /* right: -5px; */
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  /* z-index: 100; */
`;
const Item = styled.div`
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
const ArrowBox = styled.span`
  position: absolute;
  top: 65%;
  right: 15px;
  transform: translate(-50%, -50%);
  width: 27px;
  text-align: right;
  &:before {
    position: absolute;
    bottom: -5px;
    content: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='%23788B99' fill-rule='nonzero' d='M.516.548c.436-.446 1.043-.481 1.576 0L6 4.295 9.908.548c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S.924 2.581.516 2.163C.107 1.745.08.993.516.548z'/%3E%3C/svg%3E");
  }
`;

export default InputDropdown;

type Props = {
  placeholder: string;
  input: any;
  label: string;
  secure?: boolean;
};
