import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import userIcon from 'assets/icon/userIcon.svg';
import bulbIcon from 'assets/icon/bulbIcon.svg';
import planeIcon from 'assets/icon/planeIcon.svg';
import copyrightIcon from 'assets/icon/copyrightIcon.svg';
import NavIcon from 'components/atoms/NavIcon';
import Logo from 'components/atoms/Logo';
import Paragraph from 'components/atoms/Paragraph';

const StyledNavWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 170px;
  background-color: ${({ theme }) => theme.dark};
  z-index: 999;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.4);
`;

const StyledLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLogoLink = styled(Logo)`
  margin: 5vh 0 10vh 0;
`;

const StyledTextNav = styled.div`
  position: absolute;
  bottom: 10px;
  color: ${({ theme }) => theme.white};
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.semiBold};
`;

const StyledFooter = styled.div`
  color: yellow;
  margin-top: auto;
  margin-bottom: 2.5vh;
`;

const StyledParagraphFooter = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
  font-size: 10px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.semiBold};
`;

const StyledCopyRight = styled(StyledParagraphFooter)`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.extraBold};
  margin-bottom: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span img {
    width: 20px;
    margin-right: 7px;
  }
`;

const SideBar = () => (
  <StyledNavWrapper>
    <StyledLogoLink as={NavLink} to="/">
      R
    </StyledLogoLink>
    <StyledLinkList>
      <li>
        <NavIcon exact as={NavLink} icon={userIcon} to="/" activeclass="active">
          <StyledTextNav>O MNIE</StyledTextNav>
        </NavIcon>
      </li>
      <li>
        <NavIcon as={NavLink} icon={bulbIcon} to="/portfolio" activeclass="active">
          <StyledTextNav> PORTFOLIO</StyledTextNav>
        </NavIcon>
      </li>
      <li>
        <NavIcon as={NavLink} icon={planeIcon} to="/contact" activeclass="active">
          <StyledTextNav> KONTAKT</StyledTextNav>
        </NavIcon>
      </li>
    </StyledLinkList>
    <StyledFooter>
      <StyledCopyRight>
        <span>
          <img src={copyrightIcon} alt="" />
        </span>
        2021
      </StyledCopyRight>
      <StyledParagraphFooter>Radosław Kania</StyledParagraphFooter>
    </StyledFooter>
  </StyledNavWrapper>
);

export default SideBar;
