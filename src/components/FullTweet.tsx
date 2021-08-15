import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {CircularProgress} from "@material-ui/core"

import {useStylesHome} from "../pages/Home/homeTheme"
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors"
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators"
import {Tweet} from "./Tweet"


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome()
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params: {id?: string} = useParams()
    const id = params.id

    useEffect((): any => {
        if (id) dispatch(fetchTweetData(id))

        return () => dispatch(setTweetData(undefined))
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        )
    }

    if (tweetData) return <Tweet classes={classes} {...tweetData} />

    return null
}