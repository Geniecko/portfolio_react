import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Avatar from 'components/atoms/Avatar';

const StyledAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledAboutTextBox = styled.div`
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  h2 {
    color: ${({ theme }) => theme.lightgray};
    position: relative;
    margin-bottom: 30px;

    :after {
      position: absolute;
      bottom: -15px;
      left: 0;
      content: '';
      width: 60px;
      height: 6px;
      background-color: ${({ theme }) => theme.secondColor};
      overflow: hidden;
      border-radius: 3px;
    }

    :before {
      position: absolute;
      bottom: -15px;
      left: 55px;
      content: '';
      width: 85px;
      height: 6px;
      background-color: ${({ theme }) => theme.lightgray};
      border-radius: 3px;
    }

    span {
      color: ${({ theme }) => theme.secondColor};
    }
  }
`;

const StyledAboutButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 320px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  span {
    color: ${({ theme }) => theme.dark};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.bold};
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 30px;
  max-width: 600px;
`;

const StyledSkillsWrapper = styled.div`
  margin-top: 52px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledSkillsList = styled.ul`
  margin: 30px 0;
  list-style: none;
  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 7px;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondColor};
    }
  }
`;

const skillsContent = [
  {
    id: 1,
    content: 'Znajomość HTML, CSS (SASS&BEM), RWD',
  },
  {
    id: 2,
    content: 'Znajmość JavaScript',
  },
  {
    id: 3,
    content: 'Podstawowa znajomość TypeScript',
  },
  {
    id: 4,
    content: 'Znajomość React',
  },
  {
    id: 5,
    content: 'Znajomość Webpack',
  },
  {
    id: 6,
    content: 'Znajomość systemu kontroli wersji Git oraz narzędzia GitLab',
  },
  {
    id: 7,
    content: 'Znajomość i umiejętność obsługi systemu zarządzania treścią TYPO3',
  },
  {
    id: 8,
    content: 'Umiejętność obsługi programów graficznych (Ilustrator, Photoshop, Figma, AdobeXD, CorelDraw)',
  },
];

const Home = () => (
  <PageTemplate>
    <StyledAboutWrapper>
      <StyledAboutTextBox>
        <h2>
          <span>Frontend </span>Developer
        </h2>
        <StyledHeading big blue>
          CZEŚĆ! <span>Jestem Radek!</span>
        </StyledHeading>
        <StyledParagraph>
          Od kilku lat interesuję się tworzeniem stron oraz aplikacji internetowych. Przez osiem miesięcy pracowałem na stanowisku Frontend Developer, a dodatkowo ostatni czas poświęciłem na pogłębianiu wiedzy z Reacta, JavaScript, TypeScript oraz odświeżeniu swojego portfolio.
        </StyledParagraph>
        <StyledAboutButtonBox>
          {/* <Button as={Link} to="/files/Radosław_Kania_CV.pdf" target="_blank" download secondary>
            Pobierz CV
          </Button> */}
          <Button as={Link} to="/contact" secondary>
            Kontakt
          </Button>
        </StyledAboutButtonBox>
      </StyledAboutTextBox>
      <Avatar />
    </StyledAboutWrapper>
    <StyledSkillsWrapper>
      <Heading small>Technologie i umiejętności</Heading>
      <StyledSkillsList>
        {skillsContent.map((item) => (
          <li key={item.id}>
            <Paragraph>{item.content}</Paragraph>
          </li>
        ))}
      </StyledSkillsList>
      <Button as={Link} to="/portfolio">
        Portfolio
      </Button>
    </StyledSkillsWrapper>
  </PageTemplate>
);

export default Home;
