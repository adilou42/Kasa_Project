import React from "react";

import "./MainSection.css";
import data from '../../data.json'
import Card from "../cardComponent/Card";

console.log('first', data)

const MainSection = () => {
    return (
        <div>
            <div className="container">
                <div className="image">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <section className="appartement">
                    {data.map((card) => <Card key={card.id} title={card.title} cover={card.cover}/>)}
                </section>
            </div>
            
        </div>
    );
};

export default MainSection;
