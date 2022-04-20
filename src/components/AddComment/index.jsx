import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import CardComment from '../CardComment'
import { useContextComment } from '../../hooks/useContextComment'

function AddComment() {

  const { currentUser, addComment } = useContextComment()
  const [newComment, setNewComment] = useState('')


  const handleAddComment = () => {
    if (newComment.length < 1) {
      return
    }
    addComment({ comment: newComment });
    setNewComment('')
  }
  return (
    <CardComment>
      <HStack padding={5} alignItems="self-start" gap={2.5} >
        <Avatar size="md" name="John Doe" src={currentUser?.image?.png} />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value.trim())}
          placeholder='Add a Comment...'></Textarea>
        <Button
          onClick={handleAddComment}
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

export default AddComment