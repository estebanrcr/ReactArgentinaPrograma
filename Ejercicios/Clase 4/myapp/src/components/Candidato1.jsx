import { useState } from "react"

export default function Candidato1() {

    const [count, setCount] = useState(0)

    //función aumento
    const aumento = () => {
        setCount(count +1);
    }
    //función decremento para impedir que vaya debajo de 0 el contador

    const decremento = () => {
        setCount(cuentaAnterior => Math.max(cuentaAnterior -1, 0));
    }


    return (
     <div className="divCandidato1">
        <h2>Candidato 1</h2>
        <div className="contador">{count}</div>
        <div className="botonera">
            <button onClick={aumento}>+</button>
            <button onClick={decremento}>-</button>
        </div>
        
        </div>
        )
}