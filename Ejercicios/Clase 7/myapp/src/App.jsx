import { useState } from 'react'
import './App.css'

import DetalleProducto from './components/DetalleProducto'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="ecommerce">
        <h1>Producto seleccionado</h1>
        <DetalleProducto
        nombre = "Samsung UHD 4k Tizen Led 50"
        descripcion= "Smart Tv Samsung Uhd 4k Tizen Led 50,El Smart TV Samsung 50 pulgadas  4K UHD "        
        precio = {10000000}
        sku= "ABC2929"
        cantidadDisponible={25}
        />
        <Boton />
      </div>
    </>
  )
}

function Boton() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mostrarComprar, setMostrarComprar] = useState(true)

  const manejoClick = () => {
    setMostrarMensaje(true);
    setMostrarComprar(false);
  }

  return (
    <div>
      
      {mostrarComprar && <button onClick={manejoClick}>Comprar</button>}
      
      {mostrarMensaje && <p className='gracias'>Gracias por su compra!</p>}
    </div>
  );}

export default App
