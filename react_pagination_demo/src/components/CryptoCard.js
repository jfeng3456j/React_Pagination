import React from 'react';
import './css/CryptoCard.css';

const CryptoCard = ({ image, name, price }) => {
    return (
        <div className="crypto_card">
            <div className="crypto_card_image">
                <img src={image} alt={name} />
            </div>
            <div className="crypto_card_info">
                <h2>{name}</h2>
                <p>${price.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default CryptoCard;
