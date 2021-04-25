import styled from 'styled-components';

const Logo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.extraBold};
  color: ${({ theme }) => theme.blue};
  font-size: 54px;
`;

export default Logo;
