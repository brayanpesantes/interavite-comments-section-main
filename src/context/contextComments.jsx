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
    const [idDelete, setIdDelete] = useState();


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
    const openModal = (isOpen, id) => {
        setIsOpenModal(isOpen)
        setIdDelete(id)
    }
    const closeModal = (isOpen) => {
        setIsOpenModal(isOpen)
    }
    const deleteCommentOrReply = () => {
        setIsOpenModal(false)
        let newComments;
        newComments = comments.filter(item => item.id === idDelete)

        if (newComments.length === 0) {

            newComments = comments.map(item => {
                if (item.replies.length > 0) {
                    const newReplies = item.replies.filter(reply => reply.id !== idDelete)
                    return { ...item, replies: newReplies }
                }
                return item
            })
            setComments(newComments)
        }
        else {
            newComments = comments.filter(item => item.id !== idDelete)
            setComments(newComments)
        }
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
                deleteCommentOrReply
            }
        }>
            {children}
        </Context.Provider >
    )
}

export default Context