import axios from "axios"


interface UploadImageReturnProps {
    height: number
    width: number
    size: number
    url: string
}

export const uploadImage = async (image: File): Promise<UploadImageReturnProps> => {
    const formData = new FormData()
    formData.append('image', image)

    const {data} = await axios.post('upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    return data
}