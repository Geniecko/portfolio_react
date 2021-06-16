import styled, { keyframes } from 'styled-components';

const aniIcon = keyframes`
   0% { opacity: 0}
  100% { opacity: 1}
`;

const NavIcon = styled.button`
  position: relative;
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 30%;
  border: 5px solid transparent;
  transition: 0.3s;
  margin-bottom: 1vh;

  &:hover {
    border: 5px solid ${({ theme }) => theme.white};
  }

  &.active {
    border: 5px solid ${({ theme }) => theme.secondColor};
  }

  @media (max-height: 700px) and (min-width: 768px) {
    width: 120px;
    height: 80px;
    background-size: 15%;
    opacity: 0;
    animation: ${aniIcon} 0.3s ease-in forwards;
  }

  @media (max-width: 768px) {
    opacity: 0;
    animation: ${aniIcon} 0.3s ease-in forwards;
    animation-delay: 0.5s;
  }
`;

export default NavIcon;
