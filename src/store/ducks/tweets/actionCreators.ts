import {AddFormState, Tweet, TweetsState} from "./contracts/state"
import {
    AddTweetActionInterface, FetchAddTweetActionInterface,
    FetchTweetsActionInterface, RemoveTweetActionInterface, SetAddFormStateActionInterface,
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

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload
})

export const fetchAddTweet = (payload: { text: string, images: string[] }): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FROM_STATE,
    payload
})
