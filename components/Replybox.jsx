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

const Replybox = () => {
  const [reply, setReply] = useState("");

  const handleReply = (e) => {
    setReply([...reply]);
  };
  const handleChange = (e) => {
    setReply(e.target.value);
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
        mx="auto"
        mt="15px"
      >
        <Box display="flex" w="610px">
          <Box mr="10px">
            <Img
              h="8"
              src={data.currentUser.image.png || data.currentUser.image.web}
              alt={data.currentUser.username}
            />
          </Box>
          <Textarea onChange={handleChange} variant="outline" />

          <Button
            onClick={handleReply}
            bg="hsl(238, 40%, 52%)"
            color="white"
            p="20px"
            ml="10px"
          >
            Reply
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Replybox;
