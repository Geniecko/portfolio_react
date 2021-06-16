import styled from 'styled-components';
import userIconBlue from 'assets/icon/userIconBlue.svg';

const Avatar = styled.div`
  border-radius: 50%;
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.dark};
  border: 8px solid ${({ theme }) => theme.secondColor};
  background-image: url(${userIconBlue});
  background-repeat: no-repeat;
  background-position: 50% 45%;
  background-size: 45%;

  @media (max-width: 1360px) {
    display: none;
  }
`;

export default Avatar;
