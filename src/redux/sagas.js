
// import {takeEvery} from "redux-saga";
import {
    GET_NEWS,
    loading,
    loadingError,
    loadingSuccess, SELECT_NEWS_CATEGORY,
    SELECT_NEWS_COUNTRY,
    selectNewsCountry, SET_NEWS_CATEGORY, setCurrentPage,
    setNews, setNewsCategory, setNewsCountry
} from "./actions/news-action";
import {api} from "../api/api";
import {takeEvery, all, put, call, take} from "redux-saga/effects";

const fetchData = async (country, page, category) => {
    const data = await api.getNews(country, page, category)
    return data
}

export function* workerGetNews({country, page, category}) {
    try {
        yield put(loading())
        const data = yield call(() => fetchData(country, page, category))
        yield put(setNews(data.data))
        yield put(setCurrentPage(page))
        yield put(loadingSuccess())
    } catch (e) {
        yield put(loadingError({error: e}))
    }


}

export function* workerNewsCountry({country}) {
    try {
        yield put(setNewsCountry(country))
    } catch (e) {
        yield put(loadingError({error: e}))
    }
}

export function* workerCategory({category}) {
    yield put(setNewsCategory(category))
}

export function* watchNewsData() {
    yield takeEvery(GET_NEWS, workerGetNews)
}

export function* watchNewsCountry() {
    yield takeEvery(SELECT_NEWS_COUNTRY, workerNewsCountry)
}

export function* watchNewsCategory() {
    yield takeEvery(SELECT_NEWS_CATEGORY, workerCategory)
}

export default function* rootSaga() {
    yield all([
        watchNewsData(),
        watchNewsCountry(),
        watchNewsCategory()
    ])
}

// export function* incrementAsync() {
//     debugger
//     console.log('increment run')
//     yield put({ type: 'INCREMENT' })
// }
//
// export function* watchIncrementAsync() {
//     debugger
//     console.log('watcher run')
//     yield takeEvery(GET_NEWS, incrementAsync)
// }
//
// export default function* rootSaga() {
//     yield all([
//         watchIncrementAsync()
//     ])
// }