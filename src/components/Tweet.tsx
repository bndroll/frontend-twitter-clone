import React, {useState} from "react"
import {useHistory} from 'react-router-dom'

import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import {useStylesHome} from "../pages/themes/homeTheme"
import {formatDate} from "../utils/formatDate"
import {useDispatch} from "react-redux"
import {ImageList} from "./ImageList"
import {removeTweet} from "../store/ducks/tweets/actionCreators"


interface TweetProps {
    _id: string
    text: string
    createdAt: string
    images?: string[]
    user: {
        fullname: string
        username: string
        avatarUrl: string
    }
}

export const Tweet: React.FC<TweetProps> = ({_id, text, user, createdAt, images}: TweetProps): React.ReactElement => {
    const dispatch = useDispatch()
    const classes = useStylesHome()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClickTweet = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        history.push(`/home/tweet/${_id}`)
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
        e.preventDefault()
        setAnchorEl(e.currentTarget)
    }

    const handleClose = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation()
        e.preventDefault()
        setAnchorEl(null)
    }

    const handleRemove = (e: React.MouseEvent<HTMLElement>): void => {
        handleClose(e)
        if (window.confirm('Вы действительно хотите удалить твит ?')) {
            dispatch(removeTweet(_id))
        }
    }

    return (
        <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`}>
            <Paper className={classes.tweet} variant="outlined">
                <Avatar className={classes.tweetAvatar}
                        alt={`Аватар пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                />
                <div className={classes.tweetBody}>
                    <div className={classes.tweetHeader}>
                        <div>
                            <b>{user.fullname}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
                        </div>
                        <div>
                            <IconButton aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                                <MenuItem onClick={handleRemove}>Удалить твит</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <Typography variant='body1' className={classes.tweetText} gutterBottom>
                        {text}
                        {images && <ImageList images={images}/>}
                    </Typography>
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
        </a>
    )
}