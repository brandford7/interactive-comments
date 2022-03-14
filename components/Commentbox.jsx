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

const Commentbox = () => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    setComment([...comment]);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
     
      <Flex
        bg="white"
        w="680px"
        h="150px"
        align="center"
        justify="center"
        fontSize="16px"
        mx='auto'
        mt='15px'
        borderRadius='5px'
      >
        <Box display="flex" w="610px">
          <Box mr="10px">
            <Img
              h="8"
              src={data.currentUser.image.png || data.currentUser.image.webp}
              alt={data.currentUser.username}
            />
          </Box>
          <Textarea onChange={handleChange} variant="outline" />

          <Button
            onClick={handleComment}
            bg="hsl(238, 40%, 52%)"
            color="white"
            p="20px"
            ml="10px"
          >
            Comment
          </Button>
        </Box>
      </Flex>
     
    </>
  );
};

export default Commentbox;
