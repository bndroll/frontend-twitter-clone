import React from "react"
import {useDispatch, useSelector} from "react-redux"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/dist/yup"
import {Controller, useForm} from "react-hook-form"

import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import {Color} from "@material-ui/lab/Alert"

import {ModalBlock} from "./ModalBlock"
import {useStylesSignIn} from "../pages/themes/signInTheme"
import {LoadingState} from "../store/types"
import {selectUserStatus} from "../store/ducks/user/selectors"
import {fetchSignIn} from "../store/ducks/user/actionCreators"


interface LoginModalProps {
    open: boolean
    onClose: () => void
}

export interface LoginFormProps {
    email: string
    password: string
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
})

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}: LoginModalProps): React.ReactElement => {
    const classes = useStylesSignIn()
    const dispatch = useDispatch()

    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {})
    const loadingStatus = useSelector(selectUserStatus)

    const {control, handleSubmit, errors} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data))
    }

    React.useEffect(() => {
        if (loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef.current('Авторизация успешна!', 'success')
            onClose()
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error')
        }
    }, [loadingStatus])

    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
            title="Войти в аккаунт">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller as={TextField}
                                    control={control}
                                    name="email"
                                    className={classes.loginSideField}
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    defaultValue=""
                                    helperText={errors.email?.message}
                                    error={!!errors.email}
                                    fullWidth
                                    autoFocus/>
                        <Controller as={TextField}
                                    control={control}
                                    name="password"
                                    className={classes.loginSideField}
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    defaultValue=""
                                    helperText={errors.password?.message}
                                    error={!!errors.password}
                                    fullWidth/>
                        <Button disabled={loadingStatus === LoadingState.LOADING}
                                type='submit'
                                variant="contained"
                                color="primary"
                                fullWidth>
                            Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}