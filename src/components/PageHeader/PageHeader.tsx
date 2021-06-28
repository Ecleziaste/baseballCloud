import React from "react";
import styled from "styled-components";

const Network: React.FC<Props> = ({ title }) => {
  return (
    <PageHeader>
      <Title>{title}</Title>
      <DropdownContainer></DropdownContainer>
    </PageHeader>
  );
};

const PageHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
`;
const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
`;

export default Network;

type Props = { title: string };
