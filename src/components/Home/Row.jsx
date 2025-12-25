import React from 'react';
import './Row.css';

const Row = ({ title, items, isLargeRow, onItemClick }) => {
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {items.map(item => (
                    <img
                        key={item.id}
                        className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                        src={item.image}
                        alt={item.title}
                        onClick={() => onItemClick && onItemClick(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
