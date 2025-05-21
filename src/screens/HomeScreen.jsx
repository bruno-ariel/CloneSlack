import React from 'react'
import ENVIROMENT from '../utils/constants/enviroments'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const {
        data: workspace_response, 
        error: workspace_response_error, 
        loading: workspace_loading
    } = useFetch(ENVIROMENT.API_URL + '/api/workspace', {
        method: "GET",
        headers: getAuthenticatedHeaders()
    })
    console.log(workspace_response)
    /* const getWorkspaces = async () => {
        const response = await fetch(ENVIROMENT.API_URL + '/api/workspace', {
        method: "GET",
        headers: getAuthenticatedHeaders()
        })
        const responseData = await response.json()
        console.log(responseData)
    }
    getWorkspaces() */
    return (
        <>
        <h1>Bienvenido a la app</h1>
        <div>
            <h2>Tus espacios de trabajo</h2>
            <div>
                {
                workspace_loading
                ? <h2>Cargando espacios de trabajo...</h2>
                : workspace_response.data.workspaces.map(workspace =>{
                    return (
                        <div key={workspace._id}>
                            <h3>{workspace.name}</h3>
                            <Link to={`/workspace/${workspace._id}`}>Ir al workspace</Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
        </>
    )
}

export default HomeScreen