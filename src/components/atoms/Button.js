import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 6px 30px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.semiBold};
  letter-spacing: 0.5px;
  border: 2px solid ${({ theme }) => theme.blue};
  transition: 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.blue};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.blue};

      &:hover {
        background-color: ${({ theme }) => theme.blue};
        color: ${({ theme }) => theme.white};
      }
    `}
`;

export default Button;
