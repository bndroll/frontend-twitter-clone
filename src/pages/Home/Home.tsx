import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Route} from "react-router-dom"

import InputAdornment from "@material-ui/core/InputAdornment"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import {CircularProgress} from "@material-ui/core"

import SearchIcon from "@material-ui/icons/Search"

import {Tweet} from "../../components/Tweet"
import {SideMenu} from "../../components/SideMenu"
import {AddTweetForm} from "../../components/AddTweetForm"
import {SearchTextField} from "../../components/SearchTextField"
import {useStylesHome} from "./homeTheme"
import {fetchTweets} from "../../store/ducks/tweets/actionCreators"
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors"
import {Tags} from "../../components/Tags"
import {fetchTags} from "../../store/ducks/tags/actionCreators"
import {Users} from "../../components/Users"
import {BackButton} from "../../components/BackButton"
import {FullTweet} from "../../components/FullTweet"


const Home: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStylesHome()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant="outlined" square>
                        <Paper className={classes.tweetsHeader} variant="outlined" square>
                            <Route path={`/home/:any`}>
                                <BackButton />
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
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>

                        <Route path={`/home`} exact>
                            {isLoading ? (
                                <div className={classes.tweetsCentred}>
                                    <CircularProgress />
                                </div>
                            ) : (
                                tweets.map(tweet => (
                                    <Tweet key={tweet._id} {...tweet} classes={classes} />
                                ))
                            )}
                        </Route>

                        <Route path={`/home/tweet/:id`} component={FullTweet} exact />
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField variant='outlined'
                                         placeholder='Поиск по твиттеру'
                                         InputProps={{
                                             startAdornment: (
                                                 <InputAdornment position='start'>
                                                     <SearchIcon/>
                                                 </InputAdornment>
                                             ),
                                         }}
                                         fullWidth
                        />
                        <Tags classes={classes} />

                        <Users classes={classes} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home