import React from 'react';
import './CSS/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, imageSrc, title, description, stock, addToCart }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Stock: {stock}</p> 
            <div className='card-link'>
                <Link to={`/item/${id}`}>Más Info.</Link>
            </div>
            <button onClick={() => addToCart(id)}>Agregar al Carrito</button> 
        </div>
    );
};

export default Card;