import React from "react";
import styled from "styled-components";

const Favourite: React.FC<Props> = () => {
  return (
    <HeartFilledBox className="fa fa-heart">
      <HeartFilled></HeartFilled>
    </HeartFilledBox>
  );
};

const HeartFilledBox = styled.span`
  display: flex;
  color: #48bbff;
`;
const HeartFilled = styled.i`
  content: "\f004";
`;

export default Favourite;

type Props = {};
