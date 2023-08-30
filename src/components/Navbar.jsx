import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './CSS/Navbar.css';
import logoImage from '../img/logo.PNG';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="brand">
                    <Link to="/">
                        <img src={logoImage} alt="Logo de Shooting Range" />
                    </Link>
                </div>
                <div className="NavLink">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/category/UCC">USO CIVIL CONDICIONAL</NavLink>
                    <NavLink to="/category/UC">USO CIVIL</NavLink>
                </div>
            </nav>
            <div className="carrito">
                <CartWidget />
            </div>

        </div>

    );
};

export default Navbar;
