import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { LoadingOutlined } from '@ant-design/icons';
import { db } from '../firebase/client';
import { collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Router() {
    const productRef = collection(db, 'productos');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const MySwal = withReactContent(Swal);

        const obtenerProductosDesdeFirebase = async () => {
            try {
                const data = await getDocs(productRef);
                const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

                localStorage.setItem('products', JSON.stringify(dataFiltrada));

                setProducts(dataFiltrada);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
                MySwal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error al obtener los productos',
                    text: 'Error de Firebase: Cuota excedida.',
                });
                setLoading(false);
            }
        };

        const productosAlmacenados = localStorage.getItem('products');
        if (productosAlmacenados) {
            setProducts(JSON.parse(productosAlmacenados));
            setLoading(false);
        } else {
            obtenerProductosDesdeFirebase();
        }
    }, [productRef]);

    return (
        <BrowserRouter>
            <Navbar />
            <div className="item-list-container">
                {loading ? (
                    <div className="loader">
                        {<LoadingOutlined className="loader-icon" />}
                        <div className="loader-spinner"></div>
                        <p>Cargando...</p>
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<ItemListContainer products={products} />} />
                        <Route path="/category/:id" element={<ItemListContainer products={products} />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                    </Routes>
                )}
            </div>
        </BrowserRouter>
    );
}
