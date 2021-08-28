import React from "react"

import ClearIcon from "@material-ui/icons/Clear"
import IconButton from "@material-ui/core/IconButton"

import {useStylesHome} from "../pages/themes/homeTheme"


interface ImageListProps {
    images: string[]
    removeImage?: (url: string) => void
}

export const ImageList: React.FC<ImageListProps> = ({
                                                        images,
                                                        removeImage
                                                    }: ImageListProps): React.ReactElement | null => {
    const classes = useStylesHome()

    if (!images.length) return null

    return (
        <div className={classes.imagesList}>
            {images.map(url => (
                <div className={classes.imagesListItem} key={url}>
                    {removeImage && (
                        <IconButton className={classes.imagesListItemRemove}
                                    onClick={(): void => removeImage(url)}>
                            <ClearIcon style={{fontSize: 15}} />
                        </IconButton>
                    )}
                    <img src={url} key={url} />
                </div>
            ))}
        </div>
    )
}