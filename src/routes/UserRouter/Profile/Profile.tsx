import React, { useState } from "react";
import styled from "styled-components";
import TabBtn from "../components/TabBtn";
import ProgressBar from "../components/ProgressBar";
import { Form, Field } from "react-final-form";
import InputField from "../../GuestRouter/components/InputField";

const Profile: React.FC<Props> = () => {
  const onSubmit = (value: Values) => {
    console.log("value", value);
  };

  return (
    <Container>
      <LeftPanel>
        <PhotoForm>
          <ImageBox>
            <Image />
          </ImageBox>
          <ChooseLink>Choose Photo</ChooseLink>
        </PhotoForm>
        <InfoForm>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <Name>
                <SmallInputBox>
                  <Field
                    value={"undefined"}
                    name="firstName"
                    component={Input}
                  />
                </SmallInputBox>
                <SmallInputBox>
                  <Field
                    value={"undefined"}
                    name="lastName"
                    component={Input}
                  />
                </SmallInputBox>
              </Name>
            )}
          />
        </InfoForm>
      </LeftPanel>
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
            <TabBtn text="Batting"></TabBtn>
            <TabBtn text="Session Reports"></TabBtn>
            <TabBtn text="Comparison"></TabBtn>
          </TabBtnsWrapper>
        </InfoCard>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  background: #788b99;
  overflow: auto;
  width: 100%;
  /* width: calc(100vw - 280px); */
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
  /* box-sizing: border-box;
  flex-grow: 1; */
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
  background: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 280px;
  overflow: auto;
  padding: 16px;
  position: relative;
  transition: all 0.1s;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  height: auto;
`;
const PhotoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 23px;
`;
const ImageBox = styled.div`
  display: block;
  margin-bottom: 8px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid tomato;
`;
const Image = styled.div`
  background-image: url("https://baseballcloud-staging-assets.s3.amazonaws.com/profile/469/size_100_100_159a71f5-9233-415a-8ab7-63811fecb9b4.png");
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
const ChooseLink = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;
const InfoForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;
const Name = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const SmallInputBox = styled.div`
  display: flex;
  height: 40px;
  padding: 0 16px;
  transition: all 0.2s;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: #eff1f3;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
`;

export default Profile;

type Props = {};
type Values = {};
