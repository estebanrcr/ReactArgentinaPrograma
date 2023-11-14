import { useState } from "react"


export default function Candidato2() {

    const [count2, setCount] = useState(0)

    return (
    <div className="divCandidato2">
        <h2>Candidato 2</h2>
        <div className="contador">{count2}</div>
        

        <div className="botonera">
            <button onClick={() => setCount((count2) => count2 + 1)}>+</button>
            <button onClick={() => setCount((count2) => count2 - 1)}>-</button>
        </div>

        </div>
    )
}