import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  TRIANGLE_ARROW_SVG,
  LOGO_0_SVG,
  LOGO_1_SVG,
  LOGO_2_SVG,
  LOGO_3_SVG,
} from "../../assets/svg/paths";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { signOut } from "../../store/user/actions";
import { selectCurrentProfile } from "../../store/current_profile/selectors";

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const current_profile = useSelector(selectCurrentProfile);
  const user = useSelector(selectUser);
  const [menu, setMenu] = useState(false);
  const menuEl = useRef<HTMLDivElement>(null);
  const toggleMenu = (value: boolean) => {
    setMenu(value);
  };

  const handleClickOutside = (event: Event) => {
    if (menuEl.current && !menuEl.current.contains(event.target as Node)) {
      toggleMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Container>
      <LogoContainer to="profile">
        <Span>
          <Svg width="198" height="28" viewBox="0 0 198 28">
            <G>
              <Path fill="#6CB830" d={LOGO_0_SVG}></Path>
              <Path fill="#788B99" d={LOGO_1_SVG}></Path>
              <Path fill="#788B99" d={LOGO_2_SVG}></Path>
              <Path fill="#6CB830" fill-rule="nonzero" d={LOGO_3_SVG}></Path>
            </G>
          </Svg>
        </Span>
      </LogoContainer>
      {user && (
        <UserMenu>
          <NavBar>
            <Nav>
              <NavLink to="leaderboard">Leaderboard</NavLink>
              <NavLink to="network">Network</NavLink>
            </Nav>
          </NavBar>
          <UserWrapper>
            <User>
              <AvatarWrapper>
                <ProfileLink to="profile">
                  <Avatar></Avatar>
                </ProfileLink>
              </AvatarWrapper>
              <ProfileButton onClick={() => toggleMenu(!menu)}>
                <UserName>
                  {`${current_profile?.first_name} ${current_profile?.last_name}` ||
                    "Profile Name"}
                </UserName>
                <Span>
                  <Svg width="8" height="5" viewBox="0 0 8 5">
                    <Path d={TRIANGLE_ARROW_SVG}></Path>
                  </Svg>
                </Span>
              </ProfileButton>
              {menu && (
                <DropdownMenu ref={menuEl}>
                  <ProfileScreenLink to="profile">My Profile</ProfileScreenLink>
                  <ExitLink onClick={() => dispatch(signOut())} to="#">
                    Log Out
                  </ExitLink>
                </DropdownMenu>
              )}
            </User>
          </UserWrapper>
        </UserMenu>
      )}
    </Container>
  );
};

const DropdownMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 178px;
  position: absolute;
  top: 100%;
  right: -5px;
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 15%);
  border: solid 1px #ebebeb;
  z-index: 100;

  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    z-index: 100;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
  }
`;
const ProfileScreenLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  background: #fff;
  line-height: 1;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #788b99;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #ecf8ff;
  }
`;
const ExitLink = styled(ProfileScreenLink)``;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  /* overflow: hidden; */
`;
const LogoContainer = styled(Link)`
  cursor: pointer;
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
const NavLink = styled(Link)`
  padding: 0 8px;
  color: #788b99;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  &:hover {
    &:after {
      border-bottom: 4px solid #cbcccd;
      content: "";
      display: block;
      left: 0;
      right: 0;
      position: absolute;
      bottom: -16px;
    }
  }
`;
const UserWrapper = styled.div``;
const User = styled.div`
  padding-left: 8px;
  display: flex;
  flex-flow: row wrap;
  position: relative;
`;
const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ProfileLink = styled(Link)`
  cursor: pointer;
`;
const Avatar = styled.div`
  background-image: url("https://baseballcloud-staging-assets.s3.amazonaws.com/profile/469/size_100_100_be233dcd-3b5c-4e8c-affe-6cfdf10dec37.png");
  width: 32px;
  height: 32px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;

  border: 1px solid tomato;
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
const UserName = styled.div`
  margin-right: 6px;
`;
const G = styled.g`
  fill: none;
  fill-rule: evenodd;
`;
const Span = styled.span`
  display: flex;
  align-self: center;
`;
const Svg = styled.svg`
  fill: currentColor;
`;
const Path = styled.path``;

export default Header;

type Props = {};
