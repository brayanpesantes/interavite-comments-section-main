import { useEffect } from "react"

export const useScroll = () => {

    useEffect(() => {
        const scroll = () => {
            localStorage.setItem("scroll", window.scrollY)
        }
        window.addEventListener('scroll', scroll)
        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])
}