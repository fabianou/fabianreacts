import {Titulo} from "../Titulo/Titulo"


function Formulario() {
return (
<div>
 <Titulo titulo='Formulario' subtitulo/>

    <form>
        <input type="text" placeholder="Nombre"/> 
        <input type="text" placeholder="Apellido"/>
        <button type="submit">Enviar</button>

    </form>
</div>
)
}
export default Formulario