import React from "react"

import InputAdornment from "@material-ui/core/InputAdornment"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import SearchIcon from "@material-ui/icons/Search"

import {SideMenu} from "../components/SideMenu"
import {SearchTextField} from "../components/SearchTextField"
import {useStylesHome} from "./themes/homeTheme"
import {Tags} from "../components/Tags"
import {Users} from "../components/Users"


interface LayoutProps {
    children: React.ReactNode
}

const HomePage: React.FC<LayoutProps> = ({children}: LayoutProps): React.ReactElement => {
    const classes = useStylesHome()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu />
                </Grid>
                <Grid sm={8} md={6} item>
                    {children}
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
                                         fullWidth />
                        <Tags />
                        <Users />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage