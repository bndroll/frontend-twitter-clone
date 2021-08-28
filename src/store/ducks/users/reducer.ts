import produce, {Draft} from "immer"

import {UsersState} from "./contracts/state"
import {LoadingState} from "../../types"
import {UsersActions, UsersActionsType} from "./contracts/actionTypes"


const initialUsersState: UsersState = {
    items: [],
    loadingState: LoadingState.NEVER,
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsType.SET_ITEMS:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case UsersActionsType.FETCH_ITEMS:
            draft.loadingState = LoadingState.LOADING
            break

        default: break
    }
}, initialUsersState)