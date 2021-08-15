import {TagsState} from "./contracts/state"
import {
    FetchTagsActionInterface,
    SetTagsActionInterface,
    SetTagsLoadingStateActionInterface,
    TagActionTypes
} from "./contracts/actionTypes"
import {LoadingState} from "../../types"


export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagActionTypes.SET_TAGS,
    payload
})

export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagActionTypes.FETCH_TAGS,
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
    type: TagActionTypes.SET_LOADING_STATE,
    payload
})