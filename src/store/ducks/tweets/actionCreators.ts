import {TweetsState} from "./contracts/state"
import {
    FetchTweetsActionInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingStateActionInterface,
    TweetsActionsType
} from "./contracts/actionTypes"
import {LoadingState} from "../../types"


export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
})
