import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import CircularProgress from "@material-ui/core/CircularProgress"

import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import RepostIcon from "@material-ui/icons/RepeatOutlined"
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined"
import ShareIcon from "@material-ui/icons/ReplyOutlined"

import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors"
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators"
import {useStylesHome} from "../pages/themes/homeTheme"
import format from "date-fns/format"
import ruLang from 'date-fns/locale/ru'
import Divider from "@material-ui/core/Divider";
import {Tweet} from "./Tweet";
import mediumZoom from "medium-zoom";
import {ImageList} from "./ImageList";


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome()
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params: { id?: string } = useParams()
    const id = params.id

    useEffect((): any => {
        if (id) dispatch(fetchTweetData(id))

        return () => dispatch(setTweetData(undefined))
    }, [id])

    useEffect(() => {
        if (!isLoading) {
            mediumZoom('.tweet-images img')
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress/>
            </div>
        )
    }

    if (tweetData) {
        return (
            <>
                <Paper className={classes.fullTweet}>
                    <div className={classes.tweetsHeaderUser}>
                        <Avatar className={classes.tweetAvatar}
                                alt={`Аватар пользователя ${tweetData.user.username}`}
                                src={tweetData.user.avatarUrl}
                        />
                        <Typography>
                            <b>{tweetData.user.fullname}</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} variant='body1' gutterBottom>
                        {tweetData.text}
                        <div className='tweet-images'>
                            {tweetData.images && <ImageList images={tweetData.images} />}
                        </div>
                    </Typography>
                    <Typography>
                        <span className={classes.tweetDateFormat}>
                            {format(new Date(tweetData.createdAt), 'H : mm', {locale: ruLang})}
                        </span>
                        <span className={classes.tweetDateFormat}>
                            {format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', {locale: ruLang})}
                        </span>
                    </Typography>
                    <div className={classes.fullTweetFooterBlock}>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton className={classes.tweetFooterIconButton}>
                                    <CommentIcon/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton className={classes.tweetFooterIconButton}>
                                    <RepostIcon/>
                                </IconButton>
                                <span>2</span>
                            </div>
                            <div>
                                <IconButton className={classes.tweetFooterIconButton}>
                                    <LikeIcon/>
                                </IconButton>
                                <span>3</span>
                            </div>
                            <div>
                                <IconButton className={classes.tweetFooterIconButton}>
                                    <ShareIcon/>
                                </IconButton>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </Paper>
                <Divider/>
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                />
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                />
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                />
            </>
        )
    }

    return null
}