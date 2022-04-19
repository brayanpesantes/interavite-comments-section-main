import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import React from 'react'
import CardComment from '../CardComment'

function UpdateComment() {
  return (
    <CardComment>
      <HStack padding={5} alignItems="self-start" gap={2.5} >
        <Avatar size="md" name="John Doe" />
        <Textarea
          placeholder='Add a Comment...'></Textarea>
        <Button
          bg={'blue.600'}
          color={"white"}
          _hover={{ opacity: 0.5 }}
        >
          SEND
        </Button>
      </HStack>
    </CardComment>
  )
}

export default UpdateComment