import { useState } from 'react'
import Banner from './Components/Banner'
import Formulario from './Components/Formulario'
import Time from './Components/Time'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    console.log(colaborador);

    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
    </>
  )
}

export default App
