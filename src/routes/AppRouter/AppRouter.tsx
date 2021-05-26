import React from "react";
import styled from "styled-components";
import GuestRouter from "../GuestRouter";
import UserRouter from "../UserRouter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppRouter: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      {user ? <UserRouter></UserRouter> : <GuestRouter></GuestRouter>}
    </Container>
  );
};

const Container = styled.div``;

export default AppRouter;

type Props = { user: any };
