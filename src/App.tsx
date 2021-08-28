import React, {useEffect} from 'react'
import {Route, Switch, useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import TwitterIcon from "@material-ui/icons/Twitter"

import {withSuspense} from "./hoc/withSuspense"
import Layout from "./pages/Layout"
import {selectIsAuth, selectUserStatus} from "./store/ducks/user/selectors"
import {fetchUserData} from "./store/ducks/user/actionCreators"
import {useStylesHome} from "./pages/themes/homeTheme"
import {LoadingState} from "./store/types"


const SignInPage = React.lazy(() => import('./pages/SignInPage')),
      HomePage = React.lazy(() => import('./pages/HomePage')),
      UserPage = React.lazy(() => import('./pages/UserPage')),
      ActivatePage = React.lazy(() => import('./pages/ActivatePage'))

const SuspendedSignInPage = withSuspense(SignInPage),
      SuspendedHomePage = withSuspense(HomePage),
      SuspendedUserPage = withSuspense(UserPage),
      SuspendedActivatePage = withSuspense(ActivatePage)

const App = () => {
    const classes = useStylesHome()
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus !== LoadingState.LOADING && loadingStatus !== LoadingState.NEVER

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])

    useEffect(() => {
        if (!isAuth && isReady) {
            history.push('/signin')
        } else if (history.location.pathname === '/') {
            history.push('/home')
        }
    }, [isAuth, isReady])

    // useEffect(() => {
    //     const el = document.querySelector('#avatar')
    //
    //     if (el) {
    //         el.addEventListener('change', () => {
    //             const avatar = document.getElementById('avatar')
    //             if (avatar) {
    //                 // @ts-ignore
    //                 let photo = avatar.files[0]
    //                 let req = new XMLHttpRequest()
    //                 let formData = new FormData()
    //
    //                 formData.append('avatar', photo)
    //                 req.open('POST', '/upload')
    //                 req.send(formData)
    //             }
    //         })
    //     }
    // }, [])

    if (!isReady) {
        return (
            <div className={classes.centered}>
                <TwitterIcon color='primary' style={{width: 80, height: 80}} />
            </div>
        )
    }

    return (
        <div className='App'>
            <Switch>
                <Route path='/signin' component={SuspendedSignInPage} exact />
                <Layout>
                    <Route path='/home' component={SuspendedHomePage} />
                    <Route path='/user/:id' component={SuspendedUserPage} exact />
                    <Route path='/user/activate/:hash' component={SuspendedActivatePage} exact />
                </Layout>
            </Switch>
        </div>
    )
}

export default App
