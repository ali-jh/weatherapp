import { Box, Center } from "@chakra-ui/react";
import "./App.css";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [cityname, setCityname] = useState("");
  const ApiKey = "2fa9f81d85630478887cee1eed6011ac";
  console.log(data)
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${ApiKey}`
      )
      .then((res) => setData(res.data));
  }, [cityname]);
  return (
    <Box>
      <Search setdata={setData} setcityname={setCityname} />
      <Center py={"5%"}>
        {cityname === "" ? (
          <p>Please chose a city</p>
        ) : (
          <WeatherInfo cityname={cityname} data={data} />
        )}
      </Center>
    </Box>
  );
}

export default App;
