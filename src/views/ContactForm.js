/* eslint-disable react/state-in-constructor */
import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Textarea from 'components/atoms/Textarea';
import HeadingTemplate from 'templates/HeadingTemplate';
import { dataEmail } from 'dataEmail/dataEmail';
import ContactModal from 'components/atoms/ContactModal';
import ContactIcon from 'components/atoms/ContactIcon';
import facebookIcon from 'assets/icon/facebookIcon.svg';
import githubIcon from 'assets/icon/githubIcon.svg';
import Paragraph from 'components/atoms/Paragraph';

const StyledContactWrapper = styled.div`
  padding-top: 55px;
`;

const StyledFormAndIconFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 200px;
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

const StyledContactIcon = styled.div`
  margin-top: 100px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 50px;

  span {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const headingData = {
  title: 'Kontakt',
  description: 'Zachęcam do kontaktu poprzez formularz lub na podany adres e-mail.   ',
};

class ContactForm extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = (e, sendEmail) => {
    sendEmail(e);
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm(dataEmail.serviceID, dataEmail.templateID, e.target, dataEmail.userID).then(
        (result) => {},
        (error) => {},
      );
      e.target.reset();
    }

    return (
      <PageTemplate>
        <StyledContactWrapper>
          <HeadingTemplate title={headingData.title} description={headingData.description} />
          <StyledFormAndIconFlexBox>
            <StyledContactForm onSubmit={(e) => this.handleClick(e, sendEmail)}>
              <StyledInput type="email" placeholder="Email" name="email" required />
              <StyledInput
                type="text"
                placeholder="Tytuł"
                name="title"
                required
                minLength="3"
                maxLenghit="50"
              />
              <StyledTextarea placeholder="Wiadomość" name="message" required minLength="10" />
              <Button type="submit">Wyślij</Button>
            </StyledContactForm>
            <div>
              <StyledContactIcon>
                <a href="https://www.facebook.com/Raadeek">
                  <ContactIcon icon={facebookIcon} target="_blank" rel="noreferrer" />
                </a>
                <a href="https://github.com/Geniecko" target="_blank" rel="noreferrer">
                  <ContactIcon icon={githubIcon} />
                </a>
              </StyledContactIcon>
              <StyledParagraph>
                <span>Mój email:</span> radoslawkania09@gmail.com
              </StyledParagraph>
            </div>
          </StyledFormAndIconFlexBox>
        </StyledContactWrapper>
        {isOpen && <ContactModal closeModal={this.closeModal} />}
      </PageTemplate>
    );
  }
}

export default ContactForm;
