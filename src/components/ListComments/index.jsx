import { Box, Flex, VStack } from '@chakra-ui/react'
import Comments from '../Comments'
import { Fragment, useEffect, useRef } from 'react'
import ListReply from '../ListReply'
import AddComment from '../AddComment'
import ModalReplyDelete from '../ModalReplyDelete'
import { useContextComment } from '../../hooks/useContextComment'
function ListComments() {

  const { comments, isOpenModal } = useContextComment()



  return (
    <>
      <VStack margin="2rem auto" w={"70%"}  >
        {
          comments?.map((comment, index) => (
            <Fragment key={comment.id}>
              <Comments
                comment={comment} />
              {
                comment.replies?.length > 0 ?
                  <ListReply replies={comment.replies} key={index} /> : null
              }

            </Fragment>
          )
          )
        }
        <AddComment />

      </VStack >
      {isOpenModal && <ModalReplyDelete />}
    </>
  )
}

export default ListComments