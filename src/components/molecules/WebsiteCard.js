import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import heroesGym from 'assets/image/heroes_gym.jpg';
import heroesGymMobile from 'assets/image/heroes_gym_mobile.jpg';

const StyledWrapper = styled.div`
  margin: 60px 0;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledTextWrapper = styled.div``;

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

const WebsiteCard = () => (
  <StyledWrapper>
    <StyledImageWrapper>
      <StyledImage src={heroesGym} />
      <StyledImageMobile src={heroesGymMobile} />
    </StyledImageWrapper>
    <StyledTextWrapper>
      <StyledHeading blue small>
        Heroes Gym
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
