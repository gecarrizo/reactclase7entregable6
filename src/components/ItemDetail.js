import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({item}) 
{
    const onAdd = (qty) => {
        alert(`Has seleccionado ${qty} items`);
    }

    return (
        <>
        <div id="main">
                    <div className="thumbnail">
                        <img src={item.thumbnail} />
                    </div>
                    <div className="detail">
                        <h4>{item.name}</h4>
                        <p>{item.details}</p>    
                        <div className="cost">
                            <p>${item.cost}</p>
                        </div>
                        <div className="countFloat">
                            <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
                        </div>
                    </div>
        </div>
        </>
    );
}

export default ItemDetail