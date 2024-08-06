import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'


export function useMovies({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(false)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    const sortedMovies = sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))


return { movies, getMovies, loading }
}