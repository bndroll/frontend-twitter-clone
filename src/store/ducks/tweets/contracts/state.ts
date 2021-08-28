import {LoadingState} from "../../../types"


export enum AddFormState {
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tweet {
    _id: string
    text: string
    createdAt: string
    images: string[]
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}

export interface TweetsState {
    items: Tweet[]
    loadingState: LoadingState
    addFormState: AddFormState
}