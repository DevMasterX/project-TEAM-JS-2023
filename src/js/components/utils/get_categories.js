export function getCategories(data) {
    const categories = [...data].flatMap(item => item.categories)
   return [...new Set(categories)].map(item => item?.toLowerCase())
}