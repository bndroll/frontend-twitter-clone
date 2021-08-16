import {call, put, takeLatest} from 'redux-saga/effects'

import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators"
import {FetchAddTweetActionInterface, TweetsActionsType} from "./contracts/actionTypes"
import {TweetsAPI} from "../../../services/api/tweetsAPI"
import {LoadingState} from "../../types"
import {AddFormState, Tweet} from "./contracts/state"


export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(TweetsAPI.fetchTweets)
        yield put(setTweets(items))
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface): any {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullName: 'Brian Vaughn 🖤',
                userName: 'brian_d_vaughn',
                avatarUrl: 'https://avatars.mds.yandex.net/get-zen_doc/2417786/pub_5edb8debf51e57794e8115ff_5edbacbf7f274d488064ea42/scale_1200',
            }
        }

        const item = yield call(TweetsAPI.addTweet, data)
        debugger
        yield put(addTweet(item))
    } catch (e) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}