import React from 'react'
import Eventos from './components/Eventos'
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'
import Contador from './components/Contador'
import Listas from './components/Listas'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="container mt-5">
      <h1>Hola mundo React</h1>
      {/* <Parrafo/>
      <Variables/>
      <Eventos/>
      <Contador/>
      <Listas/> */}
      <Formulario/>
    </div>
  );
}

export default App;
