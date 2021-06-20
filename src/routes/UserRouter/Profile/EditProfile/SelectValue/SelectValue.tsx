import React from "react";
import styled from "styled-components";

const SelectValue: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Close aria-hidden="true" onClick={() => {}}>
        x
      </Close>
      <Content>Scorps</Content>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 2px;
  color: #007eff;
  display: inline-block;
  font-size: 0.9em;
  line-height: 1.4;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: top;
`;
const Close = styled.span`
  cursor: pointer;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  padding: 1px 5px 3px;
  display: inline-block;
  vertical-align: middle;
`;
const Content = styled.span`
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  cursor: default;
  padding: 2px 5px;
  display: inline-block;
  vertical-align: middle;
`;

type Props = { text: string };

export default SelectValue;
