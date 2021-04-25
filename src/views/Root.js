import React from 'react';
import MainTemplate from 'templates/MainTemplate';

import Button from 'components/atoms/Button';
import Logo from 'components/atoms/Logo';
import SideBar from 'components/organisms/SideBar';

const Root = () => (
  <>
    <MainTemplate>
      <Button>Pobierz CV</Button>
      <Button secondary>Pobierz CV</Button>
      <Logo>R</Logo>
      <br />
      <SideBar />
    </MainTemplate>
  </>
);
export default Root;
