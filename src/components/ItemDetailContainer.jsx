import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
    const { id } = useParams();
    const product = products.find(item => item.id === id);

    return (
        <div>
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
