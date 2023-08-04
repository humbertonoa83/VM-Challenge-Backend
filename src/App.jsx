import React, { useState } from 'react'
import axios from "axios";
// import styles from "./assets/styles";

import './App.css'

function App() {
  // const getCustomersData = () => {
  //   axios
  //       .get("http://192.168.8.158:8080/information?city=Maputo")
  //       .then(data => console.log(data.data))
  //       .catch(error => console.log(error));
  // };
  // getCustomersData();

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
      </div>
    </>
  )
}

export default App
