import React from 'react';
import './ContentPlaceholder.css';

const ContentPlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="content-placeholder">
        <h2>{title}</h2>
        <p>Conteúdo em construção...</p>
    </div>
);

export default ContentPlaceholder;
