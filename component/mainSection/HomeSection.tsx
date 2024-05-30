import React from "react";

import "./HomeSection.css";
import data from "../../data.json";
import Card from "../cardComponent/Card";

const HomeSection = () => {
    return (
        <div>
            <div className="container">
                <div className="image">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <section className="appartement">
                    {data.map((card) => (
                        <a href={`/appartement/${card.id}`} key={card.id}>
                            <Card title={card.title} cover={card.cover} />
                        </a>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default HomeSection;
