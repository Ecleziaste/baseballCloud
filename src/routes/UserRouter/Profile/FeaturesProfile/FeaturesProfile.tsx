import React, { useState } from "react";
import styled from "styled-components";
import Item from "../components/Item";
import InnerInfo from "../components/InnerInfo";
import TitleLine from "../components/TitleLine";
import {
  EDIT,
  AGE_1,
  AGE_2,
  HEIGHT,
  WEIGHT_1,
  WEIGHT_2,
  THROWS,
  BATS,
  HEART_MINUS,
  HEART_PLUS,
} from "../../../../assets/svg/paths";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentProfile } from "../../../../store/current_profile/selectors";
import { selectProfile } from "../../../../store/profile/selectors";
import DUMMY from "../../../../assets/images/avatar_dummy.png";
import { updateFavoriteProfie } from "../../../../store/profiles/actions";

const FeaturesProfile: React.FC<Props> = ({ toggleEditBtn, id }) => {
  const dispatch = useDispatch();
  const current_profile = useSelector(selectCurrentProfile)!;

  const profile = useSelector(selectProfile)!;
  const avatar = current_profile?.avatar;
  const [isFavorite, setIsFavorite] = useState(profile?.favorite);

  return (
    <Container>
      <Photo>
        <ImageBox>
          <Image $avatar={avatar || DUMMY} />
        </ImageBox>
        <Name>
          {` ${current_profile?.first_name || ""} ${
            current_profile?.last_name || ""
          }`}
        </Name>

        <FirstRole>{current_profile?.position || ""}</FirstRole>
        <SecondRole>{current_profile?.position2 || ""}</SecondRole>
        {String(current_profile?.id) === profile?.id ? (
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
        ) : (
          <LikeBtn
            onClick={() => {
              dispatch(
                updateFavoriteProfie({
                  profile_id: profile.id,
                  favorite: !isFavorite,
                })
              );
            }}
          >
            <LikeSpan>
              {profile?.favorite === true ? (
                <Svg width="30" height="30" viewBox="0 0 24 24">
                  <Path
                    fill="#48BBFF"
                    fill-rule="nonzero"
                    d={HEART_MINUS}
                  ></Path>
                </Svg>
              ) : (
                <Svg width="30" height="30" viewBox="0 0 24 24">
                  <Path
                    fill="#99acba"
                    fill-rule="nonzero"
                    d={HEART_PLUS}
                  ></Path>
                </Svg>
              )}
            </LikeSpan>
          </LikeBtn>
        )}
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
            value={`${current_profile?.age || ""}`}
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
            value={`${current_profile?.feet || ""} ft ${
              current_profile?.inches || ""
            } in`}
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
            value={`${current_profile?.weight} lbs`}
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
            value={`${current_profile?.throws_hand?.toUpperCase() || ""}`}
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
            value={`${current_profile?.bats_hand?.toUpperCase() || ""}`}
          />
        </PersonalInfo>
        <InnerInfo
          title="School"
          text={`${current_profile?.school?.name || ""}`}
        />
        <InnerInfo
          title="School year"
          text={`${current_profile?.school_year || ""}`}
        />
        <InnerInfo
          title="Team"
          text={`${current_profile?.teams[0]?.name || ""}`}
        />
        <InnerInfo
          title="Facility"
          text={`${current_profile?.facilities[0]?.u_name || ""}`}
        />
        <TitleLine title="About"></TitleLine>
        <Text>{`${current_profile?.biography || ""}`}</Text>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
`;
const Image = styled.div<{ $avatar: string | null | undefined }>`
  background-image: url(${(props) => props.$avatar});
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
const LikeBtn = styled(EditBtn)`
  top: 0;
  right: 0;
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
const LikeSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const G = styled.g`
  fill-rule: nonzero;
`;
const Path = styled.path``;

export default FeaturesProfile;

type Props = { toggleEditBtn: (value: boolean) => void; id: string };
