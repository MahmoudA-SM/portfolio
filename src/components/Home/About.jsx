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
    <section className="about section reveal" id="about">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">Profile</p>
          <h2>About</h2>
        </div>
        <p className="section-subtitle">{profile.availability}</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>Summary</h3>
          <p>{profile.summary}</p>
        </div>
        <div className="about-card">
          <h3>Core details</h3>
          <div className="about-list">
            <div>
              <span className="about-label">Age</span>
              <span>{age}</span>
            </div>
            <div>
              <span className="about-label">Locations</span>
              <span>{profile.locations.join(' / ')}</span>
            </div>
            <div>
              <span className="about-label">Languages</span>
              <span>{profile.languages.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="about-card">
          <h3>Links</h3>
          <div className="about-actions">
            {profile.links.email && (
              <a href={`mailto:${profile.links.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 8 5 8-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="about-link-label">Email</span>
              </a>
            )}
            {profile.links.github && (
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.2 19.47c.5.1.68-.2.68-.48v-1.7c-2.78.62-3.37-1.18-3.37-1.18a2.66 2.66 0 0 0-1.1-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.54 1.03 2.16 2.16 0 0 0 2.96.84 2.15 2.15 0 0 1 .64-1.36c-2.22-.25-4.56-1.1-4.56-4.92a3.86 3.86 0 0 1 1.02-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.26 2.75 1.02a9.52 9.52 0 0 1 5 0c1.9-1.28 2.74-1.02 2.74-1.02a3.6 3.6 0 0 1 .1 2.64 3.86 3.86 0 0 1 1.02 2.68c0 3.84-2.34 4.66-4.58 4.9a2.43 2.43 0 0 1 .68 1.9v2.82c0 .28.18.6.7.48A10 10 0 0 0 12 2Z" fill="currentColor"/>
                </svg>
                <span className="about-link-label">GitHub</span>
              </a>
            )}
            {profile.links.linkedin && (
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05C20.4 8.6 22 10.38 22 13.7V21h-4v-6.4c0-1.52-.03-3.48-2.12-3.48-2.13 0-2.46 1.66-2.46 3.37V21h-4V9Z" fill="currentColor"/>
                </svg>
                <span className="about-link-label">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
