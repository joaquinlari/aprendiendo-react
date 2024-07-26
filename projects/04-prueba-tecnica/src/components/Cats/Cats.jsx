import { useState, useEffect } from 'react'
import './cats.css'
import Skeleton from '../Skeleton/Skeleton'
import { getRandomFact } from '../../services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

let threeFirstWord;

const useGetImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()
    const [error, setError] = useState(null);
    // para recuperar la imagen cada vez que tengamos una cita nueva
    useEffect(() => {

        if (!fact) return

        threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

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

const Cats = () => {

    const [fact, setFact] = useState()

    const { imageUrl, setImageUrl, error, setError } = useGetImage({ fact })

    // para recuperar la cita al cargar la pagina
    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])

    const handleClick = () => {
        getRandomFact()
            .then(newFact => setFact(newFact))

        setError(null);
        setImageUrl(null)
    }

    return (
        <main className="wrap">
            <div className="text">
                <h2 className="title">App de Gatitos</h2>
                <button onClick={handleClick} className="button">
                    Get new fact
                </button>
                {error && <p className="error">{typeof error === 'string' ? error : 'An unexpected error occurred'}</p>}
                {fact && <p className="subtitle">{fact}</p>}
            </div>
            <div className="album">
                {imageUrl ?
                    <img className="image" src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>
                    : <Skeleton />
                }
            </div>
        </main>
    )
}
export default Cats