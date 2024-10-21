import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#family">Family</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
