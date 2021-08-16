import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {CircularProgress} from "@material-ui/core"

import {useStylesHome} from "../pages/Home/homeTheme"
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors"
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators"
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import Paper from "@material-ui/core/Paper";


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
    }, [dispatch, id])

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress/>
            </div>
        )
    }

    if (tweetData) {
        return (
            <Paper className={classes.fullTweet}>
                <div className={classes.tweetsHeaderUser}>
                    <Avatar className={classes.tweetAvatar}
                            alt={`Аватар пользователя ${tweetData.user.userName}`}
                            src={tweetData.user.avatarUrl}
                    />
                    <Typography>
                        <b>{tweetData.user.fullName}</b>&nbsp;
                        <span className={classes.tweetUserName}>{tweetData.user.userName}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.fullTweetText} variant='body1' gutterBottom>
                        {tweetData.text}
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
                </div>
            </Paper>
        )
    }

    return null
}