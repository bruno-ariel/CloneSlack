import { useState } from "react"

const useForm = (form_initial_state) => {
    //form_initial_state = {email_ "", password: ""}
    const [form_state, setFormState] = useState(form_initial_state)

    const handleChangeInput = (event) =>{
        setFormState(prev_form_state => {
            const field_name = event.target.name
            const field_value = event.target.value
            return {...prev_form_state, [field_name]: field_value}
            //clonando consigo romper la referencia, a ese clon le cambio el valor, devuelvo ese objeto distinto 
            // //y ahora se actualiza mi componente
            // corchete importante porque me permite actualizar el valor de la variable
        })
        //se necesita clonar porque el prev_form_state y el form_state son referencias a la misma variable
    }
    return {
        form_state,
        handleChangeInput
    }
}

export default useForm