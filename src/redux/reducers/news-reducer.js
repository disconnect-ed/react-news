import {
    LOADING,
    LOADING_ERROR,
    LOADING_SUCCESS, SET_CURRENT_PAGE,
    SET_NEWS, SET_NEWS_CATEGORY,
    SET_NEWS_COUNTRY
} from "../actions/news-action";


const initialState = {
    articles: [],
    status: null,
    totalResults: null,
    isLoading: true,
    error: null,
    currentPage: 1,
    newsCountry: 'ru',
    newsCategory: ''
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
                error: null,
                articles: [],
                status: null,
                totalResults: null,
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        case SET_NEWS_CATEGORY:
            return {
                ...state,
                newsCategory: action.category
            }
        case LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.news.error
            }
        case SET_NEWS_COUNTRY:
            return {
                ...state,
                newsCountry: action.country
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_NEWS:
            return {
                ...state,
                articles: action.news.articles,
                status: action.news.status,
                totalResults: action.news.totalResults,
                error: null
            }
        default:
            return state
    }
}

//
// const initialState = {
//     news: [] as ([] | Array<object>)
// }
//
// const newsReducer = (type: string)

export default newsReducer