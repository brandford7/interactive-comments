import {
  Box,
  Button,
  Flex,
  FormControl,
  Img,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";

const Commentbox = ({handleComment,handleChange,value}) => {
 

  return (
    <>
      <Flex
        bg="white"
        w={["350px", "650px", "680px"]}
        h="150px"
        align="center"
        justify="center"
        fontSize="16px"
        px={["10px", "0", "0"]}
        mt="15px"
        borderRadius="5px"
      >
        <Box display="flex" w="610px">
          <Box mr="10px">
            <Img
              h="8"
              src={data.currentUser.image.png || data.currentUser.image.webp}
              alt={data.currentUser.username}
            />
          </Box>
          <Textarea onChange={handleChange} variant="outline" value={value} />

          <Button
            onClick={handleComment}
            bg="hsl(238, 40%, 52%)"
            color="white"
            p="20px"
            ml="10px"
          >
            SEND
          </Button>
        </Box>
      </Flex>
      
    </>
  );
};

export default Commentbox;
