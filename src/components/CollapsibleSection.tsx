import { useState } from 'react';
import type { ReactNode } from 'react';
import './CollapsibleSection.css'; // Importa os estilos que vamos criar a seguir

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

export default function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        {/* Mostra um sinal de menos se estiver aberto, e mais se estiver fechado */}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {/* O conteúdo só é renderizado se a seção estiver aberta (isOpen === true) */}
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}