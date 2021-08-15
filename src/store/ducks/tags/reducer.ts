import produce, {Draft} from "immer"

import {TagsState} from "./contracts/state"
import {TagActionTypes, TagsActions} from "./contracts/actionTypes"
import {LoadingState} from "../../types"


const initialTagsState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
    switch (action.type) {
        case TagActionTypes.SET_TAGS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TagActionTypes.FETCH_TAGS:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break

        case TagActionTypes.SET_LOADING_STATE:
            draft.loadingState = action.payload
            break

        default: break
    }
}, initialTagsState)