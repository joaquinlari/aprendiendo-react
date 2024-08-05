import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getMovies = async () => {
        try {
            setLoading(true)
            setError(false)
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return { movies, getMovies }
}