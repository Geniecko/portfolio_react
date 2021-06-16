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
import yourHome from 'assets/image/your_home.jpg';
import yourHomeMobile from 'assets/image/your_home_mobile.jpg';
import minutnik from 'assets/image/minutnik.jpg';
import tikTakToo from 'assets/image/tik_tak_too.jpg';
import taskManager from 'assets/image/task_manager.jpg';
import jacekKania from 'assets/image/jacek_kania.jpg';
import jacekKaniaMobile from 'assets/image/jacek_kania_mobile.jpg';
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
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS), JS, jQuery',
    siteUrl: 'https://heroesgym.netlify.app',
    image: heroesGym,
    imageMobile: heroesGymMobile,
  },
  {
    id: 2,
    title: 'Your Home',
    content:
      'Prosta strona oparta na layout z https://themeforest.net/. Grafika przygotowana w programie Photoshop, strona posiada RWD oraz lekkie animacje.',
    technologiesContent: 'Użyte technologie: HTML, CSS',
    siteUrl: 'https://yourhomeproject.netlify.app',
    image: yourHome,
    imageMobile: yourHomeMobile,
  },
  {
    id: 3,
    title: 'Jacek Kania',
    content:
      'Pierwsza strona, którą stworzyłem podczas mojej nauki. Layout strony oraz wszystkie grafiki zrobiłem samodzielnie. Strona posiada RWD.',
    technologiesContent: 'Użyte technologie: HTML, CSS, JS',
    siteUrl: 'https://jacek-kania.netlify.app',
    image: jacekKania,
    imageMobile: jacekKaniaMobile,
  },
  {
    id: 4,
    title: 'Portfolio',
    content:
      'Portfolio, które właśnie oglądasz jest najbardziej rozbudowanym projektem, który stworzyłem w ReactJS. Postanowiłem użyc Reacta ze względu na routing. Za pomocą CSSTransition udało mi się stworzyć animowane przejścia pomiędzy podstronami. Od samego początku tworzenia aplikacji używałem narzędzi takich jak Eslint oraz Prettier, które zkonfigurowałem w plikach .eslintrc oraz .prettierrc. Struktura plików jest zbudowana zgodnie z zasadą Atomic Design Pattern. Strone stylowałem za pomocą bilblioteki styled-components. Portfolio jest w pełni responsywne. Layout stworzony w programie Figma. ',
    technologiesContent:
      'Użyte technologie: React, React-Router, Styled-Components, EmailJS, CSSTransition, Eslint, Prettier',
    siteUrl: '/',
    image: portfolioReact,
    imageMobile: portfolioReactMobile,
  },
];

const appProjects = [
  {
    id: 1,
    title: 'Minutnik do jajek',
    content:
      'Aplikacja webowa, która odliczy nam czas do ugotowania jajka. Zaznacz sposób ugotowania jajka, a następnie kliknij przycisk "START". Możesz zresetować odliczanie, klikajac przycisk "ZRESETUJ" lub też zatrzymać minutnik a następnie go wyzerować kilkając przycisk "WYZERUJ".',
    technologiesContent: 'Użyte technologie: HTML, CSS, JS',
    siteUrl: 'https://minutnikproject.netlify.app',
    image: minutnik,
  },
  {
    id: 2,
    title: 'Gra w kółko i krzyżyk',
    content:
      'Aplikacja webowa, a dokładnie gra w kółko i krzyżyk stworzona na siatce GRID. Aby zagrać należy zaznaczyć kółko lub krzyżyk, a następnie kliknąć przycisk "NOWA GRA". Aby przerwać grę należy kilknąć przycisk "KONIEC".',
    technologiesContent: 'Użyte technologie: HTML, CSS, JS',
    siteUrl: 'https://tiktaktoo.netlify.app',
    image: tikTakToo,
  },
  {
    id: 3,
    title: 'Task manager',
    content:
      'Projekt TODO APP stworzony podczas nauki React. Aplikacja stworzona z widokiem na desktop - brak RWD.',
    technologiesContent: 'Użyte technologie: HTML, CSS, React, React-Router',
    siteUrl: 'https://geniecko.github.io/react_taskmanager/',
    image: taskManager,
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
