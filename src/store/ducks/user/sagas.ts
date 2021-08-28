import {call, put, takeLatest} from 'redux-saga/effects'

import {setUserData, setUserLoadingState} from "./actionCreators"
import {FetchSignInActionInterface, FetchSignUpActionInterface, UserActionsType} from "./contracts/actionTypes"
import {LoadingState} from "../../types"
import {AuthAPI} from "../../../services/api/authAPI"


export function* fetchSignInRequest({payload}: FetchSignInActionInterface) {
    try {
        yield put(setUserLoadingState(LoadingState.LOADING))
        const {data} = yield call(AuthAPI.signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))
    } catch (e) {
        yield put(setUserLoadingState(LoadingState.ERROR))
    }
}

export function* fetchSignUpRequest({payload}: FetchSignUpActionInterface) {
    try {
        yield put(setUserLoadingState(LoadingState.LOADING))
        yield call(AuthAPI.signUp, payload)
        yield put(setUserLoadingState(LoadingState.SUCCESS))
    } catch (e) {
        yield put(setUserLoadingState(LoadingState.ERROR))
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setUserLoadingState(LoadingState.LOADING))
        const {data} = yield call(AuthAPI.getMe)
        yield put(setUserData(data))
    } catch (e) {
        yield put(setUserLoadingState(LoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}