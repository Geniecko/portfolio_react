import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import HeadingTemplate from 'templates/HeadingTemplate';

const StyledPortfolioWrapper = styled.div`
  padding-top: 55px;
`;

const headingData = {
  title: 'Portfolio',
  description:
    'Portfolio description lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores porro eius a,recusandae itaque',
};

const Portfolio = () => (
  <PageTemplate>
    <StyledPortfolioWrapper>
      <HeadingTemplate headingData={headingData} />
    </StyledPortfolioWrapper>
  </PageTemplate>
);

export default Portfolio;
