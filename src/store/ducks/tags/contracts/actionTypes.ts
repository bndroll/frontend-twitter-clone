import {Action} from "redux"

import {TagsState} from "./state"
import {LoadingState} from "../../../types"


export enum TagActionTypes {
    SET_TAGS = "tags/SET_TAGS",
    FETCH_TAGS = "tags/FETCH_TAGS",
    SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

export interface SetTagsActionInterface extends Action<TagActionTypes> {
    type: TagActionTypes.SET_TAGS,
    payload: TagsState['items']
}

export interface FetchTagsActionInterface extends Action<TagActionTypes> {
    type: TagActionTypes.FETCH_TAGS
}

export interface SetTagsLoadingStateActionInterface extends Action<TagActionTypes> {
    type: TagActionTypes.SET_LOADING_STATE,
    payload: LoadingState
}

export type TagsActions =
    | SetTagsActionInterface
    | FetchTagsActionInterface
    | SetTagsLoadingStateActionInterface