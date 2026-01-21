import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ profile, onNavigate }) => {
  const [showBackground, setShowBackground] = useState(false);
  const birthDate = new Date(profile?.birthDate || '2000-07-30');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${showBackground ? 'navbar-solid' : ''}`}>
      <button className="navbar-brand" onClick={() => onNavigate && onNavigate('top')}>
        <span className="navbar-name">{profile?.name || 'Mahmoud Moustafa'}</span>
        <span className="navbar-role">Systems-focused developer</span>
      </button>
      <nav className="navbar-links">
        <button onClick={() => onNavigate && onNavigate('about')}>About</button>
        <button onClick={() => onNavigate && onNavigate('projects')}>Projects</button>
        <button onClick={() => onNavigate && onNavigate('experience')}>Experience</button>
        <button onClick={() => onNavigate && onNavigate('education')}>Education</button>
      </nav>
      <div className="navbar-meta">
        <span>{age} yrs</span>
        <span>{profile?.locations?.join(' / ') || 'Giza, Egypt / Riyadh, Saudi Arabia'}</span>
      </div>
      <a className="navbar-cta" href={`mailto:${profile?.links?.email || 'mahmoudmoustafa.ca@gmail.com'}`}>
        Let's talk
      </a>
    </header>
  );
};

export default Navbar;
