import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.lightgray};
  background-color: #e3e3e3;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.paragraphColor};
  font-family: 'Montserrat', sans-serif;
  border-radius: 25px;
  padding: 12px 25px;
  outline: 0;
  transition: 0.3s;

  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    color: ${({ theme }) => theme.paragraphColor};
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  :focus {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;

export default Input;
