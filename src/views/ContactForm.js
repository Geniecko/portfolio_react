/* eslint-disable react/state-in-constructor */
import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import ContactIcon from 'components/atoms/ContactIcon';
import facebookIcon from 'assets/icon/facebookIcon.svg';
import githubIcon from 'assets/icon/githubIcon.svg';
import mailIcon from 'assets/icon/mail_icon.svg';
import Paragraph from 'components/atoms/Paragraph';

const StyledContactWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: 0px;
  }
`;

const StyledContactIcons = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  a:last-child{
    
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 50px;

  span {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const headingData = {
  title: 'Kontakt',
  description: 'Jeśli chcesz się ze mną skontakować możesz to zrobić poprzez Facebooka lub na podany adres e-mail.',
};

const ContactForm = () => (
  <PageTemplate>
    <StyledContactWrapper>
      <HeadingTemplate title={headingData.title} description={headingData.description} />
          <StyledContactIcons>
            <a href="mailto:radoslawkania09@gmail.com" target="_blank" rel="noreferrer">
              <ContactIcon icon={mailIcon}/>
            </a>
            <a href="https://www.facebook.com/Raadeek">
              <ContactIcon icon={facebookIcon} target="_blank" rel="noreferrer" />
            </a>
            <a href="https://github.com/Geniecko" target="_blank" rel="noreferrer">
              <ContactIcon icon={githubIcon} />
            </a>
          </StyledContactIcons>
          <StyledParagraph>
            <span>Mail:</span> radoslawkania09@gmail.com
          </StyledParagraph>
    </StyledContactWrapper>
  </PageTemplate>
);

export default ContactForm;
