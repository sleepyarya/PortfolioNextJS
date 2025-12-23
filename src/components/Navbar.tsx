"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`navbar glass ${isOpen ? "mobile-open" : ""}`}>
            <div className="container nav-content">
                <div className="logo">
                    <span>★</span> Portfolio
                </div>

                {/* Hamburger Button */}
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                </button>

                {/* Nav Links */}
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Work</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
