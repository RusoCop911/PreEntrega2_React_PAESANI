import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';
import logoImage from './img/logo.PNG';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/">
                    <img src={logoImage} alt="Logo de Shooting Range" />
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/catalogo">Catálogo</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
