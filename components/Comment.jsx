import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";
import Deletebutton from "./Deletebutton";
import Editbutton from "./Editbutton";

import Replybox from "./Replybox";
import Replybutton from "./Replybutton";
import Vote from "./Vote";

const Comment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);

  const nestedComments = (comment.replies || []).map((comment) => {
    return (
      <Box ml="50px" key={comment.id}>
        <Comment comment={comment} />
      </Box>
    );
  });

  return (
    <>
      <Flex
        direction="column"
        h={["250px", "160px", "170px"]}
        w={["350px", "650px", "680px"]}
        borderRadius="5px"
        border="1px solid hsl(0, 0%, 100%)"
        bg="hsl(0, 0%, 100%)"
        px="20px"
      >
        <Box
          direction="row"
          pt="5"
          display="flex"
          flexDirection={["column", "row", "row"]}
        >
          <Box mr="10px" display={["none", "flex", "flex"]}>
            <Vote />
          </Box>
          <Box
            display="flex"
            lineHeight="7"
            flexDirection="column"
            px={["10px", "0", "0"]}
          >
            <Stack direction="row">
              <Img
                h="7"
                w="7"
                src={comment.user.image.png || comment.user.image.webp}
                alt={comment.user.username}
              />
              <Text>{comment.user.username}</Text>
              {comment.user.username === data.currentUser.username && (
                <Text
                  h="5"
                  w="7"
                  textAlign="center"
                  color="white"
                  bg="hsl(238, 40%, 52%)"
                >
                  you
                </Text>
              )}
              <Text>{comment.createdAt}</Text>
            </Stack>
            <Text fontSize="16px" color="hsl(211, 10%, 45%)">
              {comment.content}
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            px={["10px", "0", "0"]}
          >
            <Box display={["flex", "none", "none"]}>
              <Vote />
            </Box>
            <Box>
              {comment.user.username !== data.currentUser.username ? (
                <Replybutton />
              ) : (
                <Flex >
                  <Deletebutton />
                  <Editbutton />
                </Flex>
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
      {nestedComments}
      {showReply && <Replybox />}
    </>
  );
};

export default Comment;
