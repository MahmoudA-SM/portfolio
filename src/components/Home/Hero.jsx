import React from 'react';
import './Hero.css';

const Hero = ({ item, onMoreInfo }) => {
    // Fallback if no item
    if (!item) return <div className="hero-skeleton"></div>;

    return (
        <header className="hero"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("${item.image}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="hero-content">
                <h1 className="hero-title">{item.title}</h1>
                <div className="hero-buttons">
                    <button className="hero-button">Play</button>
                    <button className="hero-button secondary" onClick={onMoreInfo}>More Info</button>
                </div>
                <h1 className="hero-description">{item.description}</h1>
            </div>
            <div className="hero-fade-bottom" />
        </header>
    );
};

export default Hero;
