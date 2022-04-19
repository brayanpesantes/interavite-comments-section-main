import { Avatar, Button, HStack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import CardComment from '../CardComment'
import moment from 'moment';
function AddRepley({ currentUser, comment, data, setData, setIsReplay }) {
  const [text, setText] = useState('@' + comment.user.username + ' ');

  const handleAddRepley = () => {
    const idReplyNew = Math.round(Math.round(performance.now()) * Math.random(1, 1000));


    const dataRepley = { id: idReplyNew, content: text, replyingTo: comment.user.username, score: 0, createdAt: moment().startOf('day').fromNow(), user: currentUser }

    const res = data.map(item => item.id == comment.id ? { ...item, replies: [...item.replies, dataRepley] } : item)
    setData(res)
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
          onClick={handleAddRepley}
        >
          Replay
        </Button>
      </HStack>
    </CardComment>
  )
}

export default AddRepley