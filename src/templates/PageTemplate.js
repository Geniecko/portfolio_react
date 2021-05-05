import styled, { css } from 'styled-components';

const PageTemplate = styled.div`
  position: absolute;
  top: 5vh;
  left: 295px;
  right: 125px;
  padding-bottom: 100px;

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
    `}
`;

export default PageTemplate;
