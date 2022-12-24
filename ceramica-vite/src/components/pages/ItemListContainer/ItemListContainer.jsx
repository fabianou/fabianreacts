import './ItemListContainer.css'
 export const saludar = () => console.log ('saludo')

const ItemListContainer = ( {saludo} ) => {
  return (

      <section>
        ItemListContainer
        <br />
        <label>{saludo}</label>
      </section>

  )
}

export default ItemListContainer