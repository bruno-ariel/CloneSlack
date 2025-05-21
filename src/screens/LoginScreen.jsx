import React, { useContext, useState } from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroments'
import { Link , useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const LoginScreen = () => {

    const {login , isAuthenticatedState } = useContext(AuthContext)
    console.log(isAuthenticatedState)

    const {form_state, handleChangeInput} = useForm({email:"", password:""})
    const url = new URLSearchParams(window.location.search) 
    const navigate = useNavigate()
    if(url.get('verified')){
        alert('Cuenta verificada')
    }
    const handleSubmitForm = async (e) =>{
        try{
            e.preventDefault()
            const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
            },
                body: JSON.stringify(form_state)
        })
            const data = await response.json()

            login(data.data.access_token)
            navigate('/home')
        }
        catch(error){
            console.error("error al loguear",error)
        }
    }
    const errores = {
        email: [
        ],
        password: [
        ]
    }
    form_state.email && form_state.email.length > 30 && errores.email.push('El email no puede superar los 30 caracteres')
    form_state.email && form_state.email.length < 5 && errores.email.push('El email debe tener al menos 5 caracteres')
    form_state.password && form_state.password.length < 5 && errores.password.push("La contraseña debe tener al menos 5 caracteres")
        
    return(
        <div>
            <h1>Pantalla de logueo</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor="email">Ingresa tu email</label>
                    <input
                        name='email'
                        id='email'
                        placeholder='email@gmail.com'
                        value={form_state.email}
                        onChange={handleChangeInput}
                    />
                    {
                        errores.email.map((error, index) => <p key={index}style={{color: 'red'}}> {error}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="password">Ingresa tu contraseña</label>
                    <input
                        name='password'
                        id='password'
                        value={form_state.password}
                        onChange={handleChangeInput}
                    />
                    {
                        errores.password.map((error, index) => <p key={index} style={{color: 'red'}}> {error}</p>)
                    }
                </div>
                <button type='submit' disabled={
                        errores.email.length ||
                        errores.password.length ||
                        !form_state.email ||
                        !form_state.password
                        }>Iniciar session
                </button>
                <span> Aún no tienes cuenta ? <Link to={'/register'}>Registrate</Link></span>
                <Link to={'/forgot-password'}>Olvide mi contraseña</Link>
            </form>
        </div>
    )
}

export default LoginScreen