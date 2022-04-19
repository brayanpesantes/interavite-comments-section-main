import { Box, Flex, useBoolean, VStack } from '@chakra-ui/react'
import Comments from '../Comments'
import { useState, useEffect, Fragment } from 'react'
import { getCommets } from '../../services/getComments'
import ListRepley from '../ListRepleys'
import AddComment from '../AddComment'
import ModalDelete from '../ModalDelete'

function ListComments() {
  const [commetsData, setCommetsData] = useState([])
  const [curretUser, setCurrentUser] = useState({})
  const [isModal, setModal] = useState(false)


  useEffect(() => {
    getCommets().then(res => {
      setCommetsData(res.comments)
      setCurrentUser(res.currentUser)
    })

  }, [])

  const isModalModification = (is) => {
    console.log(is);
  }

  return (
    <>
      <VStack margin="2rem auto" w={"70%"} >
        {
          commetsData?.map((comment) => (
            <Fragment key={comment.id}>
              <Comments
                comment={comment}
                currentUser={curretUser}
                data={commetsData}
                setData={setCommetsData}
                isModalModification={isModalModification} />
              {
                comment.replies?.length > 0 ?
                  <ListRepley repleys={comment.replies} curretUser={curretUser} /> : null
              }

            </Fragment>
          )
          )
        }
        <AddComment
          data={commetsData}
          setData={setCommetsData}
          user={curretUser} />
      </VStack >
      {
        isModal ? <ModalDelete cancelModal={setModal} /> : null
      }

    </>
  )
}

export default ListComments