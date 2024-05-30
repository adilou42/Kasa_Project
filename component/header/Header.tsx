import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeLink, setActiveLink] = useState("/");

    const changeUnderline = (path: string) => {
        setActiveLink(path);
    };

    return (
        <div className="header">
            <img src="/LOGO-mobile.png" alt="logo" />
            <div className="header-route">
                <Link
                    to="/"
                    onClick={() => changeUnderline("/")}
                    className={`header-link ${
                        activeLink === "/" ? "active-link" : ""
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    to="/about"
                    onClick={() => changeUnderline("/about")}
                    className={`header-link ${
                        activeLink === "/about" ? "active-link" : ""
                    }`}
                >
                    A Propos
                </Link>
            </div>
        </div>
    );
};

export default Header;
