import React from 'react';
import './Modal.css';

const Modal = ({ item, onClose }) => {
  if (!item) return null;
  const meta = item.company || item.institution || item.date;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          Close
        </button>
        <div
          className="modal-hero"
          style={{ backgroundImage: `url("${item.image}")` }}
        />
        <div className="modal-body">
          {meta && <span className="modal-meta">{meta}</span>}
          <h2>{item.title}</h2>
          <p className="modal-description">{item.description}</p>
          {item.tags && (
            <div className="modal-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
