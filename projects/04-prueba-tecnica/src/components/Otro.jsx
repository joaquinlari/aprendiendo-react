import { useCatImage } from '../hooks/useCatImages'

export const Otro = () => {

    const { imageUrl } = useCatImage({ fact: 'cat' })
    return (
        <>
            {imageUrl && <img src={imageUrl}></img>}
        </>
    )
}