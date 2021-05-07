import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import ContactIcon from 'components/atoms/ContactIcon';
import facebookIcon from 'assets/icon/facebookIcon.svg';
import githubIcon from 'assets/icon/githubIcon.svg';
import Paragraph from 'components/atoms/Paragraph';

const StyledContactWrapper = styled.div`
  padding-top: 55px;
`;

const StyledContactIcon = styled.div`
  margin-top: 100px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const headingData = {
  title: 'Kontakt',
  description:
    'Contact description lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores porro eius a,recusandae itaque',
};

const StyledParagraph = styled(Paragraph)`
  margin-top: 50px;

  span {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const Contact = () => (
  <PageTemplate>
    <StyledContactWrapper>
      <HeadingTemplate title={headingData.title} description={headingData.description} />
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
    </StyledContactWrapper>
  </PageTemplate>
);

export default Contact;
