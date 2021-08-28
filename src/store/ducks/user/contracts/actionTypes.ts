import {Action} from "redux"

import {User} from "./state"
import {LoadingState} from "../../../types"
import {RegisterFormProps} from "../../../../components/RegisterModal"
import {LoginFormProps} from "../../../../components/LoginModal"


export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    SIGN_OUT = 'user/SIGN_OUT',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: User | undefined
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: LoginFormProps
}

export interface SignOutActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SIGN_OUT,
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP,
    payload: RegisterFormProps
}

export interface SetUserLoadingStateActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export type UserActions =
    | SetUserDataActionInterface
    | FetchSignInActionInterface
    | FetchSignUpActionInterface
    | SetUserLoadingStateActionInterface
    | FetchUserDataActionInterface
    | SignOutActionInterface