import React from "react";
import styled from "styled-components";
import { ROUND_ARROW } from "../../../../../assets/svg/paths";

const Appeal: React.FC<Props> = () => {
  return (
    <Container>
      <Content>
        <Image>
          <Svg width="52" height="47" viewBox="0 0 52 47">
            <Path fill="#48BBFF" fill-rule="nonzero" d={ROUND_ARROW}></Path>
          </Svg>
        </Image>
        <Title>Your Account</Title>
        <Text>
          Changing your profile options lets you control how others see you and
          your profile. These settings include things like your name, personal
          info and school.
        </Text>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 420px;
`;
const Image = styled.div`
  display: block;
  margin-bottom: 17px;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const Path = styled.path``;
const Title = styled.div`
  line-height: 1.25;
  text-align: center;
  color: #667784;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const Text = styled.div`
  font-size: 16px;
  color: #667784;
  text-align: center;
`;

export default Appeal;

type Props = {};
