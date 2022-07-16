import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';
import WebsiteCard from 'components/molecules/WebsiteCard';
import AppCard from 'components/molecules/AppCard';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

import { appProjects, websiteProjects } from 'data/projectsData';

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
