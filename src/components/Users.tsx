import React from "react"

import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"

import PersonAddIcon from "@material-ui/icons/PersonAddOutlined"

import {useStylesHome} from "../pages/themes/homeTheme"
import {useSelector} from "react-redux"
import {selectUsersItems} from "../store/ducks/users/selectors"


export const Users: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome()
    const items = useSelector(selectUsersItems)

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
            </Paper>
            <List>
                {
                    items.map(item => (
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
                    ))
                }
                <Divider component='li'/>
            </List>
        </Paper>
    )
}