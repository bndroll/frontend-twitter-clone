import {LoadingState} from "../../../types"


export interface Tweet {
    _id: string
    text: string,
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export interface TweetState {
    data?: Tweet
    loadingState: LoadingState
}