import React from "react";
import styled from "styled-components";
import {
  TRIANGLE_ARROW_ICON,
  LOGO_0_ICON,
  LOGO_1_ICON,
  LOGO_2_ICON,
  LOGO_3_ICON,
} from "../../assets/svg/paths";
// import { useSelector, shallowEqual } from "react-redux";

const Header: React.FC<Props> = () => {
  const user = true;

  return (
    <Container>
      <LogoContainer>
        <div>
          <Span>
            <Svg width="198" height="28" viewBox="0 0 198 28">
              <G>
                <Path fill="#6CB830" d={LOGO_0_ICON}></Path>
                <Path fill="#788B99" d={LOGO_1_ICON}></Path>
                <Path fill="#788B99" d={LOGO_2_ICON}></Path>
                <Path fill="#6CB830" fill-rule="nonzero" d={LOGO_3_ICON}></Path>
              </G>
            </Svg>
          </Span>
        </div>
      </LogoContainer>
      {user && (
        <UserMenu>
          <NavBar>
            <Nav>
              <Link href="#">Leaderboard</Link>
              <Link href="#">Network</Link>
            </Nav>
          </NavBar>
          <UserWrapper>
            <User>
              <AvatarWrapper>
                <ProfileLink href="#">
                  <Avatar></Avatar>
                </ProfileLink>
              </AvatarWrapper>
              <ProfileButton>
                <UserName>User Name</UserName>
                <Span>
                  <Svg width="8" height="5" viewBox="0 0 8 5">
                    <Path d={TRIANGLE_ARROW_ICON}></Path>
                  </Svg>
                </Span>
              </ProfileButton>
            </User>
          </UserWrapper>
        </UserMenu>
      )}
    </Container>
  );
};

const Container = styled.div`
  /* height: 45px; */
  padding: 8px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const LogoContainer = styled.a`
  width: 198px;
  height: 28px;
  justify-content: space-evenly;
  border: 1px solid tomato;
`;
const UserMenu = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const Link = styled.a`
  padding: 0 8px;
  color: #788b99;
  cursor: pointer;
  text-decoration: none;
  /* position: relative; */
`;
const UserWrapper = styled.div``;
const User = styled.div`
  padding-left: 8px;
  display: flex;
  flex-flow: row wrap;
`;
const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ProfileLink = styled.a`
  cursor: pointer;
`;
const Avatar = styled.div`
  background-image: url("https://baseballcloud-staging-assets.s3.amazonaws.com/profile/469/size_100_100_ac9db14b-205c-42aa-b0f1-0a3dad86f414.png");
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
`;
const ProfileButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
  cursor: pointer;
  color: #788b99;
  padding: 7px 19px 10px 18px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  background: transparent;
  border: none;
  &:hover {
    background: #eee;
  }
`;
const UserName = styled.div``;
const G = styled.g`
  fill: none;
  fill-rule: evenodd;
`;
const Span = styled.span`
  display: flex;
  align-self: center;
  margin-left: 6px;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const Path = styled.path``;

export default Header;

type Props = {};
