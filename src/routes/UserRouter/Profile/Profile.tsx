import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabBtn from "../../../components/TabBtn";
import ProgressBar from "../../../components/ProgressBar";
import FeaturesProfile from "./FeaturesProfile";
import EditProfile from "./EditProfile";
import AppLayout from "../../../layouts";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentProfile } from "../../../store/current_profile/selectors";
import { selectProfile } from "../../../store/profile/selectors";
import Appeal from "./components/Appeal";
import { setProfile } from "../../../store/profile/actions";
import { setLeaderboardBatting } from "../../../store/leaderboard_batting/actions";
import { setLeaderboardPitching } from "../../../store/leaderboard_pitching/actions";
import { setProfiles } from "../../../store/profiles/actions";
import { useParams } from "react-router-dom";
import { getSchools } from "../../../store/schools/actions";
import { getTeams } from "../../../store/teams/actions";
import { getFacilities } from "../../../store/facilities/actions";
import { selectHeaders } from "../../../store/user/selectors";
import { http } from "../../../services/http";

const Profile: React.FC<Props> = () => {
  const headers = useSelector(selectHeaders)!;
  http.setAuthorizationHeader(headers);
  const dispatch = useDispatch();
  const [editBtn, setEditBtn] = useState(false);
  const [activeTab, setActiveTab] = useState(true);
  const profile = useSelector(selectCurrentProfile)!;
  const { id } = useParams<{ id: string }>();
  const player = useSelector(selectProfile)!;

  const toggleEditBtn = (value: boolean): void => {
    setEditBtn(value);
  };

  const getProfile = () => {
    if (id === undefined || null) {
      dispatch(setProfile(profile?.id))!;
    } else dispatch(setProfile(id));
  };

  const getAllData = () => {
    getProfile();
    dispatch(setLeaderboardBatting({ type: "exit_velocity" }));
    dispatch(setLeaderboardPitching({ type: "pitch_velocity" }));
    dispatch(setProfiles({ profiles_count: 10, offset: 0 }));
    dispatch(getSchools(""));
    dispatch(getTeams(""));
    dispatch(getFacilities(""));
  };

  useEffect(() => {
    getAllData();
    if (profile?.first_name === null) setEditBtn(true);
  }, [id, profile]);

  return (
    <AppLayout>
      <Container>
        {editBtn === true ? (
          <LeftPanel>
            <EditProfile
              toggleEditBtn={toggleEditBtn}
              profile={profile}
            ></EditProfile>
          </LeftPanel>
        ) : (
          <LeftPanel>
            <FeaturesProfile
              toggleEditBtn={toggleEditBtn}
              player={player}
            ></FeaturesProfile>
          </LeftPanel>
        )}

        {profile?.first_name === null ? (
          <MainContent>
            <Appeal />
          </MainContent>
        ) : (
          <MainContent>
            <SummaryEvents>
              <PitcherSummary>
                <SumTitle>Top Batting Values</SumTitle>
                <SumRecord>
                  <ProgressBar title="Exit Velocity" avail="N/A" />
                  <ProgressBar title="Carry Distance" avail="N/A" />
                  <ProgressBar title="Launch Angle" avail="N/A" />
                </SumRecord>
              </PitcherSummary>
              <RecentEvents>
                <EvTitle>Recent Session Reports</EvTitle>
                <EvData>No data currently linked to this profile</EvData>
              </RecentEvents>
            </SummaryEvents>
            <InfoCard>
              <TabBtnsWrapper>
                <TabBtn isActive={activeTab} text="Batting"></TabBtn>
                <TabBtn isActive={!activeTab} text="Session Reports"></TabBtn>
                <TabBtn isActive={!activeTab} text="Comparison"></TabBtn>
              </TabBtnsWrapper>
              <InnerContent>There's no info yet!</InnerContent>
            </InfoCard>
          </MainContent>
        )}
      </Container>
    </AppLayout>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  background: #788b99;
  overflow: auto;
  width: 100%;
`;
const InnerContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  color: #667784;
  font-size: 16px;
`;
const SummaryEvents = styled.div`
  display: flex;
  flex-direction: column;
`;
const PitcherSummary = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
`;
const SumTitle = styled.div`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 700;
  color: #414f5a;
`;
const SumRecord = styled.div`
  display: flex;
`;
const RecentEvents = styled(PitcherSummary)``;
const EvTitle = styled(SumTitle)``;
const EvData = styled.div`
  display: flex;
  color: #667784;
  font-size: 16px;
`;
const InfoCard = styled.div`
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  flex-grow: 1;
`;
const TabBtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const LeftPanel = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  max-width: 100%;
  background: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;
  padding: 16px;
  position: relative;
  transition: all 0.1s;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  height: auto;
`;

export default Profile;

type Props = {};
