import { useContext } from 'react'
import ContextComment from '../context/contextComments'

export const useContextComment = () => {
    const {
        comments,
        addComment,
        currentUser,
        addCommentReply,
        openModal,
        closeModal,
        isOpenModal,
        deleteCommentOrReply

    } = useContext(ContextComment)

    return {
        comments,
        addComment,
        currentUser,
        addCommentReply,
        openModal,
        closeModal,
        isOpenModal,
        deleteCommentOrReply

    }
}