import React, {useState} from "react"
import {Link} from 'react-router-dom'

import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {colors} from '@material-ui/core'

import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown'

import {useStylesHome} from "../pages/themes/homeTheme"
import {useDispatch, useSelector} from "react-redux"
import {signOut} from "../store/ducks/user/actionCreators"
import {selectUserData} from "../store/ducks/user/selectors"


export const UserSideProfile: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome()
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const [anchorEl, setAnchorRef] = useState<null | HTMLElement>(null)

    const handleOpenPopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        setAnchorRef(e.currentTarget)
    }

    const handleClosePopup = (): void => {
        setAnchorRef(null)
    }

    const handleSingOut = () => {
        window.localStorage.removeItem('token')
        dispatch(signOut())
    }

    if (!userData) return null

    return (
        <>
            <div className={classes.sideProfile} onClick={handleOpenPopup}>
                <Avatar src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_normal.jpg"/>
                <div className={classes.sideProfileInfo}>
                    <b>{userData.fullname}</b>
                    <Typography style={{color: colors.grey[500]}}>{userData.username}</Typography>
                </div>
                <ArrowBottomIcon/>
            </div>
            <Menu className={classes.profileMenu}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClosePopup}
                  keepMounted>
                <Link to={`/user/${userData._id}`}>
                    <MenuItem onClick={handleClosePopup}>Мой профиль</MenuItem>
                </Link>
                <MenuItem onClick={handleSingOut}>Выйти</MenuItem>
            </Menu>
        </>
    )
}