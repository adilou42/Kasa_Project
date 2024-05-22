import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import "./AboutPage.css";
import DropdownInfo from "../../component/dropdownInfoComponent/DropdownInfo";

const description = [
    {
        title: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        title: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Sécurité",
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

const AboutPage = () => {
    return (
        <div>
            <div className="container">
                <div className="image-about"></div>
                <div className="list">
                    <div className="burger">
                        {description.map((info, index) => (
                            <DropdownInfo
                                title={info.title}
                                text={info.text}
                                key={index + info.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
