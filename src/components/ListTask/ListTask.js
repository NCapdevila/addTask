import React, { useState } from 'react';
import Form from '../FormTaskComponent/Form';
import '../ListTask/ListTask.css';
import Task from '../TaskComponent/Task';

function ListTask(){

    const [tasks, setTasks] = useState([]);

    const agregarTarea = task =>{
        if (task.texto.trim()){
            task.texto = task.texto.trim();
            const tareasActualizadas = [task, ...tasks];
            setTasks(tareasActualizadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tasks.filter(task => task.id !== id);
        setTasks(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tasks.map(task => {
            if (task.id === id){
                task.completa = !task.completada;
            }
            return task;
        });

        setTasks(tareasActualizadas);
    }
    return(
        <>
            <Form onSubmit={agregarTarea}/>
            <div className='tareas__lista__contenedor'>
                {
                    tasks.map(
                        (task) =>
                        <Task
                        key={task.id} 
                        id={task.id}
                        texto={task.texto}
                        completada = {task.completada}
                        completarTarea = {completarTarea}
                        eliminarTarea = {eliminarTarea} />
                    )
                }
            </div>
        </>
    );
}

export default ListTask;