const URL = '../../data.json'

export const getCommets = async() => {
    const data = await fetch(URL)
    return await data.json();
}