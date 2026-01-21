import React from 'react';
import './Hero.css';

const Hero = ({ profile, featured, stats, onMoreInfo }) => {
  return (
    <section className="hero reveal" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="section-eyebrow">Portfolio 2026</p>
          <h1 className="hero-title">{profile?.name || 'Mahmoud Moustafa'}</h1>
          <p className="hero-role">Systems-driven software developer and integration specialist.</p>
          <p className="hero-summary">
            {profile?.summary ||
              'Focused on reliable infrastructure, data pipelines, and resilient multi-site systems.'}
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View projects
            </button>
            <a className="ghost" href={`mailto:${profile?.links?.email || 'mahmoudmoustafa.ca@gmail.com'}`}>
              Email me
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="hero-meta-label">Locations</span>
              <span className="hero-meta-value">{profile?.locations?.join(' / ') || 'Giza / Riyadh'}</span>
            </div>
            <div>
              <span className="hero-meta-label">Languages</span>
              <span className="hero-meta-value">{profile?.languages?.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="hero-system">
          <div className="system-header">
            <span>SYS INDEX</span>
            <span className="system-status">LIVE</span>
          </div>
          <div className="system-grid">
            <div className="system-tile">
              <span className="system-label">Projects</span>
              <span className="system-value">{stats?.projects ?? 0}</span>
            </div>
            <div className="system-tile">
              <span className="system-label">Roles</span>
              <span className="system-value">{stats?.roles ?? 0}</span>
            </div>
            <div className="system-tile">
              <span className="system-label">Locations</span>
              <span className="system-value">{stats?.locations ?? 0}</span>
            </div>
            <div className="system-tile">
              <span className="system-label">Languages</span>
              <span className="system-value">{stats?.languages ?? 0}</span>
            </div>
          </div>
          <div className="system-bars">
            <div>
              <span>SYS</span>
              <div className="bar"><span className="bar-fill one" /></div>
            </div>
            <div>
              <span>NET</span>
              <div className="bar"><span className="bar-fill two" /></div>
            </div>
            <div>
              <span>DB</span>
              <div className="bar"><span className="bar-fill three" /></div>
            </div>
          </div>
          <div className="system-scan">
            <span>SYNC</span>
            <span className="system-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
        {featured && (
          <div className="hero-card">
            <div
              className="hero-card-media"
              style={{ backgroundImage: `url("${featured.image}")` }}
            />
            <div className="hero-card-body">
              <p className="hero-card-label">Featured project</p>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="card-tags">
                {featured.tags?.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <button className="secondary" onClick={onMoreInfo}>
                See details
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
