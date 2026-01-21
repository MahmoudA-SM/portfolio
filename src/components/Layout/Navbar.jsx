import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
    const [showBackground, setShowBackground] = useState(false);
    const name = 'Mahmoud Moustafa';
    const birthDate = new Date('2000-07-30');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    const location = 'Giza, Egypt ↔ Riyadh, Saudi Arabia';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${showBackground ? 'navbar-black' : ''}`}>
            <div className="navbar-logo">
                <span onClick={() => onNavigate && onNavigate('home')}>MYFLIX</span>
            </div>
            <div className="navbar-links">
                <span>{name} · {age}</span>
                <span>{location}</span>
                <span onClick={() => onNavigate && onNavigate('home')}>Home</span>
                <span onClick={() => onNavigate && onNavigate('home')}>Projects</span>
                <span onClick={() => onNavigate && onNavigate('experience')}>Experience</span>
                <span>My List</span>
            </div>
            <div className="navbar-avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
            </div>
        </div>
    );
};

export default Navbar;
