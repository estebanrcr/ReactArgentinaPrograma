import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {

  const [datosFormulario, setdatosFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: ''
  });

  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const manejoEntrada = (e) => {
    const { name, value } = e.target;
    setdatosFormulario({
      ...datosFormulario,
      [name]: value
    });
  };

  const cambioVisibilidad = () => {
    setMostrarContraseña(!mostrarContraseña);
  }

  return (
    <div>
      <h2>Registrate</h2>
      <form>
        <div className='crear'>
          <input
            placeholder='Ingresa tu nombre'
            type="text"
            id="nombre"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={manejoEntrada}
            required
          />
          <input
            placeholder='Ingresa tu apellido'
            type="text"
            id="apellido"
            name="apellido"
            value={datosFormulario.apellido}
            onChange={manejoEntrada}
            required
          />
          <input
            placeholder='Ingresa tu correo'
            type="email"
            id="email"
            name="email"
            value={datosFormulario.email}
            onChange={manejoEntrada}
            required
          />
          <input
            placeholder='Ingresa tu teléfono'
            type="tel"
            id="telefono"
            name="telefono"
            value={datosFormulario.telefono}
            onChange={manejoEntrada}
            required
          />
          <input
            placeholder='elige una contraseña'
            type={mostrarContraseña ? 'text' : 'password'}
            id="password"
            name="password"
            value={datosFormulario.password}
            onChange={manejoEntrada}
            required
          />
          <input
            placeholder='confirma tu contraseña'
            type={mostrarContraseña ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={datosFormulario.confirmPassword}
            onChange={manejoEntrada}
            required
          />
          <div className='mostrar-contraseña'>
            <label htmlFor="">
              <input
               type="checkbox"
               onChange={cambioVisibilidad} />
               Mostrar contraseña
            </label>
          </div>
          
        <button className='boton-registrar'type="submit">Registrarse</button>
        </div>
          
      </form>
    </div>
  );
}

export default App
