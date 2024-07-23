import { useState, useEffect } from 'react'
import './cats.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

let threeFirstWord;

const Cats = () => {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // para recuperar la cita al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    // para recuperar la imagen cada vez que tengamos una cita nueva
    useEffect(() => {

        if (!fact) return

        threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?size=50&color=red`)
            .then(res => res.blob())
            .then(blob => {
                const imageObjectUrl = URL.createObjectURL(blob)
                setImageUrl(imageObjectUrl)
            })
    }, [fact])

    return (
        <main className="wrap">
            <div className="text">
                <h2 className="title">App de Gatitos</h2>
                {fact && <p className="subtitle">{fact}</p>}
            </div>
            <div className="album">
                {imageUrl && <img className="image" src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}
            </div>
        </main>
    )
}
export default Cats