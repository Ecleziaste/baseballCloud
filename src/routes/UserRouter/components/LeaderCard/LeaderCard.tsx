import React, { useState } from "react";
import styled from "styled-components";

const LeaderCard: React.FC<Props> = () => {
  const [heartBtn, setHeartBtn] = useState<boolean>(false);

  return (
    <CardContent>
      <TitleWrapper>
        <TABLE_TITLE_1>1</TABLE_TITLE_1>
      </TitleWrapper>
      <TABLE_TITLE_2>Batter Name</TABLE_TITLE_2>
      <TABLE_TITLE_3>Age</TABLE_TITLE_3>
      <TABLE_TITLE_4>School</TABLE_TITLE_4>
      <TABLE_TITLE_5>Teams</TABLE_TITLE_5>
      <TABLE_TITLE_6>Exit Velocity</TABLE_TITLE_6>
      <TABLE_TITLE_7>Launch Angle</TABLE_TITLE_7>
      <TABLE_TITLE_8>Distance</TABLE_TITLE_8>
      <TABLE_TITLE_9>
        <HeartBtn onClick={() => setHeartBtn(!heartBtn)}>
          {heartBtn ? (
            <HeartFilledBox className="fa fa-heart">
              <HeartFilled></HeartFilled>
            </HeartFilledBox>
          ) : (
            <HeartEmptyBox className="fa fa-heart-o">
              <HeartEmpty></HeartEmpty>
            </HeartEmptyBox>
          )}
        </HeartBtn>
      </TABLE_TITLE_9>
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
`;
const TABLE_TITLE = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TitleWrapper = styled(TABLE_TITLE)`
  padding-left: 6px;
  width: 6%;
`;
const TABLE_TITLE_1 = styled(TABLE_TITLE)``;
const TABLE_TITLE_2 = styled(TABLE_TITLE)`
  width: 14%;
  cursor: pointer;
`;
const TABLE_TITLE_3 = styled(TABLE_TITLE)`
  width: 5%;
`;
const TABLE_TITLE_4 = styled(TABLE_TITLE)`
  width: 14%;
`;
const TABLE_TITLE_5 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_6 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_7 = styled(TABLE_TITLE)`
  width: 14.5%;
`;
const TABLE_TITLE_8 = styled(TABLE_TITLE)`
  width: 10%;
`;
const TABLE_TITLE_9 = styled(TABLE_TITLE)`
  cursor: pointer;
  justify-content: flex-end;
`;
const HeartBtn = styled.div`
  display: flex;
`;
const HeartEmptyBox = styled.span`
  display: flex;
  color: #48bbff;
`;
const HeartEmpty = styled.i`
  content: "\f08a";
`;
const HeartFilledBox = styled.span`
  display: flex;
  color: #48bbff;
`;
const HeartFilled = styled.i`
  content: "\f004";
`;

export default LeaderCard;

type Props = {};
