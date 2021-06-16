import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  margin-bottom: 100px;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledTextWrapper = styled.div`
  h1 {
    font-size: 24px;
  }
`;

const StyledImage = styled.img`
  width: 700px;
  border-radius: 25px;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.4);

  @media (max-width: 1360px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledImageMobile = styled.img`
  width: 150px;
  border-radius: 25px;
  margin-left: 50px;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.4);

  @media (max-width: 1360px) {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  max-width: 500px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const WebsiteCard = ({ title, content, technologiesContent, siteUrl, image, imageMobile }) => (
  <StyledWrapper>
    <StyledImageWrapper>
      <StyledImage src={image} />
      <StyledImageMobile src={imageMobile} />
    </StyledImageWrapper>
    <StyledTextWrapper>
      <StyledHeading blue small>
        {title}
      </StyledHeading>
      <StyledParagraph>{content}</StyledParagraph>
      <StyledParagraph>{technologiesContent}</StyledParagraph>
      <a href={siteUrl} target="_blank" rel="noreferrer">
        <StyledButton>Sprawdź</StyledButton>
      </a>
    </StyledTextWrapper>
  </StyledWrapper>
);

WebsiteCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  technologiesContent: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
};

export default WebsiteCard;
