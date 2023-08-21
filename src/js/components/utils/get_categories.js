export function getCategories(data) {
    const categories = [...data].map(item => item.category?.toLowerCase())
    return [...new Set(categories)]

}

// export function getCategories(data) {
//     console.log(data)
//     const categories = [...data].flatMap(item => item.categories)
//    return [...new Set(categories)].map(item => item?.toLowerCase())
// }