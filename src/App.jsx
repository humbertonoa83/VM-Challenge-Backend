import React, { useState } from 'react'
import axios from "axios";
import Spinner from './components/spinner.jsx';
import { Header, StyledDiv, CustomForm, CustomInput, CustomLabel, ButtonSubmit, CustomDiv,
    CustomControl, Title, Content} from './assets/styles';


function App() {

  const [city, setCity] = useState("")
    const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const handlePost = async () => {
    console.log(city)
      setLoading(true)
      setData([])
    await axios({
      url: "http://localhost:8080/information?city="+city,
      method: "GET",
      })

        .then((res) => {
          console.log(res.data);
          setData(res.data)
            setLoading(false)
        })
        .catch((err) => {
          console.error(err)
            setLoading(false)
        });
      setLoading(false)
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
                           disabled={isLoading}
                  />

              <ButtonSubmit onClick={handlePost} disabled={isLoading}>
                  {isLoading ?
                  <Spinner size="14px" /> :
                      <span>Submeter</span>
                  }
              </ButtonSubmit>
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
