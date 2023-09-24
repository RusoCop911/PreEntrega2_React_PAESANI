import React from 'react';
import './CSS/ItemCount.css';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemCount = ({ stock, product }) => {
    const { addToCart } = useCart();
    const [count, setCount] = React.useState(1);

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
        console.log('ID del producto:', product.id);
        addToCart(product, count);
        console.log('Producto agregado al carrito:', product, 'Cantidad:', count);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al Carrito!',
            showConfirmButton: false,
            timer: 1500
        })
    };


    return (
        <div>
            <div className="item-count">
                <button onClick={handleDecrement}>-</button>
                <span className="count-number">{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <div>
                <button onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
