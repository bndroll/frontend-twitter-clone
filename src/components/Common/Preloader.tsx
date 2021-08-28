import React from "react"

import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core"

import preloader from '../../assets/spinner.svg'


export const useStylesPreloader = makeStyles((theme) => ({
    preloaderContainer: {
        minHeight: '100vh',
        backgroundColor: 'rgb(29, 161, 242)'
    }
}))

export const Preloader: React.FC = () => {
    const classes = useStylesPreloader()

    return (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.preloaderContainer}>
            <img src={preloader} alt="loader" />
        </Grid>
    )
}