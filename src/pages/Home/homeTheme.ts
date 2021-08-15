import {makeStyles} from "@material-ui/core"
import {grey} from "@material-ui/core/colors"


export const useStylesHome = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
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
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
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
        marginLeft: 15,
        fontWeight: 700,
        fontSize: 20,
    },
    sideMenuListItemIcon: {
        marginLeft: -5,
        fontSize: 32,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '14px 30px',
        '& h6': {
            fontWeight: 700,
        },
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    tweet: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        cursor: 'pointer',
        padding: '15px',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        left: -13,
        maxWidth: 450,
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
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#e6ecf0',
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 0,
        fontFamily: "inherit",
        resize: "none",
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    rightSide: {
        padding: 20,
        position: "sticky",
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
    modalAddTweetForm: {
        width: 550,
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}))