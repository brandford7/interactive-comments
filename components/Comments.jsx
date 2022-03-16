import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../data";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);

  return (
    <>
      <Stack
        mt="50px"
        spacing="10px"
        direction="column"
        display="flex"
        alignItems="center"
      >
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Stack>
    </>
  );
};

export default Comments;
