import styled from 'styled-components';

const Logo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.blue};
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.extraBold};
  color: ${({ theme }) => theme.white};
  font-size: 54px;
  transition: 1s;

  :hover {
    transform: rotate(360deg);
  }
`;

export default Logo;
