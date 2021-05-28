import React from "react";
import styled from "styled-components";
import Item from "../Item";
import InnerInfo from "../InnerInfo";
import {
  EDIT,
  AGE_1,
  AGE_2,
  HEIGHT,
  WEIGHT_1,
  WEIGHT_2,
  THROWS,
  BATS,
} from "../../../../../assets/svg/paths";

const FeaturesProfile: React.FC<Props> = ({ toggleEditBtn }) => {
  return (
    <Container>
      <Photo>
        <ImageBox>
          <Image />
        </ImageBox>
        <Name>Chelovek Bat'kovich</Name>
        <FirstRole>First base</FirstRole>
        <SecondRole>Catcher</SecondRole>
        <EditBtn onClick={() => toggleEditBtn(true)}>
          <Span>
            <Svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              transform="scale(1.2)"
            >
              <G>
                <Path fill="#FFF" d={EDIT}></Path>
              </G>
            </Svg>
          </Span>
        </EditBtn>
      </Photo>

      <Info>
        <PersonalInfo>
          <Item
            svg={
              <Svg width="22" height="21" viewBox="0 0 22 21">
                <G fill="#35C32A">
                  <Path d={AGE_1}></Path>
                  <Path d={AGE_2}></Path>
                </G>
              </Svg>
            }
            text="Age"
            value="22"
          />
          <Item
            svg={
              <Svg width="12" height="23" viewBox="0 0 12 23">
                <G fill="#48BBFF">
                  <ellipse cx="6" cy="1.643" rx="1.636" ry="1.643"></ellipse>
                  <Path d={HEIGHT}></Path>
                </G>
              </Svg>
            }
            text="Height"
            value="7 ft 0 in"
          />
          <Item
            svg={
              <Svg width="14" height="17" viewBox="0 0 14 17">
                <G fill="#9948FF">
                  <Path d={WEIGHT_1}></Path>
                  <Path d={WEIGHT_2}></Path>
                </G>
              </Svg>
            }
            text="Weight"
            value="78 lbs"
          />
          <Item
            svg={
              <Svg width="18" height="18" viewBox="0 0 18 18">
                <G fill="#FFD01A">
                  <Path d={THROWS}></Path>
                </G>
              </Svg>
            }
            text="Throws"
            value="R"
          />
          <Item
            svg={
              <Svg width="20" height="20" viewBox="0 0 20 20">
                <G fill="#FF5656">
                  <Path d={BATS}></Path>
                </G>
              </Svg>
            }
            text="Bats"
            value="L"
          />
        </PersonalInfo>
        <InnerInfo title="School" text="Hogwarts" />
        <InnerInfo title="School year" text="asdas" />
        <InnerInfo title="Team" text="ass" />
        <InnerInfo title="Facility" text="eqwe" />
        <About>
          <TitleBox>
            <Title>About</Title>
          </TitleBox>

          <Text> some words about person</Text>
        </About>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const About = styled(Container)``;
const TitleBox = styled.div`
  display: flex;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7ebef;
    z-index: 0;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #414f5a;
  text-align: left;
  display: inline-block;
  position: relative;
  z-index: 5;
  background-color: #ffffff;
  padding-right: 12px;
`;
const Text = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #788b99;
  line-height: 1.75;
  word-wrap: break-word;
`;
const ImageBox = styled.div`
  display: block;
  margin-bottom: 6px;
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
  position: relative;
`;
const EditBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 16px;
  right: 17px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
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
const SecondRole = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #788b99;
`;
const FirstRole = styled(SecondRole)`
  border-bottom: 0.5px solid rgba(120, 139, 153, 0.5);
`;
const PersonalInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #48bbff;
  box-shadow: -0.5px -0.5px 0.5px 1px rgba(131, 210, 255, 0.3);
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const G = styled.g`
  fill-rule: nonzero;
`;
const Path = styled.path``;

export default FeaturesProfile;

type Props = { toggleEditBtn: (value: boolean) => void };
