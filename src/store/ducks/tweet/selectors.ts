import {TweetState} from "./contracts/state"
import {RootState} from "../../store"
import {LoadingState} from "../../types"


export const selectTweet = (state: RootState): TweetState => state.tweet

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState

export const selectIsTweetLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectTweetData = (state: RootState): TweetState['data'] => selectTweet(state).data