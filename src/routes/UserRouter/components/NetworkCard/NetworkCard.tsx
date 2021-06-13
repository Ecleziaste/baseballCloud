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
        <TITLE_1>
          <Name>Player Name</Name>
        </TITLE_1>
      </TitleWrapper>
      <TITLE_2>Sessions</TITLE_2>
      <TITLE_3>School</TITLE_3>
      <TITLE_4>Teams</TITLE_4>
      <TITLE_5>Age</TITLE_5>
      <TITLE_6>
        <HeartBtn onClick={() => setHeartBtn(!heartBtn)}>
          {heartBtn ? <Favourite /> : <UnFavourite />}
        </HeartBtn>
      </TITLE_6>
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
const TITLE = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TitleWrapper = styled(TITLE)`
  padding-left: 6px;
  width: 19%;
`;
const TITLE_1 = styled(TITLE)``;
const TITLE_2 = styled(TITLE)`
  width: 10%;
`;

const TITLE_3 = styled(TITLE)`
  width: 23%;
`;
const TITLE_4 = styled(TITLE)`
  width: 23%;
`;
const TITLE_5 = styled(TITLE)`
  width: 15%;
`;
const TITLE_6 = styled(TITLE)`
  width: 8%;
  cursor: pointer;
`;
const HeartBtn = styled.div`
  display: flex;
`;

export default LeaderCard;

type Props = {};
