import { Box, Flex, Img, Stack, Text,chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";
import Deletebutton from "./Deletebutton";
import Editbutton from "./Editbutton";

import Replybox from "./Replybox";
import Replybutton from "./Replybutton";
import Vote from "./Vote";

const Comment = ({ comment }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);

  const nestedComments = (comment.replies || []).map((comment) => {
    return (
      
        <Comment key={comment.id} comment={comment} type='child' />
    
    );
  });
  console.log(comment)

  return (
    <>
      <Box ml="" mt="10px">
        <Flex
          direction="column"
          h={["250px", "250px", "170px"]}
          w={["350px", "400px", "680px"]}
          borderRadius="5px"
          border="1px solid hsl(0, 0%, 100%)"
          bg="hsl(0, 0%, 100%)"
          px="20px"
        >
          <Box
            direction="row"
            pt="5"
            display="flex"
            flexDirection={["column", "column", "row"]}
          >
            <Box mr={["0", "0", "10px"]} display={["none", "none", "flex"]}>
              <Vote />
            </Box>
            <Box
              display="flex"
              lineHeight=""
              flexDirection="column"
              px={["10px", "0", "0"]}
            >
              <Stack direction="row" pb="10px">
                <Img
                  h="7"
                  w="7"
                  src={
                    comment.user?.image.png || comment.user?.image.webp ||
                    data.currentUser.image.png
                   
                  }
                  alt={comment.user?.username || data.currentUser.username}
                />
                <Text>{comment.user?.username || data.currentUser.username}</Text>
                {comment.user?.username === data.currentUser.username && (
                  <Text
                    px="2px"
                    textAlign="center"
                    color="white"
                    bg="hsl(238, 40%, 52%)"
                  >
                    you
                  </Text>
                )}
                <Text>{comment.createdAt}</Text>
              </Stack>
              <chakra.blockquote fontSize="16px" color="hsl(211, 10%, 45%)">
                {comment.content}
              </chakra.blockquote>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              px={["10px", "10px", "0"]}
              py={["20px", "20px", "0"]}
            >
              <Box display={["flex", "flex", "none"]}>
                <Vote />
              </Box>
              <Box>
                {comment.user?.username !== data.currentUser.username ? (
                  <Box onClick={() => setShowReplyBox(!showReplyBox)}>
                    <Replybutton />
                  </Box>
                ) : (
                  <Flex>
                    <Deletebutton />
                    <Editbutton />
                  </Flex>
                )}
              </Box>
            </Box>
          </Box>
        </Flex>
        {nestedComments}
      </Box>
      {showReplyBox && <Replybox />}
    </>
  );
};

export default Comment;
