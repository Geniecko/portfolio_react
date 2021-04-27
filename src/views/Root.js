import React from 'react';
import MainTemplate from 'templates/MainTemplate';

import Button from 'components/atoms/Button';
import SideBar from 'components/organisms/SideBar';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Textarea from 'components/atoms/Textarea';
import Avatar from 'components/atoms/Avatar';

const Root = () => (
  <>
    <MainTemplate>
      <Button>Pobierz CV</Button>
      <Button secondary>Pobierz CV</Button>
      <Paragraph>Hello boys</Paragraph>
      <Heading>Hello</Heading>
      <Heading big>Hello</Heading>
      <br />
      <Input placeholder="Mail" />
      <br />
      <br />
      <Textarea placeholder="Message" />
      <br />
      <br />
      <Avatar />
      <br />
      <br />

      <SideBar />
    </MainTemplate>
  </>
);
export default Root;
