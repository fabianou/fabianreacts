import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ComponenteContainer from './components/pages/ComponenteContainer/ComponenteContainer'
import { Titulo } from './components/Titulo/Titulo'



function App() {
   

  return (
    
      <>
        
        <ComponenteContainer 

        greeting={'saludo'}
        Titulo = {Titulo}
        />

      </>
  )
}

export default App






    