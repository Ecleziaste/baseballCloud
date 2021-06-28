import React from "react";
import styled from "styled-components";

const ButtonMain: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <Container>
      <Button type="submit" onClick={handleClick}>
        {text}
      </Button>
    </Container>
  );
};

const Container = styled.div``;

const Button = styled.button`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 17px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: solid 1px transparent;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(72 187 255 / 0%);
  background-color: #48bbff;
`;

export default ButtonMain;

type Props = { text: string; handleClick: () => void };
