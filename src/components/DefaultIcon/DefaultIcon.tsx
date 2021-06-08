import React from "react";
import styled from "styled-components";

const DefaultIcon: React.FC<Props> = ({ width, height, viewBox, d }) => {
  return (
    <Span>
      <Svg width="8" height="5" viewBox="0 0 8 5">
        <Path d={d}></Path>
      </Svg>
    </Span>
  );
};

const Span = styled.span`
  display: flex;
  align-self: center;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const Path = styled.path``;

export default DefaultIcon;

type Props = { width: string; height: string; viewBox: string; d: string };
