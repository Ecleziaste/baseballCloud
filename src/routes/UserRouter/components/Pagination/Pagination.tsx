import React from "react";
import styled from "styled-components";

const Pagination: React.FC<Props> = () => {
  return (
    <Container>
      <Li>
        <A role="button" href="#">
          <span aria-label="First">«</span>
        </A>
      </Li>
      <Li>
        <A role="button" href="#">
          1
        </A>
      </Li>
      <Li>
        <A role="button" href="#">
          2
        </A>
      </Li>
      <Li>
        <A role="button" href="#">
          3
        </A>
      </Li>
      <Li>
        <A role="button" href="#"></A>
      </Li>
      <Li>
        <A role="button" href="#"></A>
      </Li>
      <Li>
        <A role="button" href="#">
          <span aria-label="Last">»</span>
        </A>
      </Li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0;
  /* position: absolute; */
  position: sticky;
  bottom: 0;

  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  font-size: 1.2rem;
`;
const Li = styled.li`
  display: inline;
`;
const A = styled.a`
  pointer-events: none;
  margin-right: 0;
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
`;

export default Pagination;

type Props = {};
