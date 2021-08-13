import React from "react"
import {Container, createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles} from "@material-ui/core"
import {SideMenu} from "../../components/SideMenu"
import FilterVintageIcon from '@material-ui/icons/FilterVintageOutlined'
import {Tweet} from "../../components/Tweet";
import {grey} from "@material-ui/core/colors";


export const useStylesHome = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 32,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
    },
    sideMenuListItem: {
        cursor: "pointer",
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 15px',
            borderRadius: 30,
            height: 40,
            marginBottom: 8,
            transition: 'background-color 0.2s ease-in-out',
            '& h6': {
                transition: 'color 0.2s ease-in-out',
            },
            '& svg path': {
                transition: 'color 0.2s ease-in-out',
            }
        }
    },
    sideMenuListItemLabel: {
        marginLeft: 10,
        fontWeight: 500,
        fontSize: 16,
    },
    sideMenuListItemIcon: {
        marginLeft: -4,
        fontSize: 24,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 700,
        },
    },
    tweet: {
        cursor: 'pointer',
        padding: '15px 20px 8px',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        left: -13,
        width: '95%',
    },
    tweetFooterIconButton: {
        marginRight: 3,
        '& span': {
            '& svg': {
                fontSize: 18
            }
        },
        '&:hover': {
            '& span': {
                '& svg': {
                    color: theme.palette.primary.main
                }
            }
        }
    },
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 50,
            padding: '0 20px',
        }
    })
)(InputBase)

const Home: React.FC = (): React.ReactElement => {
    const classes = useStylesHome()

    return (
        <Container className={classes.wrapper} maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.tweetsWrapper} variant="outlined" square>
                        <Paper className={classes.tweetsHeader} variant="outlined" square>
                            <Typography variant='h6'>Главная</Typography>
                            <FilterVintageIcon color='primary' />
                        </Paper>

                        {[...new Array(20).fill(
                            <Tweet text='Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик.'
                                   classes={classes}
                                   user={{
                                       fullName: 'Ilan Mask',
                                       userName: 'ilya_moksov',
                                       avatarUrl: 'https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                                   }}
                            />
                        )]}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField placeholder='Поиск по твиттеру' fullWidth />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home