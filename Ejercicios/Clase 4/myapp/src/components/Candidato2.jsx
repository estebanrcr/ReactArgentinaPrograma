import { useState } from "react"


export default function Candidato2() {

    const [count2, setCount] = useState(0)

        //función aumento
        const aumento = () => {
            setCount(count2 +1);
        }
        //función decremento para impedir que vaya debajo de 0 el contador
    
        const decremento = () => {
            setCount(cuentaAnterior => Math.max(cuentaAnterior -1, 0));
        }
    

    return (
    <div className="divCandidato2">
        <h2>Candidato 2</h2>
        <div className="contador">{count2}</div>
        

        <div className="botonera">
            <button onClick={aumento}>+</button>
            <button onClick={decremento}>-</button>
        </div>

        </div>
    )
}