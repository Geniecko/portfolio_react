import React from 'react';
import styled from 'styled-components';
import userIcon from 'assets/icon/userIcon.svg';
import bulbIcon from 'assets/icon/bulbIcon.svg';
import planeIcon from 'assets/icon/planeIcon.svg';
import NavIcon from 'components/atoms/NavIcon';
import Logo from 'components/atoms/Logo';

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 170px;
  background-color: ${({ theme }) => theme.dark};
`;

const SideBar = () => (
  <StyledNavWrapper>
    <Logo>R</Logo>
    <NavIcon active="true " icon={userIcon}>
      O MNIE
    </NavIcon>
    <NavIcon icon={bulbIcon}>PORTFOLIO</NavIcon>
    <NavIcon icon={planeIcon}>KONTAKT</NavIcon>
  </StyledNavWrapper>
);

export default SideBar;
