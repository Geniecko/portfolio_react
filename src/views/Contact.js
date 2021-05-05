import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Textarea from 'components/atoms/Textarea';
import HeadingTemplate from 'templates/HeadingTemplate';
import ContactModal from 'components/atoms/ContactModal';
import { dataEmail } from 'dataEmail/dataEmail';

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

let isOpen = false;

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(dataEmail.serviceID, dataEmail.templateID, e.target, dataEmail.userID).then(
      (result) => {},
      (error) => {},
    );
    e.target.reset();
    isOpen = true;
  }

  return (
    <PageTemplate>
      <StyledContactWrapper>
        <HeadingTemplate title={headingData.title} description={headingData.description} />
        <StyledContactForm onSubmit={sendEmail}>
          <StyledInput type="email" placeholder="Email" name="email" />
          <StyledInput type="text" placeholder="Tytuł" name="title" />
          <StyledTextarea placeholder="Wiadomość" name="message" />
          <Button type="submit">Wyślij</Button>
        </StyledContactForm>
      </StyledContactWrapper>
      {isOpen && <ContactModal />}
    </PageTemplate>
  );
};

export default Contact;
