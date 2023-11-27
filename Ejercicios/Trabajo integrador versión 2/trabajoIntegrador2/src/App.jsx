import { useState, useEffect } from 'react'
import './App.css'

const tareasIniciales = [
  {id: 1, tarea: 'comprar para el asado del domingo', completed: false},
  {id: 2, tarea: 'Llevar el auto al taller por el aceite', completed: false},
  {id: 3, tarea: 'Compar Espinaca', completed: false},
  {id: 4, tarea: 'Salir en bicicleta 3 veces por semana', completed: false},
]

function App() {
  
  const [proximoId, setProximoId] = useState(5)
  const [tareas, setTareas] = useState(tareasIniciales)
  const [tienesTareas, setTienesTareas] = useState(true);

  //----funciones
  function agregar(tarea){
    const nuevo = {id: proximoId +1 , tarea: tarea, completed: false}
    const copia = [...tareas, nuevo]
    setTareas(copia)
    setProximoId(proximoId +1)
  }

  function borrar(id) {
    const copia = tareas.filter(tarea => tarea.id !== id)
    setTareas(copia)
  }

  function modificar(id,) {
    const actual = tareas.find(tarea => tarea.id === id)
    const nueva = {...actual, tarea: actual.value}
    const copia = tareas.map(tarea => tarea.id === id ? nueva: tarea)
    setTareas(copia)
  }

  function estaCompletada(id) {
    const actualizadasTareas = tareas.map(
      tarea => tarea.id === id ? { ... tarea, completed: ! tarea.completed} : tarea
      )
    setTareas(actualizadasTareas)
  }

  function borrarTodas() {
    setTareas([])
  }

  function limpiarCompletadas(completed){
    const listaLimpiada = tareas.filter(tarea => !tarea.completed)
    setTareas(listaLimpiada)
  }

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    setTienesTareas(tareas.length > 0);
  }, [tareas]);

  useEffect(() => {
    setTienesTareas(tareas.length > 0); 
  }, []); 

  return (
    <>
      <main className='main-tareas'>
        <h1>{tienesTareas ? 'Lista de Tareas' : 'No hay más tareas !'}</h1>
        <div className="container">
          <TaskForm alAgregar={agregar}/>
          <TaskList tareas={tareas} alBorrar={borrar} alModificar={modificar}cambiarCompletada={estaCompletada} />
          <div className='botonera'>
           <button id="limpiar-completadas" onClick={limpiarCompletadas}>Limpiar completadas</button>
            <button id="borrar-tareas" onClick={borrarTodas}>Borrar Tareas</button>
          </div>
        </div>
      </main>
    </>
  );
}

//TASKLIST
const TaskList = ({ tareas, cambiarCompletada, alBorrar }) => {
  return ( 
    <div>
      {tareas.map(tarea => (
        <TaskItem
        key={tarea.id}
        tarea={tarea}
        cambiarCompletada={cambiarCompletada}
        alBorrar={alBorrar}
        />
      ))}
    </div>
  )   
}

//TASKITEM
function TaskItem({tarea, alBorrar, cambiarCompletada}) {
  function borrar() {
    alBorrar(tarea.id)
  }

  function estaCompletada() {
    cambiarCompletada(tarea.id)
  }

  return (
    <div className='task-item' >
      <input
       type="checkbox"
       id='checkbox'
       checked={tarea.completed}
       onChange={estaCompletada}     
      />
      <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none'}}>{tarea.tarea}</span>
      <button className='boton-borrar' onClick={borrar}>X</button>
  </div>
  )
}

//TASKFORM
function TaskForm({ alAgregar }) {
  const [tarea, setTarea] = useState('');
  function agregaNomas(e) {
    e.preventDefault();
   if (tarea === '') return;
    alAgregar(tarea);
    setTarea('');
  }

  return (
    <form onSubmit={agregaNomas}>
      <input id="proxima-tarea"placeholder="¿Cuál es tu próxima misión?"autoFocus type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} />
      <button id="agregar-tarea"type='submit'>+</button>
    </form>
  );
}
export default App