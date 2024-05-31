import {
    faChevronLeft,
    faChevronRight,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../../../data.json";
import DropdownInfo from "../../component/dropdownInfoComponent/DropdownInfo";
import "./AppartementPage.css";

const AppartementPage = () => {
    const { id } = useParams();

    const item = data.find((item) => item.id === id);
    if (!item) {
        return <Navigate to="/error" />;
    }

    const stars = item.rating;

    const redStars = Array.from({ length: Number(stars) }, (_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="red-star" />
    ));
    const greyStars = Array.from({ length: 5 - Number(stars) }, (_, i) => (
        <FontAwesomeIcon key={i + stars} icon={faStar} className="grey-star" />
    ));

    const name = item.host.name;
    const [firstname, lastname] = name.split(" ");
    const nbrPics = item.pictures.length;

    const [currentPic, setCurrentPic] = useState(1);

    function rightClick() {
        setCurrentPic((prevPic) => {
            let nextPic = prevPic + 1;
            if (nextPic > nbrPics) {
                nextPic = 1;
            }
            return nextPic;
        });
    }

    function leftClick() {
        setCurrentPic((prevPic) => {
            let nextPic = prevPic - 1;
            if (nextPic < 1) {
                nextPic = nbrPics;
            }
            return nextPic;
        });
    }

    return (
        <div className="appart-block">
            <div className="appart-img">
                <img src={item.pictures[currentPic - 1]} alt="picture" />
                {nbrPics > 1 && (
                    <>
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="left-chevron"
                            onClick={leftClick}
                        />
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="right-chevron"
                            onClick={rightClick}
                        />
                        <p className="compteur">
                            {currentPic}/{nbrPics}
                        </p>
                    </>
                )}
            </div>
            <div className="row">
                <div className="appart-title">
                    <h1>{item.title}</h1>
                    <h3>{item.location}</h3>
                    <div className="appart-tags">
                        {item.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="profil">
                    <div className="profil-host">
                        <div className="host-name">
                            <p>{firstname}</p>
                            <p className="lastname">{lastname}</p>
                        </div>
                        <img src={item.host.picture} alt="host-picture" />
                    </div>
                    <div className="profil-stars">
                        {redStars}
                        {greyStars}
                    </div>
                </div>
            </div>
            <div className="description">
                <DropdownInfo title="Description" text={item.description} />
                <DropdownInfo title="Équipements" text={item.equipments} />
            </div>
        </div>
    );
};

export default AppartementPage;
