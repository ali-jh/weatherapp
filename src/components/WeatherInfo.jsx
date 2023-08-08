import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  BsSun,
  BsFillCloudRainFill,
  BsSnow,
  BsFillCloudFill,
} from "react-icons/bs";
import { LiaWindSolid } from "react-icons/lia";
import React from "react";

const WeatherInfo = ({ cityname, data }) => {
  return (
    <Card
      w={"25%"}
      h={"500px"}
      boxShadow={"lg"}
      border={"1px"}
      borderColor={"gray.100"}
    >
      <CardHeader mx={3} my={5}>
        <Heading size={"lg"}>{cityname}</Heading>
        <Text>mon,10:00pm,sunny</Text>
      </CardHeader>
      <CardBody>
        <HStack justifyContent={"space-around"}>
          <Text fontSize={"8xl"}>{data?.main?.temp && data?.main?.temp}</Text>
          {data.weather && data?.weather[0].main === "Rain" ? (
            <BsFillCloudRainFill size={"100px"} />
          ) : null}
          {data.weather && data?.weather[0].main === "Snow" ? (
            <BsSnow size={"100px"} />
          ) : null}
          {data.weather && data?.weather[0].main === "Clear" ? (
            <BsSun size={"100px"} />
          ) : null}
          {data.weather && data?.weather[0].main === "Clouds" ? (
            <BsFillCloudFill size={"100px"} />
          ) : null}
        </HStack>
      </CardBody>
      <CardFooter justifyContent={"space-around"} mb={7}>
        <VStack>
          <BsFillCloudRainFill size={"40px"} />
          <Text>{`${data.rain ? data?.rain["1h"] : 0}`}</Text>
        </VStack>
        <VStack>
          <LiaWindSolid size={"40px"} />
          <Text>{`${data?.wind?.speed} km/h`}</Text>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default WeatherInfo;
