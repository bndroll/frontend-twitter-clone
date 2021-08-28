import {LoadingState} from "../../../types"


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

export interface TweetState {
    data?: Tweet
    loadingState: LoadingState
}