import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import CardComment from '../CardComment'
import moment from 'moment'
import { uuidv4 } from '../../utils/uuidv4'


function AddComment({ data, setData, user }) {
  const [comment, setComment] = useState('')


  const handleAddComment = () => {
    const newData = {
      content: comment,
      createdAt: moment().startOf('day').fromNow(),
      id: uuidv4(),
      replies: [],
      score: 0,
      user: user
    }
    setData([...data, newData])

  }
  return (
    <CardComment>
      <HStack padding={5} alignItems="self-start" gap={2.5} >
        <Avatar size="md" name="John Doe" src={user?.image?.png} />
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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