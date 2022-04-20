import { createContext, useState, useEffect, useRef } from "react";
import { uuid4 } from '../utils/uuid4'
import moment from "moment";
import { useComments } from '../hooks/useComments'

const Context = createContext({});

export const ProviderComments = ({ children }) => {
    const { commentsInitial, currentUserInitial } = useComments()

    const [comments, setComments] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const [isOpenModal, setIsOpenModal] = useState(false)


    useEffect(() => {
        setComments(commentsInitial)
        setCurrentUser(currentUserInitial)
    }, [commentsInitial, currentUserInitial])

    const addComment = ({ comment }) => {
        const newComment = {
            id: uuid4(),
            content: comment,
            createdAt: moment().startOf('day').fromNow(),
            replies: [],
            score: 0,
            user: currentUser
        }
        setComments([...comments, newComment])
    }
    const addCommentReply = ({ comment, text }) => {
        const dataReply =
        {
            id: uuid4(),
            content: text,
            replyingTo: comment.user.username,
            score: 0,
            createdAt: moment().startOf('day').fromNow(),
            user: currentUser
        }

        const newCommentsAndReplies =
            comments.map(item => item.id == comment.id ? { ...item, replies: [...item.replies, dataReply] } : item)
        setComments(newCommentsAndReplies)
    }
    const openModal = (isOpen) => {
        setIsOpenModal(isOpen)
    }
    const closeModal = (isOpen) => {
        setIsOpenModal(isOpen)
    }

    return (

        <Context.Provider value={
            {
                comments,
                currentUser,
                setComments,
                addComment,
                addCommentReply,
                openModal,
                closeModal,
                isOpenModal,
            }
        }>
            {children}
        </Context.Provider >
    )
}

export default Context