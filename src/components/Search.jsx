import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Search = ({setcityname}) => {
  return (
    <Box w={"100%"} p={5}>
      <InputGroup>
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
        <Input
          placeholder="Search city name..."
          onChange={(e) =>setcityname(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
