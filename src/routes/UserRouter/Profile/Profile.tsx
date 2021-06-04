import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabBtn from "../components/TabBtn";
import ProgressBar from "../components/ProgressBar";
import FeaturesProfile from "./components/FeaturesProfile";
import EditProfile from "./components/EditProfile";
import AppLayout from "../../../layouts";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../store/user/selectors";
// import { selectCurrentProfile } from "../../../store/current_profile/selectors";
import Appeal from "./components/Appeal";
// import { setCurrentProfile } from "../../../store/current_profile/actions";

const Profile: React.FC<Props> = () => {
  // const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const profile = useSelector(selectCurrentProfile);
  const [editBtn, setEditBtn] = useState(false);
  const [activeTab, setActiveTab] = useState(true);

  // useEffect(() => {
  //   dispatch(setCurrentProfile({}));
  // }, []);

  const toggleEditBtn = (value: boolean): void => {
    setEditBtn(value);
  };

  const onSubmit = (value: Values) => {
    console.log("value", value);
  };

  return (
    <AppLayout>
      <Container>
        {editBtn ? (
          <LeftPanel>
            <EditProfile toggleEditBtn={toggleEditBtn}></EditProfile>
          </LeftPanel>
        ) : (
          <LeftPanel>
            <FeaturesProfile toggleEditBtn={toggleEditBtn}></FeaturesProfile>
          </LeftPanel>
        )}

        {user?.u_name !== null ? (
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
        ) : (
          <Appeal></Appeal>
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
type Values = {};
