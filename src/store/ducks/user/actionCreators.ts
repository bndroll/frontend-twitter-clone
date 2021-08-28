import {UserState} from "./contracts/state"
import {
    FetchSignInActionInterface,
    FetchSignUpActionInterface,
    FetchUserDataActionInterface,
    SetUserDataActionInterface,
    SetUserLoadingStateActionInterface, SignOutActionInterface,
    UserActionsType
} from "./contracts/actionTypes"
import {LoginFormProps} from "../../../components/LoginModal"
import {RegisterFormProps} from "../../../components/RegisterModal"


export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload
})

export const fetchUserData = (): FetchUserDataActionInterface => ({
    type: UserActionsType.FETCH_USER_DATA,
})

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
})

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload
})

export const signOut = (): SignOutActionInterface => ({
    type: UserActionsType.SIGN_OUT,
})

export const setUserLoadingState = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload
})
