import React from "react"
import {useStylesHome} from "../pages/Home/Home"
import {Avatar, Grid, Paper, Typography, IconButton} from "@material-ui/core"
import classNames from "classnames"
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'


interface TweetProps {
    text: string
    classes: ReturnType<typeof useStylesHome>
    user: {
        fullName: string,
        userName: string,
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({text, classes, user}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweetsHeader, classes.tweet)} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar className={classes.tweetAvatar}
                            alt={`Аватар пользователя ${user.userName}`}
                            src={user.avatarUrl} />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.userName}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton className={classes.tweetFooterIconButton}>
                                <CommentIcon />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton className={classes.tweetFooterIconButton}>
                                <RepostIcon />
                            </IconButton>
                            <span>2</span>
                        </div>
                        <div>
                            <IconButton className={classes.tweetFooterIconButton}>
                                <LikeIcon />
                            </IconButton>
                            <span>3</span>
                        </div>
                        <div>
                            <IconButton className={classes.tweetFooterIconButton}>
                                <ShareIcon />
                            </IconButton>
                            <span>4</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}