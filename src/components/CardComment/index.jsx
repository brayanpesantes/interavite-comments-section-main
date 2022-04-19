import { Box } from '@chakra-ui/react'
import React from 'react'

function CardComment({ children }) {
  return (
    <Box bg="white" borderRadius={10} w="100%">
      {children}
    </Box>
  )
}

export default CardComment