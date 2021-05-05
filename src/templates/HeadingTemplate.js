import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledHeading = styled(Heading)`
  position: relative;
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
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 30px;
  width: 600px;
`;

const HeadingTemplate = ({ title, description, center }) => (
  <>
    <StyledHeading center={center} big blue>
      {title}
    </StyledHeading>
    <StyledParagraph>{description}</StyledParagraph>
  </>
);

HeadingTemplate.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

HeadingTemplate.defaultProps = {
  center: false,
};

export default HeadingTemplate;
