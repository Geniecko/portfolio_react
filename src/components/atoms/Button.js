import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 6px 30px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.secondColor};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.semiBold};
  letter-spacing: 0.5px;
  border: 2px solid ${({ theme }) => theme.secondColor};
  transition: 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.secondColor};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.secondColor};

      &:hover {
        background-color: ${({ theme }) => theme.secondColor};
        color: ${({ theme }) => theme.white};
      }
    `}

  &:first-child {
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

export default Button;
