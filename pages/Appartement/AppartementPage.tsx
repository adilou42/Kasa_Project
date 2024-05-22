import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./AppartementPage.css";
import DropdownInfo from "../../component/dropdownInfoComponent/DropdownInfo";

const AppartementPage = (description: string) => {
    // console.log("data", data);

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

    return (
        <div className="appart-block">
            <div className="appart-img">
                <img src={item.pictures[0]} alt="picture" />
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="left-chevron"
                />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="right-chevron"
                />
                <p>1/4</p>
            </div>
            <div className="appart-title">
                <h1>{item.title}</h1>
                <h3>{item.location}</h3>
                <div className="appart-tags">
                    {item.tags &&
                        Array.isArray(item.tags) &&
                        item.tags.map((tag) => <p key={tag}>{tag}</p>)}
                </div>
            </div>
            <div className="profil">
                <div className="profil-host">
                    <div className="host-name">
                        <p>{firstname}</p>
                        {/* <p>Alexandre Dumas</p> */}
                        <p className="lastname">{lastname}</p>
                    </div>
                    <img src={item.host.picture} alt="host-picture" />
                </div>
                <div className="profil-stars">
                    {redStars}
                    {greyStars}
                    {/* {Array.from({ length: 5 }, (_, i) =>
                        i < Number(stars) ? (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className="red-star"
                            />
                        ) : (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className="grey-star"
                            />
                        )
                    )} */}
                    {/* <FontAwesomeIcon icon={faStar} className="red-star" />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} className="grey-star" /> */}
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
