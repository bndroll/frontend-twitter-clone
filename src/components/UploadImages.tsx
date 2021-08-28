import React, {useCallback, useEffect, useRef} from "react"

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import IconButton from "@material-ui/core/IconButton"

import {ImageObj} from "./AddTweetForm"
import {ImageList} from "./ImageList"


interface UploadImagesProps {
    images: ImageObj[]
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImagesProps> = ({
                                                              images,
                                                              onChangeImages
                                                          }: UploadImagesProps): React.ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        onChangeImages((prev) => prev.filter(item => item.blobUrl !== url))
    }

    const handleChangeFileInput = useCallback((e: Event) => {
        if (e.target) {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]

            if (file) {
                const fileObj = new Blob([file])
                onChangeImages(prev => [
                    ...prev,
                    {
                        blobUrl: URL.createObjectURL(fileObj),
                        file,
                    }
                ])
            }
        }
    }, [])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }

        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('change',  handleChangeFileInput)
            }
        }
    }, [])

    return (
        <div>
            <ImageList images={images.map(img => img.blobUrl)} removeImage={removeImage}>
                <IconButton onClick={handleClickImage} color='primary'>
                    <ImageOutlinedIcon style={{fontSize: 26}} />
                </IconButton>
                <input ref={inputRef} type='file' id='upload-input' hidden />
            </ImageList>
        </div>
    )
}