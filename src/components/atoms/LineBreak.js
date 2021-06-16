import styled from 'styled-components';

const LineBreak = styled.div`
  height: 4px;
  width: ${({ small }) => (small ? '15vw' : '30vw')};
  background-color: ${({ theme }) => theme.secondColor};
  border-radius: 3px;
  margin: 30px 0;
  align-self: center;
  position: relative;
`;

export default LineBreak;
