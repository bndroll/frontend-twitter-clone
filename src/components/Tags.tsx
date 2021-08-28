import React from "react"
import {useSelector} from "react-redux"
import {Link} from 'react-router-dom'

import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

import {useStylesHome} from "../pages/themes/homeTheme"
import {selectIsTagsLoaded, selectTagsItems} from "../store/ducks/tags/selectors"


export const Tags: React.FC = (): React.ReactElement | null => {
    const classes = useStylesHome()
    const items = useSelector(selectTagsItems)
    const isLoaded = useSelector(selectIsTagsLoaded)

    if (!isLoaded) return null

    const makeAStyleNumber = (number: number): string => {
        let str = number + ''
        let newStr = ''
        str = str.split('').reverse().join('')

        for (let i = 0; i < str.length; i++) {
            if (i % 3 === 0) newStr += ' '

            newStr += str[i]
        }

        return newStr.split('').reverse().join('')
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {items.map(tag => (
                    <React.Fragment key={tag._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${tag.name}`}>
                                <ListItemText
                                    primary={tag.name}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: {makeAStyleNumber(tag.count)}
                                        </Typography>
                                    }
                                />
                            </Link>
                        </ListItem>
                        <Divider component="li"/>
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}