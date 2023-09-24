import React from 'react';
import './CSS/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, imageSrc, title, description, price, stock }) => {

    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock} unidades</p>
            <Link to={`/item/${id}`} className='button'>
                <p>Más Info</p>
            </Link>
        </div>
    );
};

export default Card;
