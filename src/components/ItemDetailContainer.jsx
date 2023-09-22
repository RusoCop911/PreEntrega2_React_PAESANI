import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/client';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductFromFirebase = async () => {
            try {
                const productRef = doc(db, 'productos', id); 
                const productSnapshot = await getDoc(productRef);
                if (productSnapshot.exists()) {
                    const productData = productSnapshot.data();
                    setProduct(productData);
                } else {
                    console.error('El producto no existe en Firebase.');
                }
            } catch (error) {
                console.error('Error al obtener el producto de Firebase:', error);
            }
        };

        getProductFromFirebase(); 
    }, [id]);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ) : (
                <p>Cargando información del producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
