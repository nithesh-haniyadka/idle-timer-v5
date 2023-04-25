import React, { useState } from 'react'
import "../css/styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate();

    const navigateToSecondSearch = () => {
        // navigate to /secondsearch
        navigate('/secondsearch');
    };

    const navigatetoFirstSearch = () => {
        // navigate to /firstsearch
        navigate('/firstsearch');
    };

    return (
        <nav className='nav'>
            <a className='site-title'>
                Demo Project
            </a>


            <ul>
                <li className='active'>
                    <h1 style={{ color: "black", textAlign: "center" }}>  <button onClick={navigateToSecondSearch}>Customer details</button></h1>
                </li>
                <li>
                    <h1 style={{ color: "black", textAlign: "center" }}>  <button onClick={navigatetoFirstSearch}>Clothing</button></h1>
                </li>
            </ul>
        </nav>
    )
}