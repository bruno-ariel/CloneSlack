import React from 'react'
import RequestEmailForm from '../Components/RequestEmailForm'

const ErrorScreen = () => {
    const url = new URLSearchParams(window.location.search)
    const error = url.get('error')
    const ERRORS = {
        "RESEND_VERIFY_TOKEN": {
            title: "Token de verificación reenviado",
            message: "Se ha enviado un nuevo token de verificación a tu correo electrónico.",
            Component: null
        },
        "REQUEST_EMAIL_VERIFY_TOKEN" :{
            title: "no se pudo verificar tu cuenta",
            message: "debes volver a escribir tu correo electrónico",
            Component: RequestEmailForm
        },
        "DEFAULT": {
            title: "Error",
            message: "Ha ocurrido un error inesperado.",
            Component: null
        }
    }
    const{ title, message , Component} = ERRORS[error] ? ERRORS[error] : ERRORS["DEFAULT"]

    return (
        <div>
            <h1>{title}</h1>
            <h3>{message}</h3>
            {Component && <Component/>}
        </div>
    )
}


export default ErrorScreen