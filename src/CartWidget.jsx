import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const itemCount = 0;

    return (
        <div className="cart-widget">
            <div className="cart-icon">
                🛒
            </div>
            <div className="item-count">
                {itemCount}
            </div>
        </div>
    );
};

export default CartWidget;
