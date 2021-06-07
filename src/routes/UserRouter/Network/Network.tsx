import React from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import PageHeader from "../components/PageHeader";

const Network: React.FC<Props> = () => {
  return (
    <AppLayout>
      <PageHeader title="Network" />
    </AppLayout>
  );
};

export default Network;

type Props = {};
