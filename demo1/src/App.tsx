import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>

    );
}

export default App;
