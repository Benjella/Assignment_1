// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Family from './components/Family';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Family />
            <Education />
            <Achievements />
            <Footer />
        </div>
    );
}

export default App;

