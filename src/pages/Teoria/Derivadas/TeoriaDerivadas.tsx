import React from 'react';
import Card from '../../../components/Card/Card';
import '../Teoria.css';

const TeoriaDerivadas: React.FC = () => (
    <div className="topic-grid">
        <Card title="Conceitos Fundamentais" description="A definição de derivada." to="conceitos-fundamentais" />
        <Card title="Regras de Derivação" description="Regras do produto, quociente e cadeia." to="regras-de-derivacao" />
        <Card title="Aplicações" description="Otimização, taxas relacionadas e mais." to="aplicacoes" />
    </div>
);
export default TeoriaDerivadas;
