import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import Avatar from "@material-ui/core/Avatar"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import Alert from '@material-ui/lab/Alert'

import {useStylesHome} from "../pages/themes/homeTheme"
import {selectAddFormState} from "../store/ducks/tweets/selectors"
import {fetchAddTweet, setAddFormState} from "../store/ducks/tweets/actionCreators"
import {AddFormState} from "../store/ducks/tweets/contracts/state"
import {uploadImage} from "../utils/uploadImage"
import {UploadImages} from "./UploadImages"


interface AddTweetFormProps {
    maxRows?: number
    closeModal?: () => void
}

export interface ImageObj {
    blobUrl: string
    file: File
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
                                                              maxRows,
                                                              closeModal
                                                          }: AddTweetFormProps): React.ReactElement => {
    const classes = useStylesHome()
    const dispatch = useDispatch()
    const [text, setText] = useState<string>('')
    const [images, setImages] = useState<ImageObj[]>([])
    const addFormState = useSelector(selectAddFormState)

    const textLimitedPercent = Math.round((text.length / 280) * 100)
    const textCount = MAX_LENGTH - text.length

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = async (): Promise<void> => {
        let result = []
        dispatch(setAddFormState(AddFormState.LOADING))
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const {url} = await uploadImage(file)
            result.push(url)
        }
        dispatch(fetchAddTweet({text, images: result}))
        setText('')
        setImages([])
        if (closeModal) {
            closeModal()
        }
    }

    return (
        <>
            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar}
                        alt={`Аватар пользователя user-avatar`}
                        src='https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg'
                />
                <TextareaAutosize className={classes.addFormTextarea}
                                  onChange={handleChangeTextarea}
                                  value={text}
                                  rowsMax={maxRows}
                                  placeholder='Что происходит?'
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classes.addFormBottomActions}>
                    <UploadImages images={images} onChangeImages={setImages} />
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount === 0 ? '' : textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress variant="static"
                                                  size={20}
                                                  thickness={5}
                                                  value={text.length > MAX_LENGTH ? 100 : textLimitedPercent}
                                                  style={text.length > MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                                  variant='static'
                                                  size={20}
                                                  thickness={5}
                                                  value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button onClick={handleClickAddTweet}
                            disabled={addFormState === AddFormState.LOADING || !text || text.length > MAX_LENGTH}
                            color='primary'
                            variant='contained'>
                        {addFormState === AddFormState.LOADING ? (
                            <CircularProgress color='inherit' size={16}/>
                        ) : (
                            'Твитнуть'
                        )}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && (
                <Alert severity='error'>
                    Ошибка при добавлении твита :(
                </Alert>
            )}
        </>
    )
}