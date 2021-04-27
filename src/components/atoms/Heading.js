import styled, { css } from 'styled-components';

const Heading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-weight: ${({ theme }) => theme.extraBold};
    `}
`;

export default Heading;
