import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsSun, BsFillCloudRainFill } from "react-icons/bs";
import { LiaWindSolid } from "react-icons/lia";
import React from "react";

const WeatherInfo = () => {
  return (
    <Card
      w={"25%"}
      h={"500px"}
      boxShadow={"lg"}
      border={"1px"}
      borderColor={"gray.100"}
    >
      <CardHeader mx={3} my={5}>
        <Heading size={"lg"}>Tehran</Heading>
        <Text>mon,10:00pm,sunny</Text>
      </CardHeader>
      <CardBody>
        <HStack justifyContent={"space-around"}>
          <Text fontSize={"8xl"}>25</Text>
          <BsSun size={"100px"} />
        </HStack>
      </CardBody>
      <CardFooter justifyContent={"space-around"} mb={7}>
        <VStack>
          <BsFillCloudRainFill size={"40px"} />
          <Text>2% rain chanse</Text>
        </VStack>
        <VStack>
          <LiaWindSolid size={"40px"}/>
          <Text>23km/h winds</Text>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default WeatherInfo;
