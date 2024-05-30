import React from "react";

import "./DropdownInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const toggleText = (event) => {
    const titleDiv = event.currentTarget;
    const textDiv = titleDiv.nextElementSibling;
    const icon = titleDiv.querySelector(".icon");
    textDiv.style.display =
        textDiv.style.display === "block" ? "none" : "block";
    icon.classList.toggle("rotate");
};

interface DropdownInfoProps {
    title: string;
    text: string | string[];
}

const DropdownInfo = ({ title, text }: DropdownInfoProps) => {
    return (
        <div>
            <div className="title" onClick={toggleText}>
                <p>{title}</p>
                <FontAwesomeIcon icon={faAngleUp} className="icon" />
            </div>
            <div className="text">
            {Array.isArray(text) ? text.map((item, index) => <p key={index}>{item}</p>) : <p>{text}</p>}
            </div>
        </div>
    );
};

export default DropdownInfo;
