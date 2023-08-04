import React, { useState } from 'react'
import axios from "axios";
// import './App.css'

import styled from 'styled-components';

const Header = styled.h1`
  padding: 0px;
`

const StyledDiv = styled.div`
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`

const CustomInput = styled.input`
  width: 40%;
  padding: 5px;
  color: white;
  border-radius: 4px;
  color: black;
  font-size: 18px;
`

const CustomLabel = styled.label`
  font-weight: bold;
  font-family: Roboto;
  width: 40%;
  
`

const ButtonSubmit = styled.button`
  background-color: teal;
  padding: 5px;
  color: white;
  border: none;
  border-radius: 4px;
  width: 20%;
`
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const CustomControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-bottom: 10px;
`
const Title = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-family: Roboto;
  
`
const Content = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 18px;
  font-family: Roboto;
  
`

function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState([])

  const handlePost = async () => {
    console.log(city)
    await axios({
      url: "http://localhost:8080/information?city="+city,
      method: "GET",
      })

        .then((res) => {
          console.log(res.data);
          setData(res.data)
        })
        .catch((err) => {
          console.error(err)
        });
  }



  return (
    <>
      <StyledDiv>
          <CustomForm>
              <CustomLabel>
                  Nome da Cidade:

              </CustomLabel>
              <CustomInput type="text" name="city"
                         onChange={(e) => setCity( e.target.value)}
                  />
              <ButtonSubmit onClick={handlePost}>Submit</ButtonSubmit>
          </CustomForm>
          {data != null ?
              <CustomDiv>
                  <Header>Temperatura</Header>
                  <CustomControl>
                    <Title>Cidade: </Title>
                  <Content>{city}</Content>
                  </CustomControl>

                    <CustomControl>
                        <Title>Temperatura: </Title>
                        <Content>{data["weather"]}</Content>
                    </CustomControl>

                  <CustomControl>
                    <Title>Populacao: </Title> <Content>{data["currentPopulation"]}</Content>
                  </CustomControl>

                      <CustomControl>
                        <Title>Pib: </Title>
                          <Content>{data["gdp"]}</Content>
                      </CustomControl>
              </CustomDiv> : ""
          }
      </StyledDiv>
    </>
  )
}

export default App
