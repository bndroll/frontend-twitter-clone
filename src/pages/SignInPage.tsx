import React, {useState} from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleIcon from '@material-ui/icons/PeopleOutline'
import MessageIcon from '@material-ui/icons/ModeCommentOutlined'

import {useStylesSignIn} from "./themes/signInTheme"
import {LoginModal} from '../components/LoginModal'
import {RegisterModal} from "../components/RegisterModal"


const SignInPage: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

    const clickOpenSingInHandler = (): void => setVisibleModal('signIn')
    const clickOpenSingUpHandler = (): void => setVisibleModal('signUp')

    const handleCloseModal = (): void => setVisibleModal(undefined)

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleIcon className={classes.blueSideListInfoIcon} />
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon} />
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br />
                    <Button
                        onClick={clickOpenSingUpHandler}
                        style={{ marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={clickOpenSingInHandler}
                            variant="outlined"
                            color="primary"
                            fullWidth>
                        Войти
                    </Button>

                    <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} />
                    <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />
                </div>
            </div>
        </div>
    )
}

export default SignInPage