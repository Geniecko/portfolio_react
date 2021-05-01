import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme, bold }) => (bold ? theme.semiBold : theme.regular)};
  color: ${({ theme }) => theme.paragraphColor};
`;

export default Paragraph;
