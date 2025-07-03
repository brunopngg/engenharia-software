// Seu arquivo de Atividades, estruturado como a página de conteúdo.
import React, { useRef, useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

// Importe o CSS que você já tem. As classes .header, .section, etc., serão reutilizadas.
// Exemplo: import './Conteudo1.css'; 
// E os estilos específicos da atividade (se houver): import './Atividades.css';


// --- Subcomponente do Card de Atividade ---
// Definido aqui para ser usado apenas nesta página.
interface ActivityCardProps {
  title: string;
  problem: React.ReactNode;
  solution: React.ReactNode;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, problem, solution }) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);

  const toggleSolution = () => {
    setIsSolutionVisible(!isSolutionVisible);
  };

  // As classes CSS usadas aqui (.activity-card, etc.) foram definidas na resposta anterior
  // e devem estar no seu arquivo CSS para funcionar.
  return (
    <div className="activity-card">
      <h4>{title}</h4>
      <div className="problem-content">
        {problem}
      </div>
      <button onClick={toggleSolution} className="solution-button">
        {isSolutionVisible ? 'Ocultar Solução' : 'Mostrar Solução'}
      </button>
      {isSolutionVisible && (
        <div className="solution-content">
          <h5>Passo a passo:</h5>
          {solution}
        </div>
      )}
    </div>
  );
};


// --- Componente Principal da Página de Atividades ---

export default function Atividades() {
  const limitesRef = useRef<HTMLDivElement>(null);
  const derivadasRef = useRef<HTMLDivElement>(null);
  const integraisRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="header">
        <div className="header-section section-limites" onClick={() => scrollTo(limitesRef)}>Exercícios de Limites</div>
        <div className="header-section section-derivadas" onClick={() => scrollTo(derivadasRef)}>Exercícios de Derivadas</div>
        <div className="header-section section-integrais" onClick={() => scrollTo(integraisRef)}>Exercícios de Integrais</div>
      </header>

      {/* SEÇÃO DE EXERCÍCIOS DE LIMITES */}
      <div className="section" ref={limitesRef}>
        <h2><InlineMath math="\lim" /> Exercícios de Limites</h2>
        <p>Teste seus conhecimentos sobre cálculo de limites e indeterminações.</p>
        
        <ActivityCard
          title="Exercício 1: Indeterminação com Fatoração"
          problem={<p>Calcule o limite: <BlockMath math="\lim_{x \to -1} \frac{x^2 - 1}{x + 1}" /></p>}
          solution={
            <>
              <p>Substituindo <InlineMath math="x = -1" />, obtemos <InlineMath math="\frac{(-1)^2 - 1}{-1 + 1} = \frac{0}{0}" />, uma indeterminação.</p>
              <p>Fatoramos o numerador como uma diferença de quadrados: <InlineMath math="x^2 - 1 = (x - 1)(x + 1)" />.</p>
              <BlockMath math="\lim_{x \to -1} \frac{(x - 1)(x + 1)}{x + 1}" />
              <p>Cancelamos o termo <InlineMath math="(x + 1)" />:</p>
              <BlockMath math="\lim_{x \to -1} (x - 1) = -1 - 1 = -2" />
            </>
          }
        />

        <ActivityCard
          title="Exercício 2: Limite no Infinito"
          problem={<p>Calcule o limite: <BlockMath math="\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{5x^2 + 4x - 7}" /></p>}
          solution={
            <>
              <p>Temos uma indeterminação do tipo <InlineMath math="\infty / \infty" />. Dividimos todos os termos pela maior potência de <InlineMath math="x" /> no denominador, que é <InlineMath math="x^2" />.</p>
              <BlockMath math="\lim_{x \to \infty} \frac{3 - \frac{2}{x} + \frac{1}{x^2}}{5 + \frac{4}{x} - \frac{7}{x^2}}" />
              <p>Quando <InlineMath math="x \to \infty" />, os termos com <InlineMath math="x" /> no denominador tendem a zero.</p>
              <BlockMath math="\frac{3 - 0 + 0}{5 + 0 - 0} = \frac{3}{5}" />
            </>
          }
        />
      </div>

      {/* SEÇÃO DE EXERCÍCIOS DE DERIVADAS */}
      <div className="section" ref={derivadasRef}>
        <h2><InlineMath math="f'(x)" /> Exercícios de Derivadas</h2>
        <p>Pratique as regras de derivação, incluindo produto, quociente e a regra da cadeia.</p>

        <ActivityCard
          title="Exercício 1: Regra do Produto"
          problem={<p>Encontre a derivada de <InlineMath math="f(x) = x^3 e^x" /></p>}
          solution={
            <>
              <p>Usamos a Regra do Produto: <InlineMath math="(uv)' = u'v + uv'" />.</p>
              <p>Seja <InlineMath math="u = x^3" /> e <InlineMath math="v = e^x" />.</p>
              <p>As derivadas são <InlineMath math="u' = 3x^2" /> e <InlineMath math="v' = e^x" />.</p>
              <p>Aplicando a regra: <BlockMath math="f'(x) = (3x^2)(e^x) + (x^3)(e^x)" /></p>
              <p>Fatorando para simplificar: <BlockMath math="f'(x) = x^2e^x(3 + x)" /></p>
            </>
          }
        />
        
        <ActivityCard
          title="Exercício 2: Regra da Cadeia"
          problem={<p>Encontre a derivada de <InlineMath math="g(x) = \sqrt{x^2 + 4}" /></p>}
          solution={
            <>
              <p>Reescrevemos a função como <InlineMath math="g(x) = (x^2 + 4)^{1/2}" />.</p>
              <p>Usamos a Regra da Cadeia: <BlockMath math="g'(x) = \frac{1}{2}(x^2+4)^{-1/2} \cdot \frac{d}{dx}(x^2+4)" /></p>
              <p>A derivada de dentro é <InlineMath math="2x" />. <BlockMath math="g'(x) = \frac{1}{2}(x^2+4)^{-1/2} \cdot (2x)" /></p>
              <p>Simplificando: <BlockMath math="g'(x) = \frac{x}{\sqrt{x^2+4}}" /></p>
            </>
          }
        />
      </div>

      {/* SEÇÃO DE EXERCÍCIOS DE INTEGRAIS */}
      <div className="section" ref={integraisRef}>
        <h2><InlineMath math="\int" /> Exercícios de Integrais</h2>
        <p>Resolva integrais definidas e indefinidas usando as principais técnicas.</p>

        <ActivityCard
          title="Exercício 1: Integral Definida com TFC"
          problem={<p>Calcule a integral definida: <BlockMath math="\int_{0}^{1} (e^x + 2x) \,dx" /></p>}
          solution={
            <>
              <p>A antiderivada de <InlineMath math="e^x + 2x" /> é <InlineMath math="F(x) = e^x + x^2" />.</p>
              <p>Pelo Teorema Fundamental do Cálculo: <BlockMath math="\left[ e^x + x^2 \right]_{0}^{1} = (e^1 + 1^2) - (e^0 + 0^2)" /></p>
              <p>Calculando o resultado: <BlockMath math="= (e + 1) - (1 + 0) = e" /></p>
            </>
          }
        />
        
        <ActivityCard
          title="Exercício 2: Integração por Substituição"
          problem={<p>Calcule a integral indefinida: <BlockMath math="\int \cos(x) \sin^3(x) \,dx" /></p>}
          solution={
            <>
              <p>Usamos a substituição <InlineMath math="u = \sin(x)" />, então <InlineMath math="du = \cos(x) \,dx" />.</p>
              <p>A integral se torna: <BlockMath math="\int u^3 \,du" /></p>
              <p>Integrando com a regra da potência: <BlockMath math="\frac{u^4}{4} + C" /></p>
              <p>Substituindo de volta: <BlockMath math="\frac{\sin^4(x)}{4} + C" /></p>
            </>
          }
        />
      </div>
    </div>
  );
}