import { Box, Center } from '@chakra-ui/react';
import './App.css';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <Box>
      <Search/>
      <Center py={"5%"}>
        <WeatherInfo/>
      </Center>
    </Box>
  );
}

export default App;
