import React from 'react';

function Item({id, name, stock, cost, thumbnail, description}) {
    
    console.log({thumbnail});

    return (
        <>
        <div>
            <figure className="snip">                
                <h4>{name}</h4>
                <div className="imageDiv">
                    <img className="slide1 imgMin" src={thumbnail} />
                </div>
                <figcaption>
                    <p>{description}</p>    
                    <div className="cost">
                        <p>${cost}</p>
                    </div>
                </figcaption>
                <a className="add-to-cart" href="#">Add to Cart</a>
            </figure>
        </div>
        </>
    );
}

export default Item