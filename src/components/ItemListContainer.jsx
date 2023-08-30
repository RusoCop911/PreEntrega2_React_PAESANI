import React, { useEffect, useState } from 'react';
import './CSS/ItemListContainer.css';
import Card from './Card';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ title, containerClass, titleClass }) => {
    const [items, setItems] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("/data/productos.json");
            const products = await response.json();

            if (id) {
                const filteredItems = products.filter(item => item.categoria === id);
                setItems(filteredItems);
            } else {
                setItems(products);
            }
        };

        getProducts();
    }, [id]);

    return (
        <div className={`item-list-container ${containerClass}`}>
            <h2 className={`item-list-title ${titleClass}`}>{title}</h2>
            <div className="card-list">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
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
