import { VStack } from "@chakra-ui/react"
import Comments from "../Comments";
import { useComments } from '../../hooks/useComments'
function ListReply({ replies }) {
  return (
    <VStack
      w={"full"}
      alignItems={"flex-end"}
      position="relative"
      _before={{
        content: '""',
        width: "4px",
        height: "full",
        background: "gray.300",
        position: "absolute",
        top: "0",
        left: "2.5rem",

      }}
    >
      <VStack w={"90%"} >
        {
          replies.map(reply => (
            <Comments comment={reply} key={reply.id} />
          ))
        }

      </VStack>
    </VStack>
  )
}

export default ListReply