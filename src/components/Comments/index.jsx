import { useEffect, useState } from "react"
import { VStack, Button, IconButton, Text, HStack, Box, Avatar, Stack, Badge, Textarea } from "@chakra-ui/react"
import { FaPlus, FaReply, FaMinus, FaTrash, FaEdit } from 'react-icons/fa'
import { useContextComment } from '../../hooks/useContextComment'
import CardComment from "../CardComment"
import AddReply from "../AddReply"
import { useScroll } from '../../hooks/useScroll'
function Comments({ comment }) {

  const [isReplay, setIsReplay] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [text, seText] = useState("")
  const { currentUser, openModal } = useContextComment()

  useScroll()

  const updateReply = (id) => {
    if (comment?.replies?.length > 0) {
      return;
    }
    else if (comment.id === id) {
      comment.content = text
      setIsEdit(false)
    }
  }

  const TextStyle = (textComment) => {

    if (textComment?.includes("@")) {
      const ArrayText = textComment.split(" ")
      const index = ArrayText.findIndex(item => item.includes("@"))
      const textUser = ArrayText[index]
      const newText = textComment.slice(ArrayText[0].length)

      return (
        <Text> <Text color={"blue.500"} as="span" >{textUser}</Text>{newText} </Text>
      )
    }
    else {
      return <Text>{textComment}</Text>
    }
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
                  src={comment?.user?.image?.png} />
                <Text color={"gray.700"} fontWeight="500">{comment?.user?.username}</Text>
                {comment?.user?.username === currentUser?.username ? <Badge color={"white"} bg={"blue.500"} textTransform={"lowercase"}>You</Badge> : null}

                <Text color={"gray.300"} fontWeight="500">{comment?.createdAt}</Text>
              </HStack>
              <HStack>
                {
                  comment?.user?.username === currentUser?.username ?
                    <HStack>
                      <Button
                        variant={"ghost"}
                        leftIcon={<FaTrash />}
                        colorScheme="red"
                        _focus={{ outline: "none" }}
                        _hover={{ opacity: 0.5 }}
                        onClick={() => openModal(true)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant={"ghost"}
                        leftIcon={<FaEdit />}
                        colorScheme="blue"
                        _focus={{ outline: "none" }}
                        _hover={{ opacity: 0.5 }}
                        onClick={() => setIsEdit(true)}
                      >
                        Edit
                      </Button>
                    </HStack> : <Button
                      leftIcon={<FaReply />}
                      colorScheme='blue'
                      variant='ghost'
                      onClick={() => setIsReplay(true)}
                      _hover={{ opacity: 0.5 }}
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
                      onClick={() => updateReply(comment.id)}>
                      Update
                    </Button>
                  </> :
                  TextStyle(comment?.content)
              }
            </VStack>
          </Stack>
        </HStack >
      </CardComment >
      {
        isReplay && <AddReply
          comment={comment}
          setIsReplay={setIsReplay} />
      }
    </>
  )
}

export default Comments