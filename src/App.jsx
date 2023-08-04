import React, { useState } from 'react'
import axios from "axios";
// import styles from "./assets/styles";

import './App.css'

function App() {

  const [city, setCity] = useState("")
  const [data, setData] = useState([])

  const handlePost = async () => {
    console.log(city)
    await axios({
      url: "http://192.168.8.158:8080/information?city="+city,
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
      <div>
          <label>
            Nome da Cidade:
            <input type="text" name="city"
                   onChange={(e) => setCity( e.target.value)}
             />
          </label>
          <button onClick={handlePost}>Submit</button>
          {data != null ?
              <div>
                    <p>Cidade: {city}</p>
                    <p>Temperatura: </p> <p>{data["weather"]}</p>
                    <p>Populacao: </p> <p>{data["currentPopulation"]}</p>
                    <p>Pib: </p> <p>{data["gdp"]}</p>
              </div> : ""
          }
      </div>
    </>
  )
}

export default App
