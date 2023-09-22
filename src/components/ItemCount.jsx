import React, { useState } from 'react';
import './CSS/ItemCount.css';

const ItemCount = ({ stock, addToCart }) => { 
    const [count, setCount] = useState(1); 

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(count); 
    }

    return (
        <div>
            <div className="item-count">
                <button onClick={handleDecrement}>-</button>
                <span className="count-number">{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <div className='sin-funcion'>
                <button onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
