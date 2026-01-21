import React from 'react';
import './Modal.css';

const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-close" onClick={onClose}>X</div>
                <div className="modal-header" style={{
                    backgroundImage: `url("${item.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="modal-title">{item.title}</div>
                </div>
                <div className="modal-body">
                    <div className="modal-info">
                        <span className="modal-year">{item.date || "2024"}</span>
                    </div>
                    <p className="modal-description">{item.description}</p>
                    {item.tags && (
                        <div className="modal-tags">
                            {item.tags.map(tag => (
                                <span key={tag} className="modal-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
