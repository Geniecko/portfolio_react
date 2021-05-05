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
`;

const StyledImageMobile = styled.img`
  width: 150px;
  border-radius: 25px;
  margin-left: 50px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 500px;
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
      <a href={siteUrl}>
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
