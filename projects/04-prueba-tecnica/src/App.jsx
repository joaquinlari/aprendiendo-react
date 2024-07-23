import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

let threeFirstWord;

const App = () => {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [tempFact, setTempFact] = useState()

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setTempFact(fact)
      })
  }, [])

  // para actualizar el estado principal después del primer hecho
  useEffect(() => {
    if (tempFact) {
      setFact(tempFact)  // actualizar el estado principal
    }
  }, [tempFact])


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
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}
    </main>
  )
}
export default App