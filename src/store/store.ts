import {applyMiddleware, compose, createStore} from "redux"
import createSagaMiddleWare from 'redux-saga'

import {TweetsState} from "./ducks/tweets/contracts/state"
import {rootReducer} from "./rootReducer"
import rootSaga from "./saga"
import {TagsState} from "./ducks/tags/contracts/state"
import {TweetState} from "./ducks/tweet/contracts/state"


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleWare()

export interface RootState {
    tags: TagsState
    tweet: TweetState
    tweets: TweetsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)