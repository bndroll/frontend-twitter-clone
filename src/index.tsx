import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {CssBaseline, ThemeProvider} from "@material-ui/core"

import './index.css'
import App from './App'
import theme from "./theme"
import {store} from "./store/store"


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>, document.getElementById('root')
)
