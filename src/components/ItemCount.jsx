import React, { useState } from 'react';
import './CSS/ItemCount.css';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const suma = () => {
        setCount(count + 1);
    };

    const resta = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <div className="item-count">
                <button onClick={resta}>-</button>
                <span className="count-number">{count}</span>
                <button onClick={suma}>+</button>
            </div>
            <div className='reset-button'>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className='sin-funcion'>
                <button>Agregar al Carrito (sin funcion)</button>
            </div>
        </div>
    );
};

export default ItemCount;
