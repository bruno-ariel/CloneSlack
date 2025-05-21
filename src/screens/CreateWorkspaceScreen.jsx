import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroments'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import { useNavigate } from 'react-router-dom'

const CreateWorkspaceScreen = () => {
    const navigate = useNavigate()
    const {handleChangeInput, form_state} = useForm({name: ''})
    const handleCreateWorkspace = async (e) => {
        e.preventDefault()
        const response = await fetch(ENVIROMENT.API_URL + '/api/workspace', {
            method: 'POST',
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(form_state)
        })
        const data = await response.json()
        navigate('/home')
        console.log(data)
    }

    return (
    <div>
        <h1>Crear espacio de trabajo</h1>
        <form onSubmit={handleCreateWorkspace}>
            <div>
                <label></label>
                <input 
                id='name' 
                type="text" 
                name='name' 
                placeholder='nombre del workspace' 
                onChange={handleChangeInput}
                value={form_state.name}
                />
            </div>
            <button type='submit'>crear</button>
        </form>
    </div>
  )
}

export default CreateWorkspaceScreen