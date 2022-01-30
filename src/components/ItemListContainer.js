import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) =>
{
    const onAdd = (qty) => {
        alert(`Has seleccionado ${qty} items`);
    }

    return(
        <>
        <div>
            <p>{greeting}</p>
            <ItemList/>
            <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
        </div>    
        </>
    )
}

export default ItemListContainer;