import React from 'react';
import Card from '../../../components/Card/Card';
import '../Teoria.css';

const TeoriaLimites: React.FC = () => (
    <div className="topic-grid">
        <Card title="Conceitos Fundamentais" description="A base para entender limites." to="conceitos-fundamentais" />
        <Card title="Técnicas de Cálculo" description="Métodos para resolver limites." to="tecnicas-de-calculo" />
        <Card title="Indeterminações" description="Como lidar com 0/0, ∞/∞, etc." to="indeterminacoes" />
        <Card title="Continuidade" description="Analisando funções sem quebras." to="continuidade" />
    </div>
);
export default TeoriaLimites;
