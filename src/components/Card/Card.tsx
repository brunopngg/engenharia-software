import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  to: string;
}

const Card: React.FC<CardProps> = ({ title, description, to }) => (
  <Link to={to} className="card-link">
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  </Link>
);

export default Card;
