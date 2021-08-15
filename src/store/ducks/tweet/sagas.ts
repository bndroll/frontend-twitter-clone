import {call, put, takeLatest} from 'redux-saga/effects'

import {setTweetData, setTweetLoadingState} from "./actionCreators"
import {FetchTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes"
import {TweetsAPI} from "../../../services/api/tweetsAPI"
import {LoadingState} from "../../types"
import {Tweet} from "./contracts/state"


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface): any {
    try {
        const data: Tweet = yield call(TweetsAPI.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}