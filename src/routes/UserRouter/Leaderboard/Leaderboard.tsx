import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import TabBtn from "../components/TabBtn";
import PageHeader from "../components/PageHeader";
import LeaderCard from "../components/LeaderCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";

const Leaderboard: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(true);

  const [selects, setSelects] = useState<Selects>({
    team: "123",
    position: "catcher",
    favorite: 1,
    type: "exit_velocity",
    date: "last_week",
  });

  useEffect(() => {}, [selects]);

  // const selectOption = ({type, text}) => {
  //   const newSelctedData = {...selects, type: text}

  // setSelects(newSelctedData)
  // }

  return (
    <AppLayout>
      <Main>
        <HeaderRow>
          <PageHeader title="Leaderboard" />
          <Selectables>
            <HeaderDropdown>
              <Selector
                title="Date"
                options={["All", "Last Week", "Last Month"]}
              />
            </HeaderDropdown>

            <HeaderInput>
              <SelectorInput title="School" />
            </HeaderInput>

            <HeaderInput></HeaderInput>

            <HeaderDropdown></HeaderDropdown>

            <HeaderInput></HeaderInput>

            <HeaderDropdown></HeaderDropdown>
          </Selectables>
        </HeaderRow>

        <Container>
          <TabBtnsWrapper>
            <TabBtn isActive={activeTab} text="Batting"></TabBtn>
            <TabBtn isActive={!activeTab} text="Pitching"></TabBtn>
          </TabBtnsWrapper>
          <TableDropdown>
            {/* <Select isActive={exit}>Exit Velocity</Select>
            {exit && (
              <DropDownSimple height="auto" width="178px" refer={menuEl}>
                <SelectableText text="Exit Velocity" />
                <SelectableText text="Carry Distance" />
              </DropDownSimple>
            )} */}
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
            <LeaderCard />
            <LeaderCard />
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
const HeaderRow = styled(Container)``;
const Selectables = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const TableDropdown = styled.div`
  padding-right: 23px;
  margin-right: 23px;
  position: relative;
`;
const HeaderDropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-right: 22px; */
  /* position: relative; */
`;
const HeaderInput = styled(HeaderDropdown)``;
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

type Selects = {
  team?: string | undefined;
  position?: string | undefined;
  favorite?: number | undefined;
  type?: string | undefined;
  date?: string | undefined;
};
