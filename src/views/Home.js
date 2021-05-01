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
`;

const StyledAboutTextBox = styled.div`
  margin-top: 55px;
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
      background-color: ${({ theme }) => theme.blue};
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
      color: ${({ theme }) => theme.blue};
    }
  }
`;

const StyledAboutButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 320px;
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
  width: 600px;
`;

const StyledSkillsWrapper = styled.div`
  margin-top: 100px;
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
      background-color: ${({ theme }) => theme.blue};
    }
  }
`;

const skillsContent = [
  'Znajomość HTML, CSS (SASS)',
  'Podstawowa znajmość JavaScript',
  'Podstawowa znajomość REACT',
  'Znajomość RWD',
  'Podstawowa obsługa narzędzia GIT',
  'Umiejętność obsługi programów graficznych (Adobe Photoshop, Adobe Ilustrator, Figma)',
  'Podstawowa znajomość WordPressa',
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse qui rem reprehenderit,
          quam quisquam repudiandae impedit quos nemo inventore nobis maiores fugiat eos voluptatum
          in delectus id perspiciatis? Nostrum.
        </StyledParagraph>
        <StyledAboutButtonBox>
          <Button as={Link} to="/files/example.pdf" target="_blank" download secondary>
            Pobierz CV
          </Button>
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
          <li>
            <Paragraph>{item}</Paragraph>
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
