import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
