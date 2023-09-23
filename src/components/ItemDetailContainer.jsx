import React from 'react';

const ItemDetailContainer = ({ product }) => {
    return (
        <div className="item-detail-container">
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Stock: {product.stock} unidades</p>
                </div>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
