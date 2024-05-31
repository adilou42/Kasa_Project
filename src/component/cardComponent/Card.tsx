import React from "react";
import './Card.css'

interface CardProps {
    title: string,
    cover: string,
}

const Card = ({ title, cover }: CardProps) => {

    return (
        <div className="card" style={{ backgroundImage: `linear-gradient(to bottom, transparent, transparent, #000000 ),url(${cover})` }}>
            <p>{title}</p>
        </div>
    );
};

export default Card;
