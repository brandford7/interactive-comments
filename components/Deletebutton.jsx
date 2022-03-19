import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React,{useState} from "react";
import { data } from "../data";

const Deletebutton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments,setComments]= useState(data.comments)
  
  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));

  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        mx="5px"
        onClick={onOpen}
      >
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
            fill="#ED6368"
          />
        </svg>
        <Text color="hsl(358, 79%, 66%)" ml="5px">
          Delete
        </Text>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Comment</ModalHeader>

          <ModalBody>
            <Text fontSize="16px">
              Are you sure you want to delete this comment? This comment will
              remove the comment and can't be undone.
            </Text>
          </ModalBody>
          <ModalFooter color="white" mx="auto">
            <Button bg="hsl(211, 10%, 45%)" onClick={onClose}>
              N0, CANCEL
            </Button>
            <Button
              bg="hsl(358, 79%, 66%)"
              ml="10px"
              onClick={handleDelete}
            >
              YES, DELETE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Deletebutton;
