import React from 'react';
import './CSS/ItemListContainer.css';
import Card from './Card';

const ItemListContainer = ({ title, containerClass, titleClass, products, addToCart }) => {
    return (
        <div className={`item-list-container ${containerClass}`}>
            <h2 className={`item-list-title ${titleClass}`}>{title}</h2>
            <div className="card-list">
                {products.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.image}
                        price={item.price}
                        stock={item.stock}
                        addToCart={addToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(ItemListContainer);
