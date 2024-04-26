import React from "react";
import "./MainSection.css";
// import data from '.../data.json'

console.log('first', data)

const MainSection = () => {
    return (
        <div>
            <div className="container">
                <div className="image">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <section className="appartement">
                    <div className="card">
                        <p>Titre de la location</p>
                    </div>
                    <div className="card"></div>
                </section>
            </div>
            
        </div>
    );
};

export default MainSection;
