import { Box, Flex, Img, Stack, Text, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";

import Replybox from "./Replybox";
import Vote from "./Vote";

const Comment = ({ comment }) => {
  const [showReply, setShowReply] = useState(false);

  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment.id} comment={comment}  />;
  });

  return (
    <>
      <Flex
        direction="column"
        
        h="170px"
        w="680px"
        borderRadius="5px"
        border="1px solid hsl(0, 0%, 100%)"
        bg="hsl(0, 0%, 100%)"
        
      >
        <Stack direction="row" pt="5">
          <Box ml="20px" mr="10px">
            <Vote />
          </Box>
          <Box>
            <Img
              h="8"
              src={comment.user.image.png || comment.user.image.webp }
              alt={comment.user.userame}
            />

            <Text fontSize="16px" color="hsl(211, 10%, 45%)">
              {comment.content}
            </Text>
          </Box>
          <Box display="flex" pos="absolute" left="730">
            <Text mr="10px">{comment.user.username}</Text>
            <Text>{comment.createdAt}</Text>
          </Box>

          <Box
            pos="absolute"
            right="650"
            display="flex"
            cursor="pointer"
            onClick={() => setShowReply(!showReply)}
          >
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            <Text color="hsl(238, 40%, 52%)" ml="10px">
              Reply
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Box  mb='10px'> {nestedComments}</Box>
      {showReply && <Replybox />}
    </>
  );
};

export default Comment;
