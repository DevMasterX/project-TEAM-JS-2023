export const LOCALSTORAGE_KEY_FAVORITES = "recipes"

export function handleGetLocalStorage(key) {
    return transformToJsObj(getLocalStorage(key))
}

export function handleSetLocalStorage(key, data) {
    const dataJSON = trasformToJson(data)
    setLocalStorage(key, dataJSON)
}


export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, data)
}

export function trasformToJson(data) {
    try {
        return JSON.stringify(data);
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}

export function transformToJsObj(data) {
    try {
        return  JSON.parse(data);
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}