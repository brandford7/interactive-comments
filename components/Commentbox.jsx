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
  const [comments, setComments] = useState(data.comments);

  const handleComment = (e) => {
    e.preventDefault();
    setComments([...comments, { comment }]);
    console.log(comment);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };

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
