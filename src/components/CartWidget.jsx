import React from 'react';
import './CSS/CartWidget.css';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

const CartWidget = () => {
    const { cart } = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const location = useLocation();
    const isCheckoutPage = location.pathname === '/checkout';
    
    if (isCheckoutPage) {
        return null;
    }

    return (
        <div className="cart-widget">
            <Link to="/cart" className="cart-icon">🛒</Link>
            {totalItems > 0 && <div className="cart-widget-number">{totalItems}</div>}
        </div>
    );
};

export default CartWidget;
