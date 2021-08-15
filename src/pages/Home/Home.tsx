import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import Divider from "@material-ui/core/Divider"
import InputAdornment from "@material-ui/core/InputAdornment"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"

import FilterVintageIcon from '@material-ui/icons/FilterVintageOutlined'
import SearchIcon from "@material-ui/icons/Search"
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import {Tweet} from "../../components/Tweet"
import {SideMenu} from "../../components/SideMenu"
import {AddTweetForm} from "../../components/AddTweetForm"
import {SearchTextField} from "../../components/SearchTextField"
import {useStylesHome} from "./homeTheme"
import {fetchTweets} from "../../store/ducks/tweets/actionCreators"
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors"
import {CircularProgress} from "@material-ui/core";


const Home: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStylesHome()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    useEffect(() => {
        dispatch(fetchTweets())
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
                            <Typography variant='h6'>Главная</Typography>
                            <FilterVintageIcon color='primary'/>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes}/>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                        {isLoading ? (
                            <div className={classes.tweetsCentred}>
                                <CircularProgress />
                            </div>
                        ) : (
                            tweets.map(tweet => (
                                <Tweet key={tweet._id} text={tweet.text} user={tweet.user} classes={classes} />
                            ))
                        )}
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
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Санкт-Петербург"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 3 331
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#коронавирус"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component='li'/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Беларусь"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 13 554
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://avatars.mds.yandex.net/get-zen_doc/1368767/pub_5c13397a5f531700aae875b2_5c133d00264c6c00acf66ea8/scale_1200"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @vDockShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component='li'/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home