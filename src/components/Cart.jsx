import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CSS/Cart.css';


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity; // Multiplica el precio por la cantidad
        });
        return total.toFixed(2); 
    };

    const handleCheckout = () => {
        clearCart();
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con Exito!',
            text: '¡Gracias por tu compra!',
        });
    };
    
    return (
        <div className='Carrito'>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - ${item.price} x {item.quantity}
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${calculateTotalPrice()}</p>
                    <Link to="/checkout">
                        <button onClick={handleCheckout}>Comprar</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;