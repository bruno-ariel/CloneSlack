import { useEffect, useState } from "react"

export const useFetch = (api_url, params, dependencies = []) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const callFetch = async () => {
        try {
            const response = await fetch(api_url, params)
            const responseData = await response.json()
            setData(responseData)
        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(
        () => {
            callFetch()
        },
        [...dependencies]
    )
    return { loading, data, error }
}