import { useState, useEffect } from 'react'

const App = () => {

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red$json=true`

  const [fact, setFact] = useState()


  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        console.log(firstWord)
      })
  }, [])

  return (
    <main>
      <h2>App de Gatitos</h2>
      {fact && <p>{fact}</p>}
    </main>
  )
}


export default App