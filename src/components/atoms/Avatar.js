import styled from 'styled-components';
import userIconBlue from 'assets/icon/userIconBlue.svg';

const Avatar = styled.div`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.dark};
  border: 8px solid ${({ theme }) => theme.blue};
  background-image: url(${userIconBlue});
  background-repeat: no-repeat;
  background-position: 50% 45%;
  background-size: 45%;
`;

export default Avatar;
