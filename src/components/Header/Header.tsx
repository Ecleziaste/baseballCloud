import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  TRIANGLE_ARROW_SVG,
  LOGO_0_SVG,
  LOGO_1_SVG,
  LOGO_2_SVG,
  LOGO_3_SVG,
} from "../../assets/svg/paths";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { signOut } from "../../store/user/actions";
import { selectCurrentProfile } from "../../store/current_profile/selectors";
import Dropdown from "../Dropdown";
import DefaultIcon from "../DefaultIcon";
import DUMMY from "../../assets/images/avatar_dummy.png";
import { setProfile } from "../../store/profile/actions";

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const current_profile = useSelector(selectCurrentProfile)!;
  const user = useSelector(selectUser);
  const [menu, setMenu] = useState(false);
  const toggleMenu = (value: boolean) => {
    setMenu(value);
  };
  const avatar = current_profile?.avatar;
  const avatar2 = "http://avatars.mitosa.net/warcraft/039.jpg";

  const menuEl = useRef<HTMLDivElement>(null);

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
      <LogoContainer
        to="/profile"
        onClick={() => dispatch(setProfile(current_profile.id))}
      >
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
              <MenuLink to="/leaderboard">Leaderboard</MenuLink>
              <MenuLink to="/network">Network</MenuLink>
            </Nav>
          </NavBar>
          <UserWrapper>
            <User>
              <AvatarWrapper>
                <ProfileLink
                  to="/profile"
                  onClick={() => dispatch(setProfile(current_profile.id))}
                >
                  <Avatar $avatar={avatar || DUMMY}></Avatar>
                </ProfileLink>
              </AvatarWrapper>
              <ProfileButton onClick={() => toggleMenu(!menu)}>
                <UserName>
                  {`${current_profile?.first_name || "Profile"} ${
                    current_profile?.last_name || "Name"
                  }`}
                </UserName>
                <DefaultIcon
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  d={TRIANGLE_ARROW_SVG}
                />
              </ProfileButton>
              {menu && (
                <Dropdown
                  onSelect={() => {}}
                  options={[]}
                  refer={menuEl}
                  handleSelect={() => {}}
                  renderElement={() => (
                    <>
                      <ProfileScreenLink
                        to="/profile"
                        onClick={() => {
                          dispatch(setProfile(current_profile.id));
                          toggleMenu(!menu);
                        }}
                      >
                        <SelectableText>My Profile</SelectableText>
                      </ProfileScreenLink>
                      <ExitLink onClick={() => dispatch(signOut())} to="/login">
                        <SelectableText>Log Out</SelectableText>
                      </ExitLink>
                    </>
                  )}
                ></Dropdown>
              )}
            </User>
          </UserWrapper>
        </UserMenu>
      )}
    </Container>
  );
};

const ProfileScreenLink = styled(Link)`
  text-decoration: none;
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
const MenuLink = styled(NavLink)`
  padding: 0 8px;
  color: #788b99;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  &:hover {
    &::after {
      border-bottom: 4px solid #cbcccd;
      content: "";
      display: block;
      left: 0;
      right: 0;
      position: absolute;
      bottom: -16px;
    }
  }
  &.active {
    &::after {
      border-bottom: 4px solid #788b99;
      content: "";
      display: block;
      left: 0;
      right: 0;
      position: absolute;
      bottom: -16px;
    }
  }
  &:hover {
    &::after {
      border-bottom: 4px solid #cbcccd;
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
  margin-right: 2px;
`;
const ProfileLink = styled(Link)`
  cursor: pointer;
`;
const Avatar = styled.div<{ $avatar: string | null | undefined }>`
  background-image: url(${(props) => props.$avatar});
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
const SelectableText = styled.option`
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

export default Header;

type Props = {};
