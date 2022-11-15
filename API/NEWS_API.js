const API_KEY = `b3de14ca631c4b448aa149dfe92c4859`;



export const getnews = (category = 'general', country = 'in') => {
    // return (`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}apiKey=${API_KEY}.json`)
    return (`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=b3de14ca631c4b448aa149dfe92c4859`)
}