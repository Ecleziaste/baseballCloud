import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import TabBtn from "../components/TabBtn";
import PageHeader from "../components/PageHeader";
import LeaderCard from "../components/LeaderCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";
import { Form, Field } from "react-final-form";

enum Titles {
  date = "Date",
  school = "School",
  team = "Team",
  position = "Position",
  age = "Age",
  favorite = "All",
  pitching = "Pitch Velocity",
  batting = "Exit Velocity",
}

const OPTIONS = {
  date: [
    { fieldName: "date", text: "All" },
    { fieldName: "date", text: "Last Week", payload: "last_week" },
    { fieldName: "date", text: "Last Month", payload: "last_month" },
  ],
  position: [
    { fieldName: "position", text: "All" },
    { fieldName: "position", text: "Catcher", payload: "catcher" },
    { fieldName: "position", text: "First Base", payload: "first_base" },
    { fieldName: "position", text: "Second Base", payload: "second_base" },
    { fieldName: "position", text: "Shortstop", payload: "shortstop" },
    { fieldName: "position", text: "Third Base", payload: "third_base" },
    { fieldName: "position", text: "Outfield", payload: "outfield" },
    { fieldName: "position", text: "Pitcher", payload: "pitcher" },
  ],
  favorite: [
    { fieldName: "favorite", text: "All" },
    { fieldName: "favorite", text: "Favorite", payload: 1 },
  ],
  batting: [
    {
      fieldName: "type",
      text: "Exit Velocity",
      payload: "exit_velocity",
    },
    {
      fieldName: "type",
      text: "Carry Distance",
      payload: "carry_distance",
    },
  ],
  pitching: [
    {
      fieldName: "type",
      text: "Pitch Velocity",
      payload: "pitch_velocity",
    },
    { fieldName: "type", text: "Spin Rate", payload: "spin_rate" },
  ],
};

const Leaderboard: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(true);
  const selectTab = (val: boolean) => {
    setActiveTab(val);
  };

  const [selects, setSelects] = useState<Selects>({
    date: undefined,
    school: undefined,
    team: undefined,
    position: undefined,
    type: "exit_velocity",
    age: undefined,
    favorite: undefined,
    offset: 10,
  });

  const handleSelect = async (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    await setSelects(newData);
  };

  useEffect(() => {
    console.log(selects);
  }, [selects]);

  const onSubmit = () => {};

  return (
    <AppLayout>
      <Main>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <div>
              <HeaderRow>
                <PageHeader title="Leaderboard" />
                <Selectables>
                  <Field
                    name="date"
                    component={Selector}
                    title={Titles.date}
                    options={OPTIONS.date}
                    defaultTitle={Titles.date}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="school"
                    fieldName="school"
                    component={SelectorInput}
                    title={Titles.school}
                    handleSelect={handleSelect}
                  />

                  <Field
                    name="team"
                    fieldName="team"
                    component={SelectorInput}
                    title="Team"
                    handleSelect={handleSelect}
                  />

                  <SelBoxBig>
                    <Field
                      name="position"
                      component={Selector}
                      title={Titles.position}
                      options={OPTIONS.position}
                      defaultTitle={Titles.position}
                      handleSelect={handleSelect}
                    />
                  </SelBoxBig>

                  <Field
                    name="age"
                    fieldName="age"
                    component={SelectorInput}
                    title={Titles.age}
                    handleSelect={handleSelect}
                  />

                  <SelBox>
                    <Field
                      name="favorite"
                      component={Selector}
                      title={Titles.favorite}
                      options={OPTIONS.favorite}
                      defaultTitle={Titles.favorite}
                      handleSelect={handleSelect}
                    />
                  </SelBox>
                </Selectables>
              </HeaderRow>

              <Container>
                <TabBtnsWrapper>
                  <TabBtn
                    onClick={() => selectTab(true)}
                    isActive={activeTab}
                    text="Batting"
                  ></TabBtn>
                  <TabBtn
                    onClick={() => selectTab(false)}
                    isActive={!activeTab}
                    text="Pitching"
                  ></TabBtn>
                </TabBtnsWrapper>
                <TableDropdown>
                  {activeTab === true ? (
                    <Field
                      name="type"
                      component={Selector}
                      title={Titles.batting}
                      options={OPTIONS.batting}
                      defaultTitle={Titles.batting}
                      handleSelect={handleSelect}
                    />
                  ) : (
                    <Field
                      name="type"
                      component={Selector}
                      title={Titles.pitching}
                      options={OPTIONS.pitching}
                      defaultTitle={Titles.pitching}
                      handleSelect={handleSelect}
                    />
                  )}
                </TableDropdown>
              </Container>
            </div>
          )}
        />

        <PageBody>
          <TableHeaders>
            <TABLE_TITLE_1>Rank</TABLE_TITLE_1>
            <TABLE_TITLE_2>
              {activeTab === true ? "Batter Name" : "Pitcher Name"}
            </TABLE_TITLE_2>
            <TABLE_TITLE_3>Age</TABLE_TITLE_3>
            <TABLE_TITLE_4>School</TABLE_TITLE_4>
            <TABLE_TITLE_5>Teams</TABLE_TITLE_5>
            <TABLE_TITLE_6>
              {activeTab === true ? "Exit Velocity" : "Pitch Type"}
            </TABLE_TITLE_6>
            <TABLE_TITLE_7>
              {activeTab === true ? "Launch Angle" : "Velocity"}
            </TABLE_TITLE_7>
            <TABLE_TITLE_8>
              {activeTab === true ? "Distance" : "Spin Rate"}
            </TABLE_TITLE_8>
            <TABLE_TITLE_9>Favorite</TABLE_TITLE_9>
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

const SelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
`;
const SelBoxBig = styled(SelBox)`
  width: 130px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled(HeaderRow)`
  margin-top: 8px;
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

const Selectables = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const TableDropdown = styled.div`
  padding-right: 23px;
  margin-right: 23px;
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

type Selects = {
  team?: string | undefined;
  school?: string | undefined;
  position?: string | undefined;
  age?: number | undefined;
  favorite?: number | undefined;
  type?: string | undefined;
  date?: string | undefined;
  offset?: number | undefined;
};
