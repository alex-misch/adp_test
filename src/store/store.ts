import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import * as pictures from './ducks/pictures.duck'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    pictures: pictures.reducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof rootReducer>

export default store;