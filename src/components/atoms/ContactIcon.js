import styled from 'styled-components';

const ContactIcon = styled.button`
  position: relative;
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border: none;
  transition: 0.3s;

  &:hover {
    background-size: 110%;
  }
`;

export default ContactIcon;
