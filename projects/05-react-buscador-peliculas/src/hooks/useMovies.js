import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const getMovies = async () => {

        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
    }

    return { movies, getMovies }
}