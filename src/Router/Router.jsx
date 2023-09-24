import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Checkout from '../components/Checkout';
import { CartProvider } from '../context/CartContext'; 
import Cart from '../components/Cart';

export default function Router() {
    return (
        <CartProvider> 
            <BrowserRouter>
                <Navbar />
                <div className="item-list-container">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}
