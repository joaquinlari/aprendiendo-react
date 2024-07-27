import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null);

    // para recuperar la imagen cada vez que tengamos una cita nueva
    useEffect(() => {

        if (!fact) return;

        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?size=50&color=red`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok")
                }
                return (res.blob())
            })
            .then(blob => {
                const imageObjectUrl = URL.createObjectURL(blob)
                setImageUrl(imageObjectUrl)
            })
            .catch(error => setError(error.message))
    }, [fact])
    return { imageUrl, setImageUrl, error, setError }
}