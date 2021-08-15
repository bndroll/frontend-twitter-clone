import {call, put, takeLatest} from "redux-saga/effects"

import {setTags, setTagsLoadingState} from "./actionCreators"
import {tagsAPI} from "../../../services/api/tagsAPI"
import {TagActionTypes} from "./contracts/actionTypes"
import {LoadingState} from "../../types"


export function* fetchTagsRequest(): any {
    try {
        const items = yield call(tagsAPI.fetchTags)
        yield put(setTags(items))
    } catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagActionTypes.FETCH_TAGS, fetchTagsRequest)
}