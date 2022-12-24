import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import { Titulo } from './components/Titulo/Titulo'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import NavBar from './components/pages/NavBar/NavBar'



function App() {
   

  return (

      <>
        <NavBar/>
         <ItemListContainer saludo={'saludo'} />              

      </>
  )
}

export default App






    