import React, { useEffect, useState } from 'react';
import './CSS/ItemListContainer.css';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/client';

const ItemListContainer = ({ title, containerClass, titleClass }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const getProducts = async () => {
            try {
                const productRef = collection(db, 'productos');
                const data = await getDocs(productRef);
                const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

                if (id) {
                    const filteredItems = products.filter(item => item.categoryId === id);
                    setItems(filteredItems);
                } else {
                    setItems(products);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setLoading(false);
            }
        };

        getProducts();
    }, [id]);

    return (
        <div className={`item-list-container ${containerClass}`}>
            <h2 className={`item-list-title ${titleClass}`}>{title}</h2>
            {loading ? (
                <div className="loader">
                    {<LoadingOutlined className="loader-icon" />}
                    <div className="loader-spinner"></div>
                    <p>Cargando...</p>
                </div>
            ) : (
                <div className="card-list">
                    {items.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            imageSrc={item.image}
                            price={item.price}
                            stock={item.stock}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
