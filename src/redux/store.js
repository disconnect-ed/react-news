import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import newsReducer from "./reducers/news-reducer";

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    news: newsReducer
});


const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
window.store = store;

export default store;