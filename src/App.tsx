import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//page
import { Login, Register } from "./Authentication/View";
import { View } from "./Home/Product/View";
import { LandingPage } from "./Home/LandingPage";
import Navbar from "./Home/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/product-list" element={<View />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
