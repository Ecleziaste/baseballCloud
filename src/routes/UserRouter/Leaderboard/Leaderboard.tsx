import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import TabBtn from "../components/TabBtn";
import PageHeader from "../components/PageHeader";
import BattingCard from "../components/BattingCard";
import PitchingCard from "../components/PitchingCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";
import { Form, Field } from "react-final-form";
import { OPTIONS } from "../../../constants";
import { LeaderboardSelects } from "../../../Types";
import { useDispatch, useSelector } from "react-redux";
import { setLeaderboardBatting } from "../../../store/leaderboard_batting/actions";
import { selectLeaderboardBatting } from "../../../store/leaderboard_batting/selectors";
import { setLeaderboardPitching } from "../../../store/leaderboard_pitching/actions";
import { selectLeaderboardPitching } from "../../../store/leaderboard_pitching/selectors";

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

const Leaderboard: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(true);
  const selectTab = (val: boolean) => {
    setActiveTab(val);
  };
  const { leaderboard_batting: batters } = useSelector(
    selectLeaderboardBatting
  )!;
  const { leaderboard_pitching: pitchers } = useSelector(
    selectLeaderboardPitching
  )!;

  const [selects, setSelects] = useState<LeaderboardSelects>({
    date: undefined,
    school: undefined,
    team: undefined,
    position: undefined,
    type: "exit_velocity",
    age: undefined,
    favorite: undefined,
  });

  const handleSelect = async (fieldName: any, value: any) => {
    const newData = { ...selects, [fieldName]: value };
    await setSelects(newData);
  };

  useEffect(() => {
    dispatch(setLeaderboardBatting(selects));
    dispatch(setLeaderboardPitching(selects));
  }, [selects, activeTab]);

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
                    onClick={() => {
                      selectTab(false);
                      setSelects({ ...selects, type: "pitch_velocity" });
                    }}
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
            <Title $width="6.5%">Rank</Title>
            <Title $width="14%">
              {activeTab === true ? "Batter Name" : "Pitcher Name"}
            </Title>
            <Title $width="5%">Age</Title>
            <Title $width="14%">School</Title>
            <Title $width="14.5%">Teams</Title>
            <Title $width="14.5%">
              {activeTab === true ? "Exit Velocity" : "Pitch Type"}
            </Title>
            <Title $width="14.5%">
              {activeTab === true ? "Launch Angle" : "Velocity"}
            </Title>
            <Title $width="10%">
              {activeTab === true ? "Distance" : "Spin Rate"}
            </Title>
            <TitleFav $width="none">Favorite</TitleFav>
          </TableHeaders>
          <TableBody>
            {activeTab === true
              ? batters.map((batter) => {
                  return (
                    <BattingCard batter={batter} key={batter.batter_name} />
                  );
                })
              : pitchers.map((pitcher) => {
                  return (
                    <PitchingCard
                      pitcher={pitcher}
                      key={pitcher.pitcher_name}
                    />
                  );
                })}
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
const Title = styled.div<{ $width: string }>`
  display: flex;
  max-width: 100%;
  width: ${(props) => props.$width};
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TitleFav = styled(Title)`
  display: flex;
  max-width: 100%;
  justify-content: flex-end;
  text-overflow: ellipsis;
`;

export default Leaderboard;

type Props = {};
