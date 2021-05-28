import React from "react";
import styled from "styled-components";
import GuestRouter from "../GuestRouter";
import UserRouter from "../UserRouter";
import { Route } from "react-router-dom";

const AppRouter: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <Route path="/">{user ? <UserRouter /> : <GuestRouter />}</Route>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  overflow: hidden;
`;

export default AppRouter;

type Props = { user: any };
