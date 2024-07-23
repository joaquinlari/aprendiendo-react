import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const App = () => {

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

    const threeFirstWord = fact.split(' ', 3).join(' ')
    console.log(threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>{fact}</p>}
      <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />
    </main>
  )
}
export default App