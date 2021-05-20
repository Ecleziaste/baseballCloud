import React from "react";
import styled from "styled-components";
// import { useSelector, shallowEqual } from "react-redux";

const Header: React.FC<Props> = () => {
  const user = true;

  return (
    <Container>
      <LogoContainer></LogoContainer>
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
                  <Svg>
                    <Path></Path>
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
const Span = styled.span`
  display: flex;
  align-self: center;
  margin-left: 6px;
`;
const Svg = styled.svg`
  fill: currentColor;
  width: 8px;
  height: 5px;
  viewbox: 0 0 8px 5px;
`;
const Path = styled.path`
  fill: rgb(120, 139, 153);
  fill-rule: evenodd;
  d: path(
    "M 8 0.5 c 0 -0.273 -0.227 -0.5 -0.5 -0.5 h -7 C 0.227 0 0 0.227 0 0.5 c 0 0.133 0.055 0.258 0.148 0.352 l 3.5 3.5 A 0.497 0.497 0 0 0 4 4.5 a 0.497 0.497 0 0 0 0.352 -0.148 l 3.5 -3.5 A 0.497 0.497 0 0 0 8 0.5 Z"
  );
`;

export default Header;

type Props = {};
