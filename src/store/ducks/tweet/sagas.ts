import {call, put, takeEvery} from 'redux-saga/effects'

import {setTweetData, setTweetLoadingState} from "./actionCreators"
import {FetchTweetDataActionInterface, TweetActionsType} from "./contracts/actionTypes"
import {TweetsAPI} from "../../../services/api/tweetsAPI"
import {LoadingState} from "../../types"
import {Tweet} from "./contracts/state"


export function* fetchTweetDataRequest({payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsAPI.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    } catch (e) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}