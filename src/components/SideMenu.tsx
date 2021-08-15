import React, {useState} from "react"
import classNames from "classnames"
import {Link} from 'react-router-dom'

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

import {useStylesHome} from "../pages/Home/homeTheme"
import {ModalBlock} from "./ModalBlock"
import {AddTweetForm} from "./AddTweetForm"


interface SideMenuProps {
    classes: ReturnType<typeof useStylesHome>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

    const handleOpenAddTweet = (): void => {
        setVisibleAddTweet(true)
    }

    const handleCloseAddTweet = (): void => {
        setVisibleAddTweet(false)
    }

    return (
        <ul className={classes.sideMenuList}>
            <Link to={`/home`}>
                <li className={classes.sideMenuListItem}>
                    <IconButton className={classes.logo} color='primary'>
                        <TwitterIcon className={classes.logoIcon}/>
                    </IconButton>
                </li>
            </Link>

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
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                            Профиль
                        </Typography>
                    </Hidden>
                </div>
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
                    <AddTweetForm maxRows={15} classes={classes}/>
                </div>
            </ModalBlock>
        </ul>
    )
}