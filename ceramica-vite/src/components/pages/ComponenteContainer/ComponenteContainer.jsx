import Formulario from "../../Formulario/Formulario"
import Item from "../../Item/Item"
import { Titulo} from  "../../Titulo/Titulo"


const ComponenteContainer = (props) => {
const { greeting, children, titulo} = props
  //console.log(props)
    let tituloApp = 'Titulo de app' 
    const saludo = () => console.log('Hola')   
    return (
    <div>
      { titulo }
      <Titulo titulo={tituloApp} subTitulo={'Subtitulo de app'}
      />
      

      <p>{greeting}</p>
        <Formulario/>
        <Item saludo={ saludo }/>
        
    </div>
  )
}

export default ComponenteContainer