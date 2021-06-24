import React, { useState } from "react";
import styled from "styled-components";
import Favourite from "../Favourite";
import UnFavourite from "../UnFavourite";
import { Link } from "react-router-dom";
import { PitchingType } from "../../../../Types";
import { useDispatch } from "react-redux";
import { updateFavoriteProfile } from "../../../../store/profiles/actions";

const PitchingCard: React.FC<Props> = ({ pitcher }) => {
  const dispatch = useDispatch();
  const [heartBtn, setHeartBtn] = useState<boolean>(pitcher.favorite);

  return (
    <CardContent>
      <TitleWrapper $width="6%">
        <Title $width="none">1</Title>
      </TitleWrapper>
      <Title $width="14%">
        <Name to="#">{pitcher.pitcher_name}</Name>
      </Title>
      <Title $width="5%">{pitcher.age}</Title>
      <Title $width="14%">{pitcher.school.name}</Title>
      <Title $width="14.5%">
        {pitcher.teams?.map((team, index) => (
          <span key={team.id}>{(index ? ", " : "") + team.name}</span>
        )) || "-"}
      </Title>
      <Title $width="14.5%">{String(pitcher.pitch_type)}</Title>
      <Title $width="14.5%">{String(pitcher.velocity)}</Title>
      <Title $width="10%">{String(pitcher.spin_rate)}</Title>
      <TitleFav $width="none">
        <HeartBtn
          onClick={() => {
            dispatch(
              updateFavoriteProfile({
                profile_id: pitcher.pitcher_datraks_id.toString(),
                favorite: !heartBtn,
              })
            );
            setHeartBtn(!heartBtn);
          }}
        >
          {heartBtn ? <Favourite /> : <UnFavourite />}
        </HeartBtn>
      </TitleFav>
    </CardContent>
  );
};

const CardContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 44px;
  margin-bottom: 6px;
  border-radius: 4px;
  background-color: #f7f8f9;
  align-items: center;
  font-size: 14px;
  line-height: 1.13;
  font-weight: 400;
  color: #414f5a;
  &:hover {
    background-color: #ecf8ff;
  }
`;
const Title = styled.div<{ $width: string }>`
  display: flex;
  max-width: 100%;
  width: ${(props) => props.$width};
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TitleWrapper = styled(Title)`
  padding-left: 6px;
`;

const Name = styled(Link)`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: none;
  color: #414f5a;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;
const TitleFav = styled(Title)`
  cursor: pointer;
  justify-content: flex-end;
`;
const HeartBtn = styled.div`
  display: flex;
`;

export default PitchingCard;

type Props = {
  pitcher: PitchingType;
};
