import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import CardComment from '../CardComment'

function UpdateComment({ text, setIsEdit, id, updateReply }) {

  const [textEdit, setTextEdit] = useState(text)

  return (
    <CardComment>
      <HStack padding={1} alignItems="self-start" gap={2.5} >
        <Textarea
          placeholder='Add a Comment...' value={textEdit} onChange={(e) => setTextEdit(e.target.value)}>{text}</Textarea>
        <Button
          bg={'blue.600'}
          color={"white"}
          _hover={{ opacity: 0.5 }}
          onClick={() => updateReply(id, textEdit)}
        >
          UPDATE
        </Button>
      </HStack>
    </CardComment >
  )
}

export default UpdateComment