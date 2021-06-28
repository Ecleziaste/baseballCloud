import React from "react";
import styled from "styled-components";

const UnFavourite: React.FC<Props> = () => {
  return (
    <HeartEmptyBox className="fa fa-heart-o">
      <HeartEmpty></HeartEmpty>
    </HeartEmptyBox>
  );
};

const HeartEmptyBox = styled.span`
  display: flex;
  color: #48bbff;
`;
const HeartEmpty = styled.i`
  content: "\f08a";
`;

export default UnFavourite;

type Props = {};
