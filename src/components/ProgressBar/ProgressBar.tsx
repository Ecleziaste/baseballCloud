import React from "react";
import styled from "styled-components";

const ProgressBar: React.FC<Props> = ({ title, value }) => {
  return (
    <div>
      <Record>
        <Info>
          <Text>{title}</Text>
          <TextNumber>{value || "N/A"}</TextNumber>
        </Info>
        <Bar>
          <Svg viewBox="0 0 100 1" preserveAspectRatio="none">
            <PathTrail></PathTrail>
            <PathLine $value={value}></PathLine>
          </Svg>
        </Bar>
      </Record>
    </div>
  );
};

const Record = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 0 0;
  width: 300px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Text = styled.div`
  display: flex;
  color: #667784;
  font-size: 16px;
`;
const TextNumber = styled(Text)`
  font-weight: 600;
`;
const Bar = styled.div`
  display: flex;
  max-width: 100%;
  height: 4px;
`;
const Svg = styled.svg`
  width: 100%;
  height: 100%;
  vertical-align: top;
`;
const PathTrail = styled.path`
  d: path("M 0.5 0.5 L 99.5 0.5");
  stroke-linecap: round;
  stroke: rgb(239, 241, 243);
  stroke-width: 1;
  fill-opacity: 0;
`;
const PathLine = styled.path<{ $value: string }>`
  d: path("M 0.5 0.5 L 99.5 0.5");
  stroke-linecap: round;
  stroke: rgb(255, 208, 26);
  stroke-width: ${(props) => props.$value || "1"};
  fill-opacity: 0;
  stroke-dasharray: 0px, 100px;
  stroke-dashoffset: 0px;
  transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s,
    stroke 0.3s linear 0s, 0.06s;
`;

export default ProgressBar;

type Props = { title: string; value: string };
