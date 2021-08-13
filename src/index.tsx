import React from 'react'
import ReactDOM from 'react-dom'
import {CssBaseline, ThemeProvider} from "@material-ui/core"
import {BrowserRouter} from "react-router-dom"

import './index.css'
import App from './App'
import theme from "./theme"


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>, document.getElementById('root')
)
