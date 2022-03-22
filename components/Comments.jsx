import { Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { data } from "../data";
import Comment from "./Comment";
import Commentbox from "./Commentbox";
import moment from "moment";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
  const [newComment, setNewComment] = useState();
  const [user, setUser] = useState(
  null);

  useEffect(() => {
    localStorage.setItem("newComment", JSON.stringify(newComment));
  }, []);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleAddComment = async (e) => {
    e.preventDefault();
    const timeStamp = moment().fromNow();
    const randomNumber = Math.floor(Math.random() * 100);

    setComments([
      ...comments,
      {
        id: randomNumber,
        content: newComment,
        createdAt: timeStamp,
        score: 0,
        user: {
          image: { png:data.currentUser.image.png,webp:data.currentUser.image.webp },
          username: data.currentUser.username,
        },
      },
    ]);
  };

  return (
    <>
      <Stack mt="50px" display="flex" direction="column">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Commentbox
          handleComment={handleAddComment}
          handleChange={handleChange}
          value={newComment}
        />
      </Stack>
    </>
  );
};

export default Comments;
