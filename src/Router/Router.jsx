import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import React, { useState, useEffect } from 'react';
import ItemCount from '../components/ItemCount';
import Cart from '../components/Cart';
import { db } from '../firebase/client'
import { collection, getDocs } from "firebase/firestore";

export default function Router() {
    const productRef = collection(db, 'productos');
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await getDocs(productRef);
                const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setProducts(dataFiltrada);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        getProducts();
    }, [productRef]);

    const addToCart = (quantity) => {
        const newItem = {
            title: 'Producto de ejemplo',
            price: 19.99,
            stock: quantity,
        };

        setCartItems([...cartItems, newItem]);
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer products={products} />} />
                <Route path="/category/:id" element={<ItemListContainer products={products} />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            <ItemCount addToCart={addToCart} products={products} />
            <Cart items={cartItems} />
        </BrowserRouter>
    )
}
