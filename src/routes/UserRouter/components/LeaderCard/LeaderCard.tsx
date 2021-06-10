import React, { useState } from "react";
import styled from "styled-components";
import Favourite from "../Favourite";
import UnFavourite from "../UnFavourite";
import { Link } from "react-router-dom";

const LeaderCard: React.FC<Props> = () => {
  const [heartBtn, setHeartBtn] = useState<boolean>(false);

  return (
    <CardContent>
      <TitleWrapper>
        <TITLE_1>1</TITLE_1>
      </TitleWrapper>
      <TITLE_2>
        <Name>Batter Name</Name>
      </TITLE_2>
      <TITLE_3>Age</TITLE_3>
      <TITLE_4>School</TITLE_4>
      <TITLE_5>Teams</TITLE_5>
      <TITLE_6>Exit Velocity</TITLE_6>
      <TITLE_7>Launch Angle</TITLE_7>
      <TITLE_8>Distance</TITLE_8>
      <TITLE_9>
        <HeartBtn onClick={() => setHeartBtn(!heartBtn)}>
          {heartBtn ? <Favourite /> : <UnFavourite />}
        </HeartBtn>
      </TITLE_9>
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
const TITLE = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TitleWrapper = styled(TITLE)`
  padding-left: 6px;
  width: 6%;
`;
const TITLE_1 = styled(TITLE)``;
const TITLE_2 = styled(TITLE)`
  width: 14%;
`;
const Name = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #48bbff;
    text-decoration: underline;
  }
`;
const TITLE_3 = styled(TITLE)`
  width: 5%;
`;
const TITLE_4 = styled(TITLE)`
  width: 14%;
`;
const TITLE_5 = styled(TITLE)`
  width: 14.5%;
`;
const TITLE_6 = styled(TITLE)`
  width: 14.5%;
`;
const TITLE_7 = styled(TITLE)`
  width: 14.5%;
`;
const TITLE_8 = styled(TITLE)`
  width: 10%;
`;
const TITLE_9 = styled(TITLE)`
  cursor: pointer;
  justify-content: flex-end;
`;
const HeartBtn = styled.div`
  display: flex;
`;

export default LeaderCard;

type Props = {};
