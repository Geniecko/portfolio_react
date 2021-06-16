import styled from 'styled-components';

const Textarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.lightgray};
  background-color: #e3e3e3;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.paragraphColor};
  font-family: 'Montserrat', sans-serif;
  border-radius: 25px;
  padding: 12px 25px;
  outline: 0;
  width: 450px;
  height: 200px;
  transition: 0.5s;
  resize: none;

  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    color: ${({ theme }) => theme.paragraphColor};
    font-weight: ${({ theme }) => theme.light};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  :focus {
    border: 2px solid ${({ theme }) => theme.secondColor};
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export default Textarea;
