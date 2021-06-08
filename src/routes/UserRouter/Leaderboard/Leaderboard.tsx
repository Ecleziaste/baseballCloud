import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import TabBtn from "../components/TabBtn";
import PageHeader from "../components/PageHeader";
import LeaderCard from "../components/LeaderCard";
import Select from "../../../components/Select";
import DropDownSimple from "../../../components/DropdownSimple";
import SelectableText from "../../../components/SelectableText";

const Leaderboard: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(true);

  const [menu, setMenu] = useState(false);
  const menuEl = useRef<HTMLDivElement>(null);
  const toggleMenu = (value: boolean) => {
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
    <AppLayout>
      <Main>
        <PageHeader title="Leaderboard" />
        <Container>
          <TabBtnsWrapper>
            <TabBtn isActive={activeTab} text="Batting"></TabBtn>
            <TabBtn isActive={!activeTab} text="Pitching"></TabBtn>
          </TabBtnsWrapper>
          <TableDropdown onClick={() => toggleMenu(!menu)}>
            <Select>Exit Velocity</Select>
            {menu && (
              <DropDownSimple width="178px" refer={menuEl}>
                <SelectableText text="Exit Velocity"></SelectableText>
                <SelectableText text="Carry Distance"></SelectableText>
              </DropDownSimple>
            )}
          </TableDropdown>
        </Container>
        <PageBody>
          <TableHeaders>
            <TABLE_TITLE_1>Rank</TABLE_TITLE_1>
            <TABLE_TITLE_2>Batter Name</TABLE_TITLE_2>
            <TABLE_TITLE_3>Age</TABLE_TITLE_3>
            <TABLE_TITLE_4>School</TABLE_TITLE_4>
            <TABLE_TITLE_5>Teams</TABLE_TITLE_5>
            <TABLE_TITLE_6>Exit Velocity</TABLE_TITLE_6>
            <TABLE_TITLE_7>Launch Angle</TABLE_TITLE_7>
            <TABLE_TITLE_8>Distance</TABLE_TITLE_8>
            <TABLE_TITLE_9>Favourite</TABLE_TITLE_9>
          </TableHeaders>
          <TableBody>
            <LeaderCard></LeaderCard>
          </TableBody>
        </PageBody>
      </Main>
    </AppLayout>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;
const TabBtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 23px;
`;
const TableHeaders = styled.div`
  display: flex;
  width: 100%;
  min-height: 44px;
  margin-bottom: 6px;

  background-color: #fff;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;
const TableDropdown = styled.div`
  padding-right: 23px;
  margin-right: 23px;
  position: relative;
  /* top: 18px; */
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const TABLE_TITLE = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TABLE_TITLE_1 = styled(TABLE_TITLE)`
  width: 6.5%;
`;
const TABLE_TITLE_2 = styled(TABLE_TITLE)`
  width: 14%;
`;
const TABLE_TITLE_3 = styled(TABLE_TITLE)`
  width: 5%;
`;
const TABLE_TITLE_4 = styled(TABLE_TITLE)`
  width: 14%;
`;
const TABLE_TITLE_5 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_6 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_7 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_8 = styled(TABLE_TITLE)`
  width: 10%;
`;
const TABLE_TITLE_9 = styled(TABLE_TITLE)`
  display: flex;
  max-width: 100%;
  justify-content: flex-end;
  text-overflow: ellipsis;
`;

export default Leaderboard;

type Props = {};
