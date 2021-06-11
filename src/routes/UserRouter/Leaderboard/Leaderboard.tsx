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
  date: ["All", "Last Week", "Last Month"],
  position: [
    "All",
    "Catcher",
    "First Base",
    "Second Base",
    "Shortstop",
    "Third Base",
    "Outfield",
    "Pitcher",
  ],
  favorite: ["All", "Favorite"],
  batting: ["Exit Velocity", "Carry Distance"],
  pitching: ["Pitch Velocity", "Spin Rate"],
};

const Leaderboard: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(true);
  const selectTab = (val: boolean) => {
    setActiveTab(val);
  };

  const [selects, setSelects] = useState<Selects>({
    date: "last_week",
    school: "",
    team: "123",
    position: "catcher",
    age: "",
    favorite: 1,
    type: "exit_velocity",
  });

  useEffect(() => {}, [selects]);

  // const selectOption = ({type, text}) => {
  //   const newSelectedData = {...selects, type: text}

  // setSelects(newSelctedData)
  // }
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
                  />

                  <Field
                    name="school"
                    component={SelectorInput}
                    title={Titles.school}
                  />

                  <Field name="team" component={SelectorInput} title="Team" />

                  <SelBoxBig>
                    <Field
                      name="position"
                      component={Selector}
                      title={Titles.position}
                      options={OPTIONS.position}
                      defaultTitle={Titles.position}
                    />
                  </SelBoxBig>

                  <Field
                    name="age"
                    component={SelectorInput}
                    title={Titles.age}
                  />

                  <SelBox>
                    <Field
                      name="favorite"
                      component={Selector}
                      title={Titles.favorite}
                      options={OPTIONS.favorite}
                      defaultTitle={Titles.favorite}
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
                    />
                  ) : (
                    <Field
                      name="type"
                      component={Selector}
                      title={Titles.pitching}
                      options={OPTIONS.pitching}
                      defaultTitle={Titles.pitching}
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
  age?: string | undefined;
  favorite?: number | undefined;
  type?: string | undefined;
  date?: string | undefined;
};
