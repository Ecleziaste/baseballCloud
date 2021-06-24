import React, { useState } from "react";
import styled from "styled-components";
import Favourite from "../Favourite";
import UnFavourite from "../UnFavourite";
import { Link } from "react-router-dom";
import { PlayerCard } from "../../../../Types";
import { useDispatch } from "react-redux";
import {
  setProfiles,
  updateFavoriteProfile,
} from "../../../../store/profiles/actions";

const NetworkCard: React.FC<Props> = ({ player }) => {
  const dispatch = useDispatch();
  const [heartBtn, setHeartBtn] = useState<boolean>(player.favorite);

  // тут будет селектор профиля по айдишке

  return (
    <CardContent>
      <TitleWrapper $width="19%">
        <Title $width="none">
          <Name
            to={{
              pathname: `/profile/${player.id}`,
              // state: { fromDashboard: true },
            }}
          >
            {`${player.first_name} ${player.last_name}`}
          </Name>
        </Title>
      </TitleWrapper>
      <Title $width="10%">Sessions</Title>
      <Title $width="23%">{player.school?.name || "-"}</Title>
      <Title $width="23%">
        {player.teams?.map((team, index) => (
          <span key={team.id}>{(index ? ", " : "") + team.name}</span>
        )) || "-"}
      </Title>
      <Title $width="15%">{player.age || "-"}</Title>
      <TitleFav $width="8%">
        <HeartBtn
          onClick={async () => {
            await dispatch(
              updateFavoriteProfile({
                profile_id: player.id,
                favorite: !heartBtn,
              })
            );
            await setHeartBtn(!heartBtn);
            await dispatch(
              setProfiles({
                profiles_count: 10,
                offset: 0,
              })
            );
          }}
        >
          {heartBtn === true ? <Favourite /> : <UnFavourite />}
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
const TitleFav = styled(Title)`
  cursor: pointer;
`;
const HeartBtn = styled.div`
  display: flex;
`;

export default NetworkCard;

type Props = {
  player: PlayerCard;
};
