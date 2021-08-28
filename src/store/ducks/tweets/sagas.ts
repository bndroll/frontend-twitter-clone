import {call, put, takeLatest} from 'redux-saga/effects'

import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators"
import {FetchAddTweetActionInterface, RemoveTweetActionInterface, TweetsActionsType} from "./contracts/actionTypes"
import {TweetsAPI} from "../../../services/api/tweetsAPI"
import {LoadingState} from "../../types"
import {AddFormState} from "./contracts/state"


export function* fetchTweetsRequest(): any {
    try {
        const pathname = window.location.pathname
        const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined
        const items = yield call(TweetsAPI.fetchTweets, userId)
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface): any {
    try {
        const item = yield call(TweetsAPI.addTweet, payload)
        yield put(addTweet(item))
    } catch (e) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* fetchRemoveTweetRequest({payload}: RemoveTweetActionInterface) {
    try {
        debugger
        yield call(TweetsAPI.removeTweet, payload)
    } catch (e) {
        alert('Ошибка при удалении твита')
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest)
}