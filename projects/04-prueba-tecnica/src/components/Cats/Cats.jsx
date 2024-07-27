import './cats.css'
import Skeleton from '../Skeleton/Skeleton'
import { useCatImage } from '../../hooks/useCatImages'
import { useCatFact } from '../../hooks/useCatFact'
import { Otro } from '../Otro'


const Cats = () => {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl, setImageUrl, error, setError } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
        setError(null);
        setImageUrl(null)
    }

    return (
        <>

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

            <Otro />
            <Otro />
            <Otro />
        </>
    )
}
export default Cats