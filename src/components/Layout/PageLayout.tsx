import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <header className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          &larr; Voltar
        </button>
        <h1 className="page-title">{title}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
