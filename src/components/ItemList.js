import { useEffect, useState } from 'react';
import React from 'react';
import Item from './Item';

function ItemList() {
  const [productos, setProductos] = useState([]);  

  useEffect(() => {       
   let is_ok = true;

    const productos = [
      {
        id: 10,
        name: "Cepillo",
        stock: 86,
        cost: 45,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_643738-MLA43299216631_082020-F.webp",
        description: "Cepillo metalico para herrería."
      },
      {
        id: 11,
        name: "Espatula",
        stock: 100,
        cost: 140,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_949301-MLA48194271817_112021-V.webp",
        description: "Espatula Para Pintor Albañil Mango Plastico 2,5´´ 63 Mm"        
      },
      {
        id: 12,
        name: "Hacha",
        stock: 92,
        cost: 575,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_636142-MLA48353181349_112021-V.webp",
        description: "Hacha"
      },
      {
        id: 15,
        name: "Nilvel",
        stock: 92,
        cost: 575,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_768249-MLA45996248693_052021-V.webp",
        description: "Nivel Plástico 230mm De Alabañil Hamilton Ne225"
      },            
      {
        id: 13,
        name: "Tenaza",
        stock: 92,
        cost: 575,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_690031-MLA47135398499_082021-V.webp",
        description: "Tenaza De Acción Compuesta Pinza Qep Mosaiquismo Cod 32035."
      },
      {
        id: 14,
        name: "Cinta métrica",
        stock: 92,
        cost: 575,
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_742493-MLA46333652634_062021-V.webp",
        description: "Cinta Metrica Truper Xpert 5 Metros Extra Ancha"
      }

    ];

    let mostrarProductos = (productos) => {
        return productos;
    }

    //Implemento la promise
    let consultaDatosProductos = (time, task) => {    
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

    //Llamo la promise
    consultaDatosProductos(2000, mostrarProductos(productos))   
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
  }, [])  

  return (
    <>
        {
            productos.map((producto) =>  
              <Item
                id={producto.id}
                name={producto.name}
                stock={producto.stock}
                cost={producto.cost}
                thumbnail={producto.thumbnail}
                description={producto.description} 
              />            
            )
        }
    </>
  );
}

export default ItemList;