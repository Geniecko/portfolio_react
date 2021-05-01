import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import minutnik from 'assets/image/minutnik.jpg';

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledImageWrapper = styled.div`
  margin-right: 50px;
`;

const StyledTextWrapper = styled.div``;

const StyledImage = styled.img`
  width: 400px;
  border-radius: 25px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 450px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;

const WebsiteCard = () => (
  <StyledWrapper>
    <StyledImageWrapper>
      <StyledImage src={minutnik} />
    </StyledImageWrapper>
    <StyledTextWrapper>
      <StyledHeading blue small>
        Minutnik
      </StyledHeading>
      <StyledParagraph>
        Projekt strony w oparciu o layout z https://themeforest.net/. Przygotowanie grafik na strone
        w programie Photoshop. Projekt zawiera technikę RWD oraz jest oparty w większości na
        Flexboxie.
      </StyledParagraph>
      <StyledParagraph>Użyte technologie: HTML, CSS(SASS), JS, jQuery</StyledParagraph>
      <StyledButton>Sprawdź</StyledButton>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default WebsiteCard;
