import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ title, containerClass, titleClass }) => {
    const calibers = [
        '9mm',
        '5.56mm',
        '7.62mm',
        '45 ACP',
        '12 Gauge',
        '30-06',
        '308 Winchester',
    ];

    return (
        <div className={`item-list-container ${containerClass}`}>
            <h2 className={`item-list-title ${titleClass}`}>{title}</h2>
            <ul className="caliber-list">
                {calibers.map((caliber, index) => (
                    <li key={index}>{caliber}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;
