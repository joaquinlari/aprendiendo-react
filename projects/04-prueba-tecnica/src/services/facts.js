const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async (setError) => {
    try {
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        if (!res.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await res.json()
        const { fact } = data
        return fact
    } catch (error) {
        return setError(error.message)
    }
}