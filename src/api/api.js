import axios from "axios";

const baseUrl = 'http://newsapi.org/v2/top-headlines?'
const key = '0d8b311563a144c9b4dd6e6c7a11cca4'
export const api = {

    getNews(country = '', page = 1, category = '', keyword = '', pageSize = 12,) {
        return axios.get(`${baseUrl}country=${country}&apiKey=${key}&pageSize=${pageSize}
        &page=${page}&category=${category}&q=${keyword}`)
    }
}