import React from "react";
import './Card.css'

const Card = ({ title, cover }) => {
    return (
        <div className="card" style={{ backgroundImage: `linear-gradient(to bottom, transparent, transparent, #000000 ),url(${cover})` }}>
            <p>{title}</p>
        </div>
    );
};

export default Card;
