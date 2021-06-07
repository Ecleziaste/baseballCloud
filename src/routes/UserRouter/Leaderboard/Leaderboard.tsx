import React, { useState } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import TabBtn from "../components/TabBtn";
import PageHeader from "../components/PageHeader";

const Leaderboard: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <AppLayout>
      <PageHeader title="Leaderboard" />

      <TabBtnsWrapper>
        <TabBtn isActive={activeTab} text="Batting"></TabBtn>
        <TabBtn isActive={!activeTab} text="Pitching"></TabBtn>
      </TabBtnsWrapper>
    </AppLayout>
  );
};

const TabBtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default Leaderboard;

type Props = {};
