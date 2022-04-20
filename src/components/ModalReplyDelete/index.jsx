import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { useContextComment } from '../../hooks/useContextComment'

function ModalReplyDelete() {
  const { closeModal } = useContextComment()

  return (
    <Box B pos={"absolute"}
      top={localStorage.getItem("scroll")}
      left={0}
      w="100vw"
      height={"100vh"}
      bg={"rgba(0,0,0,0.5)"}
      overflow="hidden"
    >
      <Flex
        w={'full'}
        h="full"
        alignItems={"center"}
        justifyContent={"center"}>
        <Box
          bg={"gray.100"}
          padding={8}
          w={380}
          borderRadius={10}>
          <Heading
            fontSize={22}>
            Delete Comment
          </Heading>
          <Text
            fontSize={16}
            mt={5}
            color={"gray.500"}>
            Are you sure you want to delete this comment? This will remove the comment adn can't be undone
          </Text>
          <HStack
            justifyContent={"space-between"}
            mt={5}>
            <Button
              bg={"gray.500"}
              color={"white"}
              w="50%"
              textTransform={"uppercase"}
              _hover={{ bg: "gray.400" }}
              onClick={() => closeModal(false)}
            >
              No, Cancel
            </Button>
            <Button
              colorScheme={'red'}
              w="50%"
              textTransform={"uppercase"}
              _hover={{ bg: "red.400" }}
            >
              Yes, Delete
            </Button>
          </HStack>
        </Box>

      </Flex>
    </Box >
  )
}

export default ModalReplyDelete