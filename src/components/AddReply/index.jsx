import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import CardComment from '../CardComment'
import { useContextComment } from '../../hooks/useContextComment'

function AddReply({ comment, setIsReplay }) {

  const { currentUser, addCommentReply } = useContextComment()

  const [text, setText] = useState('@' + comment.user.username + ' ');

  const handleAddReply = () => {
    addCommentReply({ comment, text })
    setIsReplay(false)
  }

  return (
    <CardComment>
      <HStack padding={5} alignItems="self-start" gap={2.5} >
        <Avatar size="md" name="John Doe" src={currentUser.image.png} />
        <Textarea
          placeholder='Add a Comment...' value={text} onChange={(e) => setText(e.target.value)}>{text}</Textarea>
        <Button
          bg={'blue.600'}
          color={"white"}
          _hover={{ opacity: 0.5 }}
          onClick={handleAddReply}
        >
          Replay
        </Button>
      </HStack>
    </CardComment>
  )
}

export default AddReply