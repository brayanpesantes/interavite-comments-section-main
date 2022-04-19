import { VStack } from "@chakra-ui/react"
import Comments from "../Comments";

function ListRepley({ repleys, curretUser }) {

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
          repleys.map(repley => (
            <Comments comment={repley} key={repley.id} currentUser={curretUser} />
          ))
        }


      </VStack>
    </VStack>
  )
}

export default ListRepley