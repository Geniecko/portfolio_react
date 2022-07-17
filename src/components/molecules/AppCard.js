import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  position: relative;
  margin-bottom: 64px;

  @media (max-width: 1360px) {
    flex-direction: column;
  }
`;

const StyledImageWrapper = styled.div`
  margin: ${({ reverse }) => (reverse ? '0 0 0 50px' : '0 50px 0 0')};

  @media (max-width: 576px) {
    margin: 0;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({ reverse }) => (reverse ? 'right' : 'left')};
  
  h1 {
    font-size: 24px;
  }

  a {
    align-self: flex-start;
    margin-top: auto;
  }
`;

const StyledImage = styled.img`
  width: 400px;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 1360px) {
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  max-width: 450px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)``;

const AppCard = ({ reverse, title, content, technologiesContent, siteUrl, image }) => (
  <StyledWrapper reverse={reverse}>
    <StyledImageWrapper reverse={reverse}>
      <StyledImage src={image} />
    </StyledImageWrapper>
    <StyledTextWrapper reverse={reverse}>
      <StyledHeading blue small>
        {title}
      </StyledHeading>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>{technologiesContent}</StyledParagraph>
      <a href={siteUrl} target="_blank" rel="noreferrer">
        <StyledButton secondary>Sprawdź</StyledButton>
      </a>
    </StyledTextWrapper>
  </StyledWrapper>
);

AppCard.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  technologiesContent: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

AppCard.defaultProps = {
  reverse: false,
};
export default AppCard;
