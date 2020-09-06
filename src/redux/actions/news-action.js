
export const GET_NEWS = 'GET_NEWS'
export const SET_NEWS = 'SET_NEWS'
export const LOADING = 'LOADING'
export const LOADING_SUCCESS = 'LOADING_SUCCESS'
export const LOADING_ERROR = 'LOADING_ERROR'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SELECT_NEWS_COUNTRY = 'SELECT_NEWS_COUNTRY'
export const SET_NEWS_COUNTRY = 'SET_NEWS_COUNTRY'
export const SET_NEWS_CATEGORY = 'WATCH_NEWS_CATEGORY'
export const SELECT_NEWS_CATEGORY = 'SELECT_NEWS_CATEGORY'


export const getNews = (country, page, category) => {
    return {type: GET_NEWS, country, page, category}
}

export const setNewsCategory = (category) => {
    return {type: SET_NEWS_CATEGORY, category}
}

export const selectNewsCategory = (category) => {
    return {type: SELECT_NEWS_CATEGORY, category}
}

export const selectNewsCountry = (country) => {
    return {type: SELECT_NEWS_COUNTRY, country}
}

export const setNewsCountry = (country) => {
    return {type: SET_NEWS_COUNTRY, country}
}

export const setNews = (news, page) => {
    return {type: SET_NEWS, news, page}
}

export const loading = () => {
    return {type: LOADING}
}

export const setCurrentPage = (currentPage = 1) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const loadingSuccess = () => {
    return {type: LOADING_SUCCESS}
}

export const loadingError = (error) => {
    return {type: LOADING_ERROR, error}
}