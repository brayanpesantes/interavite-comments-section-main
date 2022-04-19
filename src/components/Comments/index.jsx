import { VStack, Button, IconButton, Text, HStack, Box, Avatar, Stack, Badge, Textarea } from "@chakra-ui/react"
import CardComment from "../CardComment"
import { FaPlus, FaReply, FaMinus, FaTrash, FaEdit } from 'react-icons/fa'
import AddComment from "../AddComment"
import { useState, useEffect } from "react"
import AddRepley from "../AddRepley"

function Comments({ comment, currentUser, data, setData, isModalModification }) {
  const [isReplay, setIsReplay] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [text, seText] = useState("")
  const [isModal, setModal] = useState(false)
  const upadteReply = (id) => {
    if (comment?.replies?.length > 0) {
      return;
    }
    else if (comment.id === id) {
      comment.content = text
      setIsEdit(false)
    }
  }

  const TextStyle = (text) => {
    if (text.includes("@")) {
      const ArryaText = text.split(" ")
      const index = ArryaText.findIndex(item => item.includes("@"))
      const textUser = ArryaText[index]
      const newtext = text.slice(ArryaText[0].length)

      return (
        <Text> <Text color={"blue.500"} as="span" >{textUser}</Text>{newtext} </Text>
      )
    }
    else {
      return <Text>{text}</Text>
    }
  }
  function isModalOpen(is) {
    setModal(is)
    isModalModification(is)
  }
  return (
    <>
      <CardComment>
        <HStack
          padding={6}
          justifyContent="flex-start"
          alignItems={"flex-start"}
          h={"full"}>
          <VStack
            bg={"gray.100"}
            borderRadius={10}
            h={"8rem"}

          >
            <IconButton
              aria-label='plus'
              size='lg'
              variant={"ghost"}
              icon={<FaPlus />}
              color={"purple.100"}
              _hover={{ color: "purple.500" }}
              _focus={{ outline: "none" }}
            />
            <Text
              color={"purple.600"}
              fontWeight={"bold"}
              fontSize="xl">
              {comment.score}
            </Text>
            <IconButton
              aria-label='plus'
              size='lg'
              variant={"ghost"}
              color={"purple.100"}
              icon={<FaMinus />}
              _hover={{ color: "purple.500" }}
              _focus={{ outline: "none" }}

            />
          </VStack>
          <Stack w={"full"} gap={5} >
            <HStack
              justifyContent={"space-between"}
              gap={8} >
              <HStack >
                <Avatar
                  size='md'
                  name='Dan Abrams'
                  src={comment.user.image.png} />
                <Text color={"gray.700"} fontWeight="500">{comment.user.username}</Text>
                {comment.user.username === currentUser?.username ? <Badge color={"white"} bg={"blue.500"} textTransform={"lowercase"}>You</Badge> : null}

                <Text color={"gray.300"} fontWeight="500">{comment.createdAt}</Text>
              </HStack>
              <HStack>
                {
                  comment.user.username === currentUser?.username ?
                    <HStack>
                      <Button
                        variant={"ghost"}
                        leftIcon={<FaTrash />}
                        colorScheme="red"
                        _focus={{ outline: "none" }}
                        _hover={{ opacity: .5 }}
                        onClick={(e) => isModalOpen(true)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant={"ghost"}
                        leftIcon={<FaEdit />}
                        colorScheme="blue"
                        _focus={{ outline: "none" }}
                        _hover={{ opacity: .5 }}
                        onClick={() => setIsEdit(true)}>
                        Edit
                      </Button>
                    </HStack> : <Button
                      leftIcon={<FaReply />}
                      colorScheme='blue'
                      variant='ghost'
                      onClick={() => setIsReplay(true)}
                      _hover={{ opacity: .5 }}
                      _focus={{ outline: "none" }}>
                      Reply
                    </Button>
                }

              </HStack>
            </HStack>
            <VStack alignItems={isEdit ? "flex-end" : 'flex-start'}>
              {
                isEdit ?
                  <>
                    <Textarea
                      value={text === "" ? comment.content : text}
                      onChange={(e) => seText(e.target.value)} >
                      {comment.content}
                    </Textarea>
                    <Button
                      w={100}
                      textTransform={"uppercase"}
                      colorScheme="blue"
                      onClick={() => upadteReply(comment.id)}>
                      Update
                    </Button>
                  </> :
                  TextStyle(comment.content)
              }
            </VStack>
          </Stack>
        </HStack >
      </CardComment >
      {
        isReplay && <AddRepley
          currentUser={currentUser}
          comment={comment}
          data={data} setData={setData} setIsReplay={setIsReplay} />
      }
    </>
  )
}

export default Comments