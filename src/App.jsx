import { Route, Router, Routes } from "react-router-dom";
import Header from "../component/header/Header.tsx";
import MainSection from "../component/mainSection/MainSection.tsx";
import "./App.css";
import React from "react";
import HomePage from "../pages/Home/HomePage.tsx";
import AboutPage from "../pages/About/AboutPage.tsx";
import Footer from "../component/footer/Footer.tsx";
import ErrorPage from "../pages/Error/ErrorPage.tsx";

function App() {
    return (
        <div >
            <div className="margin-body" >
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
