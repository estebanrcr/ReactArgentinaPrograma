import { useState } from "react"

export default function Candidato1() {

    const [count, setCount] = useState(0)

    return (
     <div className="divCandidato1">
        <h2>Candidato 1</h2>
        <div className="contador">{count}</div>
        <div className="botonera">
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
        
        </div>
        )
}