import React from "react"
import {useDispatch, useSelector} from "react-redux"
import * as yup from 'yup'
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
import {fetchSignUp} from "../store/ducks/user/actionCreators"


interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

export interface RegisterFormProps {
    fullname: string
    username: string
    email: string
    password: string
    password2: string
}

const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required('Введите имя'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите логин'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
})

export const RegisterModal: React.FC<RegisterModalProps> = ({
                                                                open,
                                                                onClose
                                                            }: RegisterModalProps): React.ReactElement => {
    const classes = useStylesSignIn()
    const dispatch = useDispatch()

    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => {
    })
    const loadingStatus = useSelector(selectUserStatus)

    const {control, handleSubmit, errors} = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data))
    }

    React.useEffect(() => {
        if (loadingStatus === LoadingState.SUCCESS) {
            openNotificationRef.current('Регистрация успешна!', 'success')
            onClose()
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef.current('Ошибка при регистрации', 'error')
        }
    }, [loadingStatus])

    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
            title="Создайте учетную запись">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller as={TextField}
                                    control={control}
                                    name="email"
                                    className={classes.registerField}
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
                                    name="username"
                                    className={classes.registerField}
                                    id="username"
                                    label="Логин"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="text"
                                    defaultValue=""
                                    helperText={errors.username?.message}
                                    error={!!errors.username}
                                    fullWidth
                                    autoFocus/>
                        <Controller as={TextField}
                                    control={control}
                                    name="fullname"
                                    className={classes.registerField}
                                    id="fullname"
                                    label="Имя"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="text"
                                    defaultValue=""
                                    helperText={errors.fullname?.message}
                                    error={!!errors.fullname}
                                    fullWidth
                                    autoFocus/>
                        <Controller as={TextField}
                                    control={control}
                                    name="password"
                                    className={classes.registerField}
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
                                    fullWidth
                                    autoFocus/>
                        <Controller as={TextField}
                                    control={control}
                                    name="password2"
                                    className={classes.registerField}
                                    id="password2"
                                    label="Повторите пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    defaultValue=""
                                    helperText={errors.password2?.message}
                                    error={!!errors.password2}
                                    fullWidth
                                    autoFocus/>
                        <Button disabled={loadingStatus === LoadingState.LOADING}
                                type='submit'
                                variant="contained"
                                color="primary"
                                fullWidth>
                            Регистрация
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}