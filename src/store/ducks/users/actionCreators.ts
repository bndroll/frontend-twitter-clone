import {FetchUsersItemsActionInterface, SetUsersItemsActionInterface, UsersActionsType} from "./contracts/actionTypes"
import {User} from "../user/contracts/state"


export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
    type: UsersActionsType.SET_ITEMS,
    payload
})

export const fetchUsers = (): FetchUsersItemsActionInterface => ({
    type: UsersActionsType.FETCH_ITEMS,
})

