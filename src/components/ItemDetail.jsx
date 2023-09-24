import React from 'react';
import './CSS/ItemDetail.css';
import ItemCount from './ItemCount';

export default function ItemDetail({ product, addToCart }) {
    console.log('Received product in ItemDetail:', product);
    return (
        <div className="item-detail">
            <div className="item-detail-info">
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <p>Stock: {product.stock} unidades</p>
            </div>
            <div className="item-detail-count">
                <ItemCount stock={product.stock} product={product} addToCart={addToCart} />

            </div>
        </div>
    );
}
