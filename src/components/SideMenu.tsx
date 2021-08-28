import React, {useState} from "react"
import classNames from "classnames"
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"

import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import TwitterIcon from "@material-ui/icons/Twitter"
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import CreateIcon from '@material-ui/icons/Create'
import HomeOutlined from '@material-ui/icons/HomeOutlined'

import {useStylesHome} from "../pages/themes/homeTheme"
import {ModalBlock} from "./ModalBlock"
import {AddTweetForm} from "./AddTweetForm"
import {UserSideProfile} from "./UserSideProfile"
import {selectUserData} from "../store/ducks/user/selectors"


export const SideMenu: React.FC = (): React.ReactElement => {
    const classes = useStylesHome()
    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)
    const userData = useSelector(selectUserData)

    const handleOpenAddTweet = (): void => {
        setVisibleAddTweet(true)
    }

    const handleCloseAddTweet = (): void => {
        setVisibleAddTweet(false)
    }

    return (
        <>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <Link to={`/home`}>
                        <IconButton className={classes.logo} color='primary'>
                            <TwitterIcon className={classes.logoIcon}/>
                        </IconButton>
                    </Link>
                </li>

                <li className={classes.sideMenuListItem}>
                    <Link to="/home">
                        <div>
                            <HomeOutlined className={classes.sideMenuListItemIcon}/>
                            <Hidden smDown>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                    Главная
                                </Typography>
                            </Hidden>
                        </div>
                    </Link>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                Поиск
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                Уведомления
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <MessageIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                Сообщения
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                Закладки
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListIcon className={classes.sideMenuListItemIcon}/>
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                Список
                            </Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Link to={`/user/${userData?._id}`}>
                        <div>
                            <UserIcon className={classes.sideMenuListItemIcon}/>
                            <Hidden smDown>
                                <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                    Профиль
                                </Typography>
                            </Hidden>
                        </div>
                    </Link>
                </li>

                <li className={classes.sideMenuListItem}>
                    <Button className={classes.sideMenuTweetButton}
                            variant="contained"
                            color="primary"
                            onClick={handleOpenAddTweet}
                            fullWidth>
                        <Hidden smDown>
                            Твитнуть
                        </Hidden>
                        <Hidden mdUp>
                            <CreateIcon/>
                        </Hidden>
                    </Button>
                </li>

                <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet}>
                    <div className={classNames(classes.modalAddTweetForm, classes.addForm)}>
                        <AddTweetForm closeModal={handleCloseAddTweet} maxRows={15} />
                    </div>
                </ModalBlock>
            </ul>
            <UserSideProfile />
        </>
    )
}