import React, { useState } from 'react';
import '../FormTaskComponent/Form.css';
import { v4 as uuidv4 } from 'uuid';
function Form( props ) {

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }



    return(
        <form 
        className='tarea__formulario'
        onSubmit={manejarEnvio}>
            <input
            className='tarea__input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea__boton'>
                Agrega Tarea
            </button>

        </form>
    );
}

export default Form;