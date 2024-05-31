import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer.tsx";
import Header from "./component/header/Header.tsx";
import AboutPage from "./pages/About/AboutPage.tsx";
import AppartementPage from "./pages/Appartement/AppartementPage.tsx";
import ErrorPage from "./pages/Error/ErrorPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import "./App.css";

function App() {
    return (
        <div className="big-div">
            <div className="margin-body">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/appartement/:id"
                        element={<AppartementPage />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
