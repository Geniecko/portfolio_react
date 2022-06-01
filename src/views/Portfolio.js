import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import WebsiteCard from 'components/molecules/WebsiteCard';
import AppCard from 'components/molecules/AppCard';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

import heroesGym from 'assets/image/heroes_gym.jpg';
import heroesGymMobile from 'assets/image/heroes_gym_mobile.jpg';
import thomasAnderson from 'assets/image/thomas_anderson.jpg';
import thomasAndersonMobile from 'assets/image/thomas_anderson_mobile.jpg';
import justQuiz from 'assets/image/just_quiz.jpg';
import portfolioReact from 'assets/image/portfolio_react.jpg';
import portfolioReactMobile from 'assets/image/portfolio_react_mobile.jpg';

const StyledPortfolioWrapper = styled.div`
  padding-top: 55px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledProjectsWrapper = styled.div`
  margin-top: 150px;
`;

const StyledGitHubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 70px;
  h1 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 30px;
  }

  button {
    align-self: center;
  }
`;

const headingData = {
  title: 'Portfolio',
  description:
    'Poniżej znajduję się kilka projektów stworzonych w toku nauki. Zachęcam do zapoznania się oraz odwiedzenia mojego GitHuba. ',
};

const websiteProjects = [
  {
    id: 1,
    title: 'Heroes Gym',
    content:
      'Projekt strony w oparciu o layout z https://themeforest.net/. Przygotowanie grafik na strone w programie Photoshop. Projekt zawiera technikę RWD oraz jest oparty w większości na Flexboxie.',
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS), JS, jQuery, Photoshop',
    siteUrl: 'https://heroesgym.netlify.app',
    image: heroesGym,
    imageMobile: heroesGymMobile,
  },
  {
    id: 2,
    title: 'Thomas Anderson',
    content:
      'Wstępny layout strony stworzyłem w programie Figma oraz grafiki w programie Photoshop. Postanowiłem użyc przy tym projekcie uprzednio skonfigurowanego Webpacka ponieważ chciałem przetestować go w praktyce. W projekcie zdecydowałem się użyc preprocesora SASS w połączeniu z metodologią BEM. Strona posiada wersję mobilną i jest w pełni responsywna (Desktop First).',
    technologiesContent:
      'Użyte technologie: HTML, CSS(SASS & BEM), JavaScript, Webpack, Figma, Photoshop',
    siteUrl: 'https://thomasphotography.netlify.app',
    image: thomasAnderson,
    imageMobile: thomasAndersonMobile,
  },
  {
    id: 3,
    title: 'Portfolio',
    content:
      'Portfolio, które właśnie oglądasz jest najbardziej rozbudowanym projektem, który stworzyłem w ReactJS. Postanowiłem użyc Reacta ze względu na routing. Za pomocą CSSTransition udało mi się stworzyć animowane przejścia pomiędzy podstronami. Od samego początku tworzenia aplikacji używałem narzędzi takich jak Eslint oraz Prettier, które zkonfigurowałem w plikach .eslintrc oraz .prettierrc. Struktura plików jest zbudowana zgodnie z zasadą Atomic Design Pattern. Strone stylowałem za pomocą bilblioteki styled-components. Portfolio jest w pełni responsywne. Layout stworzony w programie Figma. ',
    technologiesContent:
      'Użyte technologie: React, React-Router, Styled-Components, EmailJS, CSSTransition, Eslint, Prettier, Figma, Photoshop',
    siteUrl: '/',
    image: portfolioReact,
    imageMobile: portfolioReactMobile,
  },
];

const appProjects = [
  {
    id: 1,
    title: 'Just Quiz',
    content:
      'Quiz stworzony w JS. Pytania, odpowiedzi pobierane są z pliku za pomocą metody fetch. Aplikacja nie jest połączona z bazą danych więc wyniki po odświeźeniu strony kasują się. Arkusze stylów pisane za pomocą preprocesora SASS oraz konwencji nazewnictwa BEM.',
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS & BEM), JS, Webpack, Figma',
    siteUrl: 'https://justquiz.netlify.app/',
    image: justQuiz,
  },
];

const Portfolio = () => (
  <PageTemplate center>
    <StyledPortfolioWrapper>
      <HeadingTemplate center title={headingData.title} description={headingData.description} />
      <StyledProjectsWrapper>
        {websiteProjects.map((item) => (
          <WebsiteCard
            title={item.title}
            content={item.content}
            technologiesContent={item.technologiesContent}
            siteUrl={item.siteUrl}
            image={item.image}
            imageMobile={item.imageMobile}
            key={item.id}
          />
        ))}

        {appProjects.map((item) => (
          <AppCard
            title={item.title}
            content={item.content}
            technologiesContent={item.technologiesContent}
            siteUrl={item.siteUrl}
            image={item.image}
            key={item.id}
          />
        ))}
        <StyledGitHubWrapper>
          <Heading blue small>
            Sprawdź mojego GitHuba
          </Heading>
          <Paragraph>
            Zapraszam na mojego GitHuba, znajdują sie tam wszystkie projekty przedstawione tutaj i
            nie tylko!
          </Paragraph>
          <a href="https://github.com/Geniecko" target="_blank" rel="noreferrer">
            <Button>GitHub</Button>
          </a>
        </StyledGitHubWrapper>
      </StyledProjectsWrapper>
    </StyledPortfolioWrapper>
  </PageTemplate>
);

export default Portfolio;
