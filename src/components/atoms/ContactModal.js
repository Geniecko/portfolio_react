import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  padding: 10px;
  text-align: center;
  width: 25vw;
  height: 12vw;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    align-self: center;
  }
`;

const ContactModal = ({ closeModal }) => (
  <StyledWrapper>
    <StyledModalContent>
      <Heading small blue>
        Brawo!
      </Heading>
      <Paragraph>Wszystko poszło okej, wiadomość została wysłana!</Paragraph>
      <Button secondary onClick={closeModal}>
        ZAMKNIJ
      </Button>
    </StyledModalContent>
  </StyledWrapper>
);

ContactModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactModal;
