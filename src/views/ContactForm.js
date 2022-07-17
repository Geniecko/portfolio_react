/* eslint-disable react/state-in-constructor */
import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import ContactIcon from 'components/atoms/ContactIcon';
import facebookIcon from 'assets/icon/facebookIcon.svg';
import githubIcon from 'assets/icon/githubIcon.svg';
import Paragraph from 'components/atoms/Paragraph';

const StyledContactWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: 0px;
  }
`;

const StyledFormAndIconFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 200px;
`;

const StyledContactIcon = styled.div`
  margin-top: 32px;
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
  description: 'Jeśli chcesz się ze mną skontakować możesz to zrobić poprzez Facebooka lub na podany adres e-mail.',
};

const ContactForm = () => (
  <PageTemplate>
    <StyledContactWrapper>
      <HeadingTemplate title={headingData.title} description={headingData.description} />
      <StyledFormAndIconFlexBox>
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
  </PageTemplate>
);

export default ContactForm;
