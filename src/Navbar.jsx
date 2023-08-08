import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css';
import logoImage from './img/logo.PNG';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logoImage} alt="Logo de Shooting Range" />
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
