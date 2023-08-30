import React from 'react';
import './CSS/CartWidget.css';

const CartWidget = () => {
    const itemCount = 0;

    return (
        <div className="cart-widget">
            <div className="cart-icon">
                🛒
            </div>
            <div className="cart-widget-number">
                {itemCount}
            </div>
        </div>
    );
};

export default CartWidget;
