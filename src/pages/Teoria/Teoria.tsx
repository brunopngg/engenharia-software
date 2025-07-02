import React from 'react';
import Card from '../../components/Card/Card';
import './Teoria.css';

const Teoria: React.FC = () => {
    return (
        <div className="topic-grid">
            <Card title="Limites" description="Entenda o comportamento de funções." to="limites" />
            <Card title="Derivadas" description="Explore a taxa de variação e inclinação." to="derivadas" />
            <Card title="Integrais" description="Descubra a acumulação e a área sob a curva." to="integrais" />
        </div>
    );
};

export default Teoria;
