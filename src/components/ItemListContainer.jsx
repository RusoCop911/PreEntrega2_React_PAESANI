import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/client';
import { LoadingOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './CSS/ItemListContainer.css';
import Card from './Card';

const ItemListContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        const obtenerProductosDesdeFirebase = async () => {
            try {
                const productRef = collection(db, 'productos');
                const data = await getDocs(productRef);
                const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filteredProducts = id ? dataFiltrada.filter(product => product.category === id) : dataFiltrada;

                setProducts(filteredProducts);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
                setLoading(false);
                MySwal.fire({
                    icon: 'error',
                    title: 'Error al cargar los productos',
                    text: 'Hubo un problema al obtener los productos desde Firebase.',
                });
            }
        };

        obtenerProductosDesdeFirebase();
    }, [id, MySwal]);

    return (
        <div className="item-list-container2">
            {loading ? (
                <div className="loader">
                    <LoadingOutlined className="loader-icon" />
                    <div className="loader-spinner"></div>
                    <p>Cargando...</p>
                </div>
            ) : (
                <div className='tarjetas'>
                    {products.map(product => (
                        <div key={product.id}>
                                <Card
                                    id={product.id}
                                    title={product.title}
                                    imageSrc={product.image}
                                    price={product.price}
                                    stock={product.stock}
                                    product={product}
                                />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
