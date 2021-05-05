import styled from 'styled-components';

const LineBreak = styled.div`
  height: 6px;
  width: ${({ small }) => (small ? '15vw' : '30vw')};
  background-color: ${({ theme }) => theme.lightgray};
  border-radius: 3px;
  margin: 30px 0;
  align-self: center;
  position: relative;
  }
`;

export default LineBreak;
