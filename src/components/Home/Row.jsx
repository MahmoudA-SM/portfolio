import React from 'react';
import './Row.css';

const Row = ({ title, eyebrow, items, onItemClick, sectionId }) => {
  return (
    <section className="section reveal" id={sectionId}>
      <div className="section-header">
        <div>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
        </div>
        <p className="section-subtitle">Click any card to open details.</p>
      </div>
      <div className="card-grid">
        {items.map((item) => {
          const meta = item.company || item.institution || item.date || item.tags?.[0];
          return (
            <article
              key={item.id}
              className={`card${item.image ? '' : ' card--no-media'}`}
              onClick={() => onItemClick && onItemClick(item)}
              role="button"
              tabIndex={0}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 14;
                const rotateX = ((y / rect.height) - 0.5) * -14;
                event.currentTarget.style.setProperty('--rx', `${rotateX}deg`);
                event.currentTarget.style.setProperty('--ry', `${rotateY}deg`);
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.setProperty('--rx', `0deg`);
                event.currentTarget.style.setProperty('--ry', `0deg`);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onItemClick && onItemClick(item);
                }
              }}
            >
              {item.image && (
                <div
                  className="card-media"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />
              )}
              <div className="card-body">
                {meta && <span className="card-meta">{meta}</span>}
                <h3 className={!item.image ? 'card-logo' : undefined}>
                  {item.title}
                </h3>
                <p>{item.description}</p>
                {item.link && (
                  <a
                    className="card-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Visit site
                  </a>
                )}
                {item.tags && (
                  <div className="card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Row;
