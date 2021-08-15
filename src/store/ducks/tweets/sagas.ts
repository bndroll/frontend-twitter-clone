import {call, put, takeLatest} from 'redux-saga/effects'

import {setTweets, setTweetsLoadingState} from "./actionCreators"
import {TweetsActionsType} from "./contracts/actionTypes"
import {TweetsAPI} from "../../../services/api/tweetsAPI"
import {LoadingState} from "../../types"


export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsAPI.fetchTweets)
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}