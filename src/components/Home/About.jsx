import React from 'react';
import './About.css';
import { profile as defaultProfile } from '../../data/content';

const About = ({ profile = defaultProfile }) => {
  const birthDate = new Date(profile.birthDate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">{profile.name}</h2>
        <p className="about-subtitle">Computer Scientist · {age}</p>
        <p className="about-summary">{profile.summary}</p>

        <div className="about-row">
          <div className="about-label">Locations</div>
          <div className="about-value">{profile.locations.join(' ↔ ')}</div>
        </div>
        <div className="about-row">
          <div className="about-label">Availability</div>
          <div className="about-value">{profile.availability}</div>
        </div>
        <div className="about-row">
          <div className="about-label">Languages</div>
          <div className="about-tags">
            {profile.languages.map((lang) => (
              <span key={lang} className="about-tag">{lang}</span>
            ))}
          </div>
        </div>

        <div className="about-links">
          {profile.links.email && (
            <a className="about-link" href={`mailto:${profile.links.email}`}>Email</a>
          )}
          {profile.links.github && (
            <a className="about-link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {profile.links.linkedin && (
            <a className="about-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
