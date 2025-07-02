import React from 'react';
import Card from '../../components/Card/Card';
import '../Teoria/Teoria.css'; // Reutilizando o estilo do grid

const Exercicios: React.FC = () => (
    <div className="topic-grid">
        <Card title="Exercícios de Limites" description="Pratique com vários problemas de limites." to="limites" />
        <Card title="Exercícios de Derivadas" description="Resolva exercícios sobre derivadas." to="derivadas" />
        <Card title="Exercícios de Integrais" description="Teste suas habilidades em integração." to="integrais" />
    </div>
);

export default Exercicios;