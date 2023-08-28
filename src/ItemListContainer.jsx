import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Card from './Card';

const ItemListContainer = ({ title, containerClass, titleClass }) => {
    const [items, setItems] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('/data/products.json');
            const products = await response.json();
            setItems(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={`item-list-container ${containerClass}`}>
            <h2 className={`item-list-title ${titleClass}`}>{title}</h2>
            <div className="card-list">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        title={item.nombre} 
                        description={item.descripcion} 
                        imageSrc={item.imagen} 
                    />
                ))}
            </div>
        </div>
    );
    
};

export default ItemListContainer;
