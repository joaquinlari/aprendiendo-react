import { useState, useEffect } from 'react'
import './cats.css'
import Skeleton from '../Skeleton/Skeleton'
import { getRandomFact } from '../../services/facts'
import { useCatImage } from '../../hooks/useCatImages'

const Cats = () => {

    const [fact, setFact] = useState()

    const { imageUrl, setImageUrl, error, setError } = useCatImage({ fact })

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