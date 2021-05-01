import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Textarea from 'components/atoms/Textarea';
import HeadingTemplate from 'templates/HeadingTemplate';

const StyledContactWrapper = styled.div`
  padding-top: 55px;
`;

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 100px 0 30px 0;

  button {
    margin-top: 30px;
    align-self: flex-start;
  }
`;

const StyledInput = styled(Input)`
  margin-bottom: 15px;
  width: 300px;
`;
const StyledTextarea = styled(Textarea)``;

const headingData = {
  title: 'Kontakt',
  description:
    'Contact description lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores porro eius a,recusandae itaque',
};

const Contact = () => (
  <PageTemplate>
    <StyledContactWrapper>
      <HeadingTemplate headingData={headingData} />
      <StyledContactForm>
        <StyledInput type="email" placeholder="Mail" />
        <StyledInput type="text" placeholder="Tytuł" />
        <StyledTextarea placeholder="Wiadomość" />
        <Button type="submit">Wyślij</Button>
      </StyledContactForm>
    </StyledContactWrapper>
  </PageTemplate>
);

export default Contact;
