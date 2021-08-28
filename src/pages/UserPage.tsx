import React, {useEffect, useState} from 'react'
import {RouteComponentProps} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import {Skeleton} from "@material-ui/lab"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import CircularProgress from "@material-ui/core/CircularProgress"

import {BackButton} from "../components/BackButton"
import {useStylesUser} from "./themes/userTheme"
import {selectTweetsItems} from "../store/ducks/tweets/selectors"
import {selectIsTweetLoading} from "../store/ducks/tweet/selectors"
import {User} from "../store/ducks/user/contracts/state"
import {fetchTweets} from "../store/ducks/tweets/actionCreators"
import {AuthAPI} from "../services/api/authAPI"
import {Tweet} from "../components/Tweet";


const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({match}): React.ReactElement => {
    const classes = useStylesUser()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetLoading)
    const [activeTab, setActiveTab] = useState<number>(0)
    const [userData, setUserData] = useState<User | undefined>()

    useEffect(() => {
        const userId = match.params.id
        dispatch(fetchTweets())
        if (userId) {
            AuthAPI.getUserInfo(userId).then(({data}) => {
                setUserData(data)
            })
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue)
    }

    return (
        <Paper className={classes.profileWrapper}>
            <Paper className={classes.profileHeader}>
                <BackButton/>

                <div>
                    <Typography variant='h6'>{userData?.fullname}</Typography>
                    <Typography variant='caption' display='block' gutterBottom>{tweets.length} твит(ов)</Typography>
                </div>
            </Paper>

            <div className={classes.profileHead}/>

            <div className={classes.profileInfo}>
                <Avatar/>
                {
                    !userData ? (
                        <Skeleton variant='text' width={250} height={30}/>
                    ) : (
                        <h2 className={classes.profileInfoFullname}>{userData?.fullname}</h2>
                    )
                }
                {
                    !userData ? (
                        <Skeleton variant='text' width={60}/>
                    ) : (
                        <span className={classes.profileInfoUsername}>@{userData?.username}</span>
                    )
                }

                <p className={classes.profileInfoDescription}>
                    Frontend Developer / UI Designer / JavaScript Красное сердце ReactJS ⚛ React Native,
                    NodeJS
                </p>

                <ul className={classes.profileInfoDetails}>
                    <li>Saratov, Russia</li>
                    <li><a className="link" href="#">some link</a></li>
                    <li>Дата рождения: 23 декабря 2002 г.</li>
                    <li>Регистрация: декабрь 2020 г.</li>
                </ul>
            </div>
            <Tabs className={classes.profileTabs}
                  value={activeTab}
                  onChange={handleChange}
                  indicatorColor='primary'
                  textColor='primary'>
                <Tab className={classes.profileTab} label='Твиты'/>
                <Tab className={classes.profileTab} label='Твиты и ответы'/>
                <Tab className={classes.profileTab} label='Медиа'/>
                <Tab className={classes.profileTab} label='Нравится'/>
            </Tabs>
            <div className={classes.profileTweets}>
                {
                    isLoading ? (
                        <div className={classes.profileTweetsCentered}>
                            <CircularProgress/>
                        </div>
                    ) : (
                        tweets.map(tweet => (
                            <Tweet key={tweet._id} {...tweet} />
                        ))
                    )
                }
            </div>
        </Paper>
    )
}

export default UserPage