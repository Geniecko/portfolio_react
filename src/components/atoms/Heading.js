import styled, { css } from 'styled-components';

const Heading = styled.h1`
  color: ${({ blue, theme }) => (blue ? theme.secondColor : theme.dark)};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-weight: ${({ theme }) => theme.extraBold};
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
`;

export default Heading;
