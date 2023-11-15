import './App.css'
import Candidato1 from './components/Candidato1'
import Candidato2 from './components/Candidato2'

function App() {

  return (
    <>
      <div className='dosContadoresDiv'>
        <h1>Boca de urnas</h1>
        <Candidato1 />
        <Candidato2 />
      </div>      
    </>
  )
}

export default App
