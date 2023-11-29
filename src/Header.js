import React from 'react';
import "./App.css";

function Header() {
    return (
        <header className="navbar">
            <h1 className="logo">bycherrie</h1>
            <ul className="nav_items">
                <li>home</li>
                <li>catalog</li>
                <li>about</li>
            </ul>
        </header>
    );
}

export default Header;