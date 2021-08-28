import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Route} from "react-router-dom"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import {Tweet} from "../components/Tweet"
import {AddTweetForm} from "../components/AddTweetForm"
import {useStylesHome} from "./themes/homeTheme"
import {fetchTweets} from "../store/ducks/tweets/actionCreators"
import {selectIsTweetsLoading, selectTweetsItems} from "../store/ducks/tweets/selectors"
import {fetchTags} from "../store/ducks/tags/actionCreators"
import {BackButton} from "../components/BackButton"
import {FullTweet} from "../components/FullTweet"


const HomePage: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStylesHome()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [])

    return (
        <Paper className={classes.tweetsWrapper} variant="outlined" square>
            <Paper className={classes.tweetsHeader} variant="outlined" square>
                <Route path={`/home/:any`}>
                    <BackButton/>
                </Route>

                <Route path={['/home', '/home/search']} exact>
                    <Typography variant='h6'>
                        Твиты
                    </Typography>
                </Route>

                <Route path={`/home/tweet`}>
                    <Typography variant='h6'>
                        Твитнуть
                    </Typography>
                </Route>
            </Paper>

            <Route path={['/home', '/home/search']} exact>
                <Paper>
                    <div className={classes.addForm}>
                        <AddTweetForm />
                    </div>
                    <div className={classes.addFormBottomLine}/>
                </Paper>
            </Route>

            <Route path={`/home`} exact>
                {isLoading ? (
                    <div className={classes.tweetsCentred}>
                        <CircularProgress/>
                    </div>
                ) : (
                    tweets.map(tweet => (
                        <Tweet key={tweet._id} {...tweet} />
                    ))
                )}
            </Route>

            <Route path={`/home/tweet/:id`} component={FullTweet} exact/>
        </Paper>
    )
}

export default HomePage