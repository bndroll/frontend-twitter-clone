import {AddFormState, TweetsState} from "./contracts/state"
import {RootState} from "../../store"
import {LoadingState} from "../../types"


export const selectTweetsState = (state: RootState): TweetsState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => selectTweetsState(state).loadingState

export const selectIsTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectTweetsItems = (state: RootState) => selectTweetsState(state).items

export const selectAddFormState = (state: RootState): AddFormState => selectTweetsState(state).addFormState