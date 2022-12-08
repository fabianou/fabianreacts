
export

 function Titulo ({ titulo = 'titulo por defecto', subtitulo ='Subtitulo por defecto'} ){

    return(
     <div>
          <h1>{ titulo }</h1>
         <h1>{ subtitulo }</h1>
     </div>
    ) 
}
     export default Titulo