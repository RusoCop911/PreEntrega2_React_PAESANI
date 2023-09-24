import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/client';
import { LoadingOutlined } from '@ant-design/icons';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductoDesdeFirebase = async () => {
            try {
                const productRef = doc(db, 'productos', itemId);
                const productSnapshot = await getDoc(productRef);

                if (productSnapshot.exists()) {
                    const productData = productSnapshot.data();
                    setProduct(productData);
                } else {
                    console.error('El producto no existe.');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error al obtener el producto:', error);
                setLoading(false);
            }
        };

        obtenerProductoDesdeFirebase();
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {loading ? (
                <div className="loader">
                    <LoadingOutlined className="loader-icon" />
                    <div className="loader-spinner"></div>
                    <p>Cargando...</p>
                </div>
            ) : (
                <ItemDetail
                    product={product}
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;
