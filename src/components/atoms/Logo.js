import styled from 'styled-components';

const Logo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.secondColor};
  border-radius: 50%;
  font-weight: ${({ theme }) => theme.extraBold};
  color: ${({ theme }) => theme.white};
  font-size: 54px;
  transition: 1s;

  :hover {
    transform: rotate(360deg);
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 30px;
    top: 15px;
    width: 70px;
    height: 70px;
    font-size: 34px;
    border: 5px solid ${({ theme }) => theme.secondColor};
    color: ${({ theme }) => theme.dark};
    display: none;
  }
`;

export default Logo;
