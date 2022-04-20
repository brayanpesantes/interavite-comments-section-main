import { getComments } from "../services/getComments"
import { useState, useEffect, useContext } from 'react'

export const useComments = () => {
    const [commentsInitial, setCommentsInitial] = useState([])
    const [currentUserInitial, setCurrentUserInitial] = useState({})
    useEffect(() => {
        getComments().then(res => {
            setCommentsInitial(res.comments)
            setCurrentUserInitial(res.currentUser)
        })
    }, [])

    return { commentsInitial, currentUserInitial }
}