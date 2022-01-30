import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {arrayProductos} from './Products';

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);  

  useEffect(() => {       
   let is_ok = true;
    
    let getItem = (productos) => {
        //let datoProducto = productos.filter(producto => producto.id===15)
        let datoProducto = arrayProductos[0];
        return datoProducto;
    }

    let consultaDatosProducto = (time, task) => {    
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task)
                }, time);
            } else {
                reject("Error")
            }
        });
    }

    //consultaDatosProducto(2000, arrayProductos[0])
    consultaDatosProducto(2000, getItem(productos))
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
  }, [])  

  return (
    <>
        {
            <ItemDetail item={productos}/>            
        }
    </>
  );
}

export default ItemDetailContainer;
