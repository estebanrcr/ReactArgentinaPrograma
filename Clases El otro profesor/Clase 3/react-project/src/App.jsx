import React from 'react'
import './App.css'

function App() {
  let edad = 20
  let color = 'red'
  if(edad >=18) {
    color ='blue'
  } 
  const saludar = () => 'hello!'

  return (
      <div className='caja'>
        soy el app
        <br />
        {saludar()}

        <h1 style={{color :'magenta', fontWeight:900}}>
          Este es un titulo
          </h1>
          <label htmlFor="nombre"><Formulario></Formulario></label>
          <input type="text" />
        
      </div>

  )
}

export default App
