import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import WebsiteCard from 'components/molecules/WebsiteCard';
import AppCard from 'components/molecules/AppCard';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import LineBreak from 'components/atoms/LineBreak';

import heroesGym from 'assets/image/heroes_gym.jpg';
import heroesGymMobile from 'assets/image/heroes_gym_mobile.jpg';
import yourHome from 'assets/image/your_home.jpg';
import yourHomeMobile from 'assets/image/your_home_mobile.jpg';
import minutnik from 'assets/image/minutnik.jpg';
import tikTakToo from 'assets/image/tik_tak_too.jpg';
import taskManager from 'assets/image/task_manager.jpg';

const StyledPortfolioWrapper = styled.div`
  padding-top: 55px;
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
    'Portfolio description lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores porro eius a,recusandae itaque',
};

const websiteProjects = [
  {
    id: 1,
    title: 'Heroes Gym',
    content:
      'Projekt strony w oparciu o layout z https://themeforest.net/. Przygotowanie grafik na strone w programie Photoshop. Projekt zawiera technikę RWD oraz jest oparty w większości na Flexboxie',
    technologiesContent: 'Użyte technologie: HTML, CSS(SASS), JS, jQuery',
    siteUrl: 'https://youtube.com',
    image: heroesGym,
    imageMobile: heroesGymMobile,
  },
  {
    id: 2,
    title: 'Your Home',
    content:
      'Prosta strona oparta na layout z https://themeforest.net/. Grafika przygotowana w programie Photoshop, strona posiada RWD oraz lekkie animacje',
    technologiesContent: 'Użyte technologie: HTML, CSS',
    siteUrl: 'https://youtube.com',
    image: yourHome,
    imageMobile: yourHomeMobile,
  },
];

const appProjects = [
  {
    id: 1,
    title: 'Minutnik do jajek',
    content:
      'Aplikacja webowa, która odliczy nam czas do ugotowania jajka. Zaznacz sposób ugotowania jajka, a następnie kliknij przycisk "START". Możesz zresetować odliczanie, klikajac przycisk "ZRESETUJ" lub też zatrzymać minutnik a następnie go wyzerować kilkając przycisk "WYZERUJ"',
    technologiesContent: 'Użyte technologie: HTML, CSS, JS',
    siteUrl: 'https://youtube.com',
    image: minutnik,
  },
  {
    id: 2,
    title: 'GRA W KÓŁKO I KRZYŻYK',
    content:
      'Aplikacja webowa, a dokładnie gra w kółko i krzyżyk stworzona na siatce GRID. Aby zagrać należy zaznaczyć kółko lub krzyżyk, a następnie kliknąć przycisk "NOWA GRA". Aby przerwać grę należy kilknąć przycisk "KONIEC',
    technologiesContent: 'Użyte technologie: HTML, CSS, JS',
    siteUrl: 'https://youtube.com',
    image: tikTakToo,
  },
  {
    id: 3,
    title: 'TASK MANAGER',
    content:
      'Projekt TODO APP stworzony podczas nauki React. Aplikacja stworzona z widokiem na desktop - brak RWD',
    technologiesContent: 'Użyte technologie: HTML, CSS, JSX, React, React-Router',
    siteUrl: 'https://youtube.com',
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
          <LineBreak />
          <Heading blue small>
            Sprawdź mojego GitHuba
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, porro?
          </Paragraph>
          <Button>GitHub</Button>
        </StyledGitHubWrapper>
      </StyledProjectsWrapper>
    </StyledPortfolioWrapper>
  </PageTemplate>
);

export default Portfolio;
