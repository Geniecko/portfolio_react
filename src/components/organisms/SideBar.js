import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import userIcon from 'assets/icon/userIcon.svg';
import bulbIcon from 'assets/icon/bulbIcon.svg';
import planeIcon from 'assets/icon/planeIcon.svg';
import copyrightIcon from 'assets/icon/copyrightIcon.svg';
import NavIcon from 'components/atoms/NavIcon';
import Logo from 'components/atoms/Logo';
import Paragraph from 'components/atoms/Paragraph';

const aniSideBarMobile = keyframes`
   0% { height: 0; }
  100% { height: 100vh;}
`;

const aniSideBarMobileLandscape = keyframes`
   0% { width: 0; }
  100% { width: 100vw;}
`;

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
  z-index: 100;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 100vw;
    height: 60px;
    display: block;
  }
`;

const StyledLogoLinkWrapper = styled.div`
  margin: 5vh 0 10vh 0;

  @media (max-width: 768px) {
    margin: 0 0 0 30px;
  }
`;

const StyledLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.3;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.dark};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    display: ${({ openMobile }) => (openMobile ? 'flex' : 'none')};
    animation: ${aniSideBarMobile} 1s ease forwards;
  }

  @media (max-height: 450px) and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: ${({ theme }) => theme.dark};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 30px;
    display: ${({ openMobile }) => (openMobile ? 'flex' : 'none')};
    animation: ${aniSideBarMobileLandscape} 1s ease forwards;
  }
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

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-height: 500px) and (min-width: 768px) {
    display: none;
  }
`;

const StyledParagraphFooter = styled(Paragraph)`
  color: ${({ theme }) => theme.white};
  font-size: 9px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledCopyRight = styled(StyledParagraphFooter)`
  color: ${({ theme }) => theme.secondColor};
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

const StyledHamburgerNav = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  top: 20px;
  right: 30px;

  div {
    margin-bottom: 5px;
    width: 30px;
    height: 3px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.white};
    transition: 0.5s;
  }

  .line1 {
    transform: ${({ openMobile }) =>
      openMobile ? 'rotate(45deg) translate(-3px, 14.5px)' : 'rotate(0) translate(0, 0)'};
  }

  .line2 {
    opacity: ${({ openMobile }) => (openMobile ? '0' : '1')};
  }

  .line3 {
    transform: ${({ openMobile }) =>
      openMobile ? 'rotate(-45deg) translate(-3px, -14.5px)' : 'rotate(0) translate(0, 0)'};
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-height: 450px) and (min-width: 768px) {
    display: block;
    left: 42%;
    top: 85%;
    z-index: 100;
  }
`;

const SideBar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <StyledNavWrapper>
      <StyledLogoLinkWrapper>
        <Logo as={NavLink} to="/">
          R
        </Logo>
      </StyledLogoLinkWrapper>
      <StyledLinkList openMobile={openMobile}>
        <li>
          <NavIcon
            exact
            as={NavLink}
            icon={userIcon}
            to="/"
            activeclass="active"
            onClick={() => setOpenMobile(false)}
            openMobile={openMobile}
          >
            <StyledTextNav>O MNIE</StyledTextNav>
          </NavIcon>
        </li>
        <li>
          <NavIcon
            as={NavLink}
            icon={bulbIcon}
            to="/portfolio"
            activeclass="active"
            onClick={() => setOpenMobile(false)}
            openMobile={openMobile}
          >
            <StyledTextNav> PORTFOLIO</StyledTextNav>
          </NavIcon>
        </li>
        <li>
          <NavIcon
            as={NavLink}
            icon={planeIcon}
            to="/contact"
            activeclass="active"
            onClick={() => setOpenMobile(false)}
            openMobile={openMobile}
          >
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

      <StyledHamburgerNav
        id="burger"
        onClick={() => setOpenMobile(!openMobile)}
        openMobile={openMobile}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </StyledHamburgerNav>
    </StyledNavWrapper>
  );
};

export default SideBar;
