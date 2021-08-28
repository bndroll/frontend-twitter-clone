import {makeStyles, Theme} from "@material-ui/core"


export const useStylesUser = makeStyles((theme: Theme) => ({
    profileWrapper: {
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '14px 30px',
        '& h6': {
            fontWeight: 800,
        },
    },
    profileHead: {
        height: 200,
        backgroundColor: '#c4cfd6',
    },
    profileInfo: {
        marginTop: -70,
        padding: 20,
        paddingTop: 0,
        fontSize: 16,
        '& .MuiAvatar-root': {
            width: '140px !important',
            height: '140px !important',
            border: '4px solid white',
        }
    },
    profileInfoDescription: {
        fontSize: 16
    },
    profileInfoFullname: {
        margin: '0 !important',
        fontWeight: 900,
        fontSize: 20
    },
    profileInfoUsername: {
        color: '#5b7083'
    },
    profileInfoDetails: {
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyle: "none",
        flexWrap: 'wrap',
        color: '#5b7083',
        '& li': {
            marginRight: 20
        }
    },
    profileTweets: {
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
    },
    profileTweetsCentered: {
        marginTop: 50,
        textAlign: 'center',
    },
    profileTabs: {},
    profileTab: {
        textTransform: 'none',
        minWidth: 150,

    }
}))