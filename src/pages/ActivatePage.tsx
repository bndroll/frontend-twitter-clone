import React, {useEffect} from "react"
import {useDispatch} from "react-redux"

import {setUserLoadingState} from "../store/ducks/user/actionCreators"
import {LoadingState} from "../store/types"
import {AuthAPI} from "../services/api/authAPI"


const ActivatePage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUserLoadingState(LoadingState.NEVER))
        const hash = window.location.pathname.split('/').pop()

        if (hash) {
            AuthAPI.verify(hash)
                .then(({data}) => {
                    window.localStorage.setItem('token', data.token)
                    window.location.href = '/home'
                })
                .catch(() => {
                    dispatch(setUserLoadingState(LoadingState.LOADED))
                })
        }
    }, [])

    return null
}

export default ActivatePage