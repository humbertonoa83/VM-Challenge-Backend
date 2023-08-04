import styled from 'styled-components';

export const Header = styled.h1`
  padding: 0px;
`

export const StyledDiv = styled.div`
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`

export const CustomInput = styled.input`
  width: 40%;
  padding: 5px;
  color: white;
  border-radius: 4px;
  color: black;
  font-size: 18px;

  &:disabled {
    background-color: rgba(82, 81, 79, 0.23);
    cursor: progress;
  }
`

export const CustomLabel = styled.label`
  font-weight: bold;
  font-family: Roboto;
  width: 40%;
  
`

export const ButtonSubmit = styled.button`
  background-color: teal;
  padding: 5px;
  color: white;
  border: none;
  border-radius: 4px;
  width: 20%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #52514f;
    cursor: progress;
  }
`
export const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const CustomControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;
`
export const Title = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-family: Roboto;
  
`
export const Content = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-family: Roboto;
  
`