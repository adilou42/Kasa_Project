import React from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";


const toggleText = (event) => {
    const titleDiv = event.currentTarget;
    const textDiv = titleDiv.nextElementSibling;
    const icon = titleDiv.querySelector('.icon');
    textDiv.style.display = textDiv.style.display === "block" ? "none" : "block";
    icon.classList.toggle('rotate');
}

const AboutSection = () => {
    
    return (
        <div className="container">
            <div className="image-about"></div>
            <div className="list">
                <div className="burger">
                    <div className="title" onClick={toggleText}>
                        <p>Fiabilité</p>
                        <FontAwesomeIcon icon={faAngleUp} className="icon" />
                    </div>
                    <div className="text">
                        <p>
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </p>
                    </div>
                    <div className="title" onClick={toggleText}>
                        <p>Respect</p>
                        <FontAwesomeIcon icon={faAngleUp} className="icon" />
                    </div>
                    <div className="text">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    </div>
                    <div className="title" onClick={toggleText}>
                        <p>Service</p>
                        <FontAwesomeIcon icon={faAngleUp} className="icon" />
                    </div>
                    <div className="text">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    </div>
                    <div className="title" onClick={toggleText}>
                        <p>Sécurité</p>
                        <FontAwesomeIcon icon={faAngleUp} className="icon" />
                    </div>
                    <div className="text">
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères établis par nos services. En
                            laissant une note aussi bien à l'hôte qu'au
                            locataire, cela permet à nos équipes de vérifier que
                            les standards sont bien respectés. Nous organisons
                            également des ateliers sur la sécurité domestique
                            pour nos hôtes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
