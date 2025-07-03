import { useState } from 'react';
import type { ReactNode } from 'react';
import './InteractiveExample.css'; // Importa os estilos

interface InteractiveExampleProps {
  problem: ReactNode;
  solution: ReactNode;
}

export default function InteractiveExample({ problem, solution }: InteractiveExampleProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="interactive-example">
      <div className="problem">{problem}</div>
      
      {/* Se a solução não estiver visível, mostra o botão */}
      {!showSolution ? (
        <button className="solution-button" onClick={() => setShowSolution(true)}>
          Ver Solução
        </button>
      ) : (
        // Se o botão foi clicado, mostra a solução
        <div className="solution">{solution}</div>
      )}
    </div>
  );
}