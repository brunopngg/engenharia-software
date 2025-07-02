import React from 'react';
import Card from '../../../components/Card/Card';
import '../Teoria.css';

const TeoriaIntegrais: React.FC = () => (
    <div className="topic-grid">
        <Card title="Conceitos Fundamentais" description="A integral como antiderivada e área." to="conceitos-fundamentais" />
        <Card title="Técnicas de Integração" description="Substituição, por partes e outras." to="tecnicas-de-integracao" />
        <Card title="Aplicações" description="Cálculo de áreas, volumes e mais." to="aplicacoes" />
    </div>
);
export default TeoriaIntegrais;
