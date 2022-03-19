import { Stack } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { data } from "../data";
import Comment from "./Comment";
import Commentbox from "./Commentbox";
import moment from "moment";

const Comments = () => {
  const [comments, setComments] = useState(data.comments);
  const [newComment, setNewComment] = useState("");
 const [user,setUser]= useState({id:null, content:'', score: 0, createdAt:'',image:'',name:''});
 
  
 
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleAddComment = (e) => {
    e.preventDefault();
    const timeStamp = moment(Date.now()).from();

  setComments([
    ...comments,
    { id: 5, content: newComment, score:0, createdAt: timeStamp, image: data.currentUser.image.png, name: data.currentUser.username },
  ]);
    console.log(newComment);
  }
  useEffect(() => {
    setComments(comments)
  }, [comments])

  return (
    <>
      <Stack mt="50px" display="flex" direction="column">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Commentbox
          handleComment={handleAddComment}
          onChange={handleChange}
          value={newComment}
        />
      </Stack>
    </>
  );
};

export default Comments;
