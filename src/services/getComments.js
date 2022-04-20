const URL = '../../data.json'

export const getComments = async() => {
    const data = await fetch(URL)
    return await data.json();
}