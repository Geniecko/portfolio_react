import styled from 'styled-components';

const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.white};
  border: 3px solid ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.paragraphColor};
  font-family: 'Montserrat', sans-serif;
  border-radius: 25px;
  padding: 12px 25px;
  outline: 0;
  width: 450px;
  height: 200px;

  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    color: ${({ theme }) => theme.paragraphColor};
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default Textarea;
