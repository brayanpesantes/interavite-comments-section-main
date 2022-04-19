import { Box, Flex } from "@chakra-ui/react";
import ListComments from "./components/ListComments";
function App() {
  return (
    <Box as="main" bg="gray.200" w="100vw" minH="100vh" pos={"relative"}>
      <Flex flexDirection="column">
        <ListComments />
      </Flex>
    </Box>
  )
}

export default App