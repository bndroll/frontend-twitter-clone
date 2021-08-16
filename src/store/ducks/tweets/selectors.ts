import {createSelector} from "reselect"

import {AddFormState, TweetsState} from "./contracts/state"
import {RootState} from "../../store"
import {LoadingState} from "../../types"


export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)

export const selectAddFormState = (state: RootState): AddFormState => selectTweets(state).addFormState