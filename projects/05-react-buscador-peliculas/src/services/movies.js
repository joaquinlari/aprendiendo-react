const API_KEY = 'fb6a907c'

export const searchMovies = async ({ search }) => {

    if (search) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(json => {
                setResponseMovies(json)
            })
    } else {
        setResponseMovies(withoutResults)
    }
}