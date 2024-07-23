import Skeleton from './components/Skeleton/Skeleton'
import Cats from './components/Cats/Cats'
import { useState, useEffect } from 'react'


const App = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (
    <div>
      {loading ? <Skeleton /> : <Cats />
      }
    </div>

  )
}

export default App