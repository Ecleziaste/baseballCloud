import React from "react";
import styled from "styled-components";

const FeaturesProfile: React.FC<Props> = () => {
  return (
    <div>
      <Photo>
        <ImageBox>
          <Image />
        </ImageBox>
        <Name>Chelovek Bat'kovich</Name>
        <Role>First base</Role>
        <Role>Catcher</Role>
      </Photo>
      <Info>
        <PersonalInfo></PersonalInfo>
      </Info>
    </div>
  );
};

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
const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 23px;
`;
const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;
const Name = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #414f5a;
  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
`;
const Role = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #788b99;
`;
const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FeaturesProfile;

type Props = {};
