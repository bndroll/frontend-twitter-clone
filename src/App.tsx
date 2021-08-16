import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"
import {withSuspense} from "./hoc/withSuspense"


const SignInPage = React.lazy(() => import('./pages/SignIn/SignIn')),
      HomePage = React.lazy(() => import('./pages/Home/Home'))

const SuspendedSignInPage = withSuspense(SignInPage),
      SuspendedHomePage = withSuspense(HomePage)

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route path='/login' component={SuspendedSignInPage} />
                <Route path='/home' component={SuspendedHomePage} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    )
}

export default App
