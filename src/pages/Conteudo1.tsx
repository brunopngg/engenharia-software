// Seu arquivo Conteudo1.tsx atualizado
import { useRef } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import './Conteudo1.css'; // Estilo principal
// Ajuste o caminho conforme necessário, por exemplo:
import CollapsibleSection from '../components/CollapsibleSection'; // Importando
import InteractiveExample from '../components/InteractiveExample'; // Importando

export default function Conteudo1() {
  const limitesRef = useRef<HTMLDivElement>(null);
  const derivadasRef = useRef<HTMLDivElement>(null);
  const integraisRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="header">
        <div className="header-section section-limites" onClick={() => scrollTo(limitesRef)}>Limites</div>
        <div className="header-section section-derivadas" onClick={() => scrollTo(derivadasRef)}>Derivadas</div>
        <div className="header-section section-integrais" onClick={() => scrollTo(integraisRef)}>Integrais</div>
      </header>

      {/* SEÇÃO DE LIMITES */}
      <div className="section" ref={limitesRef}>
        <h2><InlineMath math="\lim" /> Limites</h2>
        <p>
          A ideia de limite é a base do Cálculo. Ela descreve o comportamento de uma função à medida que sua variável se aproxima de um determinado valor. Pense nisso como "para onde o valor de <InlineMath math="f(x)" /> está indo quando <InlineMath math="x" /> chega cada vez mais perto de <InlineMath math="a" />?".
        </p>
        <BlockMath math="\lim_{x \to a} f(x) = L" />
        <p>
          Isso significa que o limite de <InlineMath math="f(x)" /> quando <InlineMath math="x" /> tende a <InlineMath math="a" /> é <InlineMath math="L" />.
        </p>

        <CollapsibleSection title="Propriedades dos Limites">
          <ul>
            <li><b>Soma/Subtração:</b> <BlockMath math="\lim_{x \to a} (f(x) \pm g(x)) = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)" /></li>
            <li><b>Multiplicação por Constante:</b> <BlockMath math="\lim_{x \to a} (c \cdot f(x)) = c \cdot \lim_{x \to a} f(x)" /></li>
            <li><b>Produto:</b> <BlockMath math="\lim_{x \to a} (f(x) \cdot g(x)) = (\lim_{x \to a} f(x)) \cdot (\lim_{x \to a} g(x))" /></li>
            <li><b>Quociente:</b> <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}, \quad \text{se } \lim_{x \to a} g(x) \neq 0" /></li>
            <li><b>Potência:</b> <BlockMath math="\lim_{x \to a} [f(x)]^n = [\lim_{x \to a} f(x)]^n" /></li>
          </ul>
        </CollapsibleSection>

        {/* NOVO CONTEÚDO: CONTINUIDADE */}
        <CollapsibleSection title="Continuidade">
            <p>Um conceito diretamente ligado aos limites. Uma função <InlineMath math="f" /> é contínua em um ponto <InlineMath math="a" /> se não houver interrupções no gráfico em <InlineMath math="a" />. Formalmente, três condições devem ser satisfeitas:</p>
            <ol>
                <li><InlineMath math="f(a)" /> está definida (o ponto existe).</li>
                <li><InlineMath math="\lim_{x \to a} f(x)" /> existe (o limite existe).</li>
                <li><InlineMath math="\lim_{x \to a} f(x) = f(a)" /> (o limite é igual ao valor da função).</li>
            </ol>
            <p>Muitas funções conhecidas (polinômios, funções trigonométricas, exponenciais) são contínuas em seus domínios.</p>
        </CollapsibleSection>

        <CollapsibleSection title="Limites Fundamentais (Notáveis)">
          <ul>
            <li><b>Limite Trigonométrico Fundamental:</b> <BlockMath math="\lim_{x \to 0} \frac{\sin(x)}{x} = 1" /></li>
            <li><b>Limite Exponencial Fundamental (Número de Euler, 'e'):</b> <BlockMath math="\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e" /></li>
            <li><b>Variação do Limite Exponencial:</b> <BlockMath math="\lim_{x \to 0} (1+x)^{1/x} = e" /></li>
            <li><b>Outro Limite Exponencial Útil:</b> <BlockMath math="\lim_{x \to 0} \frac{e^x - 1}{x} = 1" /></li>
            <li><b>Limite com Logaritmo Natural:</b> <BlockMath math="\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1" /></li>
          </ul>
        </CollapsibleSection>
        
        {/* NOVO CONTEÚDO: LIMITES NO INFINITO E INFINITOS */}
        <CollapsibleSection title="Limites no Infinito e Assíntotas">
            <p>Podemos analisar o comportamento de uma função quando <InlineMath math="x" /> cresce ou decresce sem parar.</p>
            <ul>
                <li><b>Limites no Infinito (<InlineMath math="x \to \pm\infty" />):</b> Descrevem o comportamento final da função e estão associados a <b>assíntotas horizontais</b>. Se <InlineMath math="\lim_{x \to \infty} f(x) = L" />, então a reta <InlineMath math="y=L" /> é uma assíntota horizontal.</li>
                <li><b>Limites Infinitos (<InlineMath math="\lim_{x \to a} f(x) = \pm\infty" />):</b> Ocorrem quando o valor da função cresce ou decresce ilimitadamente perto de um ponto <InlineMath math="a" />, indicando uma <b>assíntota vertical</b> na reta <InlineMath math="x=a" />.</li>
            </ul>
            <InteractiveExample
             problem={<p>Encontre as assíntotas de <InlineMath math="f(x) = \frac{2x^2}{x^2 - 1}" /></p>}
             solution={
                 <div>
                     <p><b>Assíntotas Verticais:</b> Ocorrem quando o denominador é zero. <InlineMath math="x^2 - 1 = 0 \implies x = \pm 1" />. As retas <InlineMath math="x=1" /> e <InlineMath math="x=-1" /> são assíntotas verticais.</p>
                     <p><b>Assíntotas Horizontais:</b> Calculamos o limite para <InlineMath math="x \to \infty" />. Dividimos todos os termos pela maior potência de <InlineMath math="x" /> do denominador (<InlineMath math="x^2" />):</p>
                     <BlockMath math="\lim_{x \to \infty} \frac{2x^2/x^2}{x^2/x^2 - 1/x^2} = \lim_{x \to \infty} \frac{2}{1 - 1/x^2} = \frac{2}{1 - 0} = 2" />
                     <p>Portanto, <InlineMath math="y=2" /> é uma assíntota horizontal.</p>
                 </div>
             }
            />
        </CollapsibleSection>

        <CollapsibleSection title="Lidando com Indeterminações">
          <p>Às vezes, a substituição direta resulta em formas como <InlineMath math="0/0" /> ou <InlineMath math="\infty/\infty" />. Isso não significa que o limite não existe! Precisamos de algumas técnicas:</p>
          <ul>
            <li><InlineMath math="0/0" /> ou <InlineMath math="\infty/\infty" /> → Use fatoração, racionalização ou a Regra de L'Hôpital (que usa derivadas!).</li>
            <li><InlineMath math="\infty - \infty" /> → Tente combinar os termos em uma única fração.</li>
            <li><InlineMath math="0 \cdot \infty" /> → Reescreva o produto como uma fração para cair em um dos casos acima.</li>
            <li><InlineMath math="1^\infty, 0^0, \infty^0" /> → Use logaritmos para transformar a expressão e depois aplicar L'Hôpital.</li>
          </ul>
          <InteractiveExample
            problem={<p>Calcule <InlineMath math="\lim_{x \to 2} \frac{x^2 - 4}{x - 2}" /></p>}
            solution={
              <div>
                <p>Substituindo <InlineMath math="x=2" />, temos <InlineMath math="\frac{4-4}{2-2} = \frac{0}{0}" />, uma indeterminação. Vamos fatorar o numerador:</p>
                <BlockMath math="\lim_{x \to 2} \frac{(x-2)(x+2)}{x-2}" />
                <p>Agora, podemos cancelar o termo <InlineMath math="(x-2)" />:</p>
                <BlockMath math="\lim_{x \to 2} (x+2) = 2+2 = 4" />
              </div>
            }
          />
        </CollapsibleSection>
      </div>

      {/* SEÇÃO DE DERIVADAS */}
      <div className="section" ref={derivadasRef}>
        <h2><InlineMath math="f'(x)" /> Derivadas</h2>
        <p>A derivada tem duas interpretações principais:</p>
        <ul>
            <li><b>Geometricamente:</b> É o coeficiente angular (inclinação) da reta tangente ao gráfico da função em um ponto específico.</li>
            <li><b>Fisicamente:</b> Representa a taxa de variação instantânea. Se <InlineMath math="s(t)" /> é a posição de um objeto, <InlineMath math="s'(t)" /> é sua velocidade instantânea.</li>
        </ul>
        <p>A definição formal de derivada é através de um limite:</p>
        <BlockMath math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />

        <CollapsibleSection title="Regras Básicas de Derivação">
            <ul>
                <li><b>Regra da Potência:</b> <InlineMath math="\frac{d}{dx}(x^n) = nx^{n-1}" /></li>
                <li><b>Regra da Soma/Subtração:</b> <InlineMath math="(f \pm g)' = f' \pm g'" /></li>
                <li><b>Regra do Produto:</b> <InlineMath math="(f \cdot g)' = f'g + fg'" /></li>
                <li><b>Regra do Quociente:</b> <BlockMath math="\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}" /></li>
            </ul>
        </CollapsibleSection>

        {/* NOVO CONTEÚDO: TABELA DE DERIVADAS */}
        <CollapsibleSection title="Tabela de Derivadas Comuns">
             <ul>
                <li><b>Constante:</b> <InlineMath math="\frac{d}{dx}(c) = 0" /></li>
                <li><b>Exponencial:</b> <InlineMath math="\frac{d}{dx}(e^x) = e^x" />, <InlineMath math="\frac{d}{dx}(a^x) = a^x \ln(a)" /></li>
                <li><b>Logarítmica:</b> <InlineMath math="\frac{d}{dx}(\ln(x)) = \frac{1}{x}" /></li>
                <li><b>Seno:</b> <InlineMath math="\frac{d}{dx}(\sin(x)) = \cos(x)" /></li>
                <li><b>Cosseno:</b> <InlineMath math="\frac{d}{dx}(\cos(x)) = -\sin(x)" /></li>
                <li><b>Tangente:</b> <InlineMath math="\frac{d}{dx}(\tan(x)) = \sec^2(x)" /></li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Regra da Cadeia (A mais importante!)">
          <p>Usada para derivar funções compostas, ou seja, uma função dentro de outra. Se <InlineMath math="h(x) = f(g(x))" />, então:</p>
          <BlockMath math="h'(x) = f'(g(x)) \cdot g'(x)" />
          <p>"Derive a função de fora, mantendo a de dentro, e multiplique pela derivada da função de dentro."</p>
          <InteractiveExample 
            problem={<p>Encontre a derivada de <InlineMath math="h(x) = \sin(x^2)" /></p>}
            solution={
                <div>
                    <p>Aqui, <InlineMath math="f(u) = \sin(u)" /> e <InlineMath math="g(x) = x^2" />. As derivadas são <InlineMath math="f'(u) = \cos(u)" /> e <InlineMath math="g'(x) = 2x" />.</p>
                    <p>Aplicando a regra da cadeia:</p>
                    <BlockMath math="h'(x) = \underbrace{\cos(x^2)}_{f'(g(x))} \cdot \underbrace{2x}_{g'(x)} = 2x \cos(x^2)" />
                </div>
            }
          />
        </CollapsibleSection>

        {/* NOVO CONTEÚDO: DERIVADAS DE ORDEM SUPERIOR E APLICAÇÕES */}
        <CollapsibleSection title="Derivadas de Ordem Superior e Aplicações">
            <p>Podemos derivar uma função múltiplas vezes. A <b>segunda derivada</b>, <InlineMath math="f''(x)" />, é a derivada da derivada.</p>
            <ul>
                <li><b>Velocidade e Aceleração:</b> Se <InlineMath math="s(t)" /> é a posição, <InlineMath math="v(t)=s'(t)" /> é a velocidade e <InlineMath math="a(t)=v'(t)=s''(t)" /> é a aceleração.</li>
                <li><b>Concavidade:</b> A segunda derivada nos informa sobre a "curvatura" do gráfico:
                    <ul>
                        <li>Se <InlineMath math="f''(x) > 0" /> em um intervalo, o gráfico é <b>côncavo para cima</b> (formato de U).</li>
                        <li>Se <InlineMath math="f''(x) < 0" /> em um intervalo, o gráfico é <b>côncavo para baixo</b> (formato de ∩).</li>
                        <li>Um <b>ponto de inflexão</b> ocorre onde a concavidade muda.</li>
                    </ul>
                </li>
                 <li><b>Teste da Segunda Derivada:</b> Para encontrar máximos e mínimos locais, primeiro encontre os pontos críticos (onde <InlineMath math="f'(c)=0" />). Depois, avalie a segunda derivada nesses pontos:
                    <ul>
                        <li>Se <InlineMath math="f''(c) > 0" />, <InlineMath math="f" /> tem um <b>mínimo local</b> em <InlineMath math="c" />.</li>
                        <li>Se <InlineMath math="f''(c) < 0" />, <InlineMath math="f" /> tem um <b>máximo local</b> em <InlineMath math="c" />.</li>
                    </ul>
                </li>
            </ul>
        </CollapsibleSection>
      </div>

      {/* SEÇÃO DE INTEGRAIS */}
      <div className="section" ref={integraisRef}>
        <h2><InlineMath math="\int" /> Integrais</h2>
        <p>
          A integração é a operação inversa da derivação. Ela nos permite, por exemplo, encontrar a área sob uma curva ou, se conhecemos a velocidade, encontrar a posição.
        </p>

        <CollapsibleSection title="Integral Indefinida (Antiderivada)">
            <p>A integral indefinida de <InlineMath math="f(x)" /> é uma família de funções <InlineMath math="F(x)" /> tal que <InlineMath math="F'(x) = f(x)" />. Adicionamos uma constante <InlineMath math="C" /> porque a derivada de uma constante é zero.</p>
            <BlockMath math="\int f(x) dx = F(x) + C" />
            <p>Exemplo:</p>
            <BlockMath math="\int 2x \, dx = x^2 + C" />
            <p>A regra da potência para integrais é: <BlockMath math="\int x^n dx = \frac{x^{n+1}}{n+1} + C, \quad (n \neq -1)" /></p>
        </CollapsibleSection>

        <CollapsibleSection title="Teorema Fundamental do Cálculo (TFC)">
            <p>O TFC é a ponte que conecta derivadas e integrais. Ele afirma que se <InlineMath math="f" /> é contínua e <InlineMath math="F" /> é sua antiderivada, então a integral definida (que calcula a área líquida) pode ser resolvida como:</p>
            <BlockMath math="\int_a^b f(x) dx = F(b) - F(a)" />
            <InteractiveExample 
                problem={<p>Calcule a área sob a curva de <InlineMath math="f(x) = x^2" /> de <InlineMath math="x=0" /> a <InlineMath math="x=1" />.</p>}
                solution={
                    <div>
                        <p>Primeiro, encontramos a antiderivada de <InlineMath math="x^2" />, que é <InlineMath math="F(x) = \frac{x^3}{3}" />.</p>
                        <p>Agora, aplicamos o TFC:</p>
                        <BlockMath math="\int_0^1 x^2 dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1^3}{3} - \frac{0^3}{3} = \frac{1}{3}" />
                    </div>
                }
            />
        </CollapsibleSection>

        <CollapsibleSection title="Técnica de Integração: Substituição (Regra da Cadeia Invertida)">
            <p>É uma das técnicas mais poderosas. Usamos quando o integrando contém uma função e sua derivada (ou um múltiplo dela).</p>
            <BlockMath math="\int f(g(x))g'(x)dx = \int f(u)du, \quad \text{onde } u = g(x)" />
             <InteractiveExample 
                problem={<p>Calcule <InlineMath math="\int 2x e^{x^2} dx" /></p>}
                solution={
                    <div>
                        <p>Note que a derivada de <InlineMath math="x^2" /> é <InlineMath math="2x" />, que também está no integrando. Essa é uma dica para usar substituição.</p>
                        <p>Faça <InlineMath math="u = x^2" />. Então <InlineMath math="du = 2x \, dx" />.</p>
                        <p>Substituindo na integral:</p>
                        <BlockMath math="\int e^{x^2} (2x \, dx) = \int e^u du = e^u + C" />
                        <p>Agora, substituímos de volta para <InlineMath math="x" />:</p>
                        <BlockMath math="e^{x^2} + C" />
                    </div>
                }
            />
        </CollapsibleSection>

        {/* NOVO CONTEÚDO: INTEGRAÇÃO POR PARTES */}
        <CollapsibleSection title="Técnica de Integração: Integração por Partes">
            <p>Esta técnica é a versão integral da regra do produto da derivação. É usada para integrar produtos de funções.</p>
            <p>A fórmula é: <BlockMath math="\int u \, dv = uv - \int v \, du" /></p>
            <p>A chave é escolher <InlineMath math="u" /> e <InlineMath math="dv" /> corretamente. Uma boa regra prática (LIATE) sugere escolher <InlineMath math="u" /> na seguinte ordem de preferência: <b>L</b>ogarítmicas, <b>I</b>nversas Trigonométricas, <b>A</b>lgébricas (polinômios), <b>T</b>rigonométricas, <b>E</b>xponenciais.</p>
            <InteractiveExample
             problem={<p>Calcule <InlineMath math="\int x \cos(x) dx" /></p>}
             solution={
                 <div>
                    <p>Seguindo LIATE, escolhemos a função algébrica para ser <InlineMath math="u" />.</p>
                    <p>Seja <InlineMath math="u = x" /> e <InlineMath math="dv = \cos(x) dx" />.</p>
                    <p>Então, derivamos <InlineMath math="u" /> e integramos <InlineMath math="dv" />:</p>
                    <p><InlineMath math="du = dx" /> e <InlineMath math="v = \int \cos(x) dx = \sin(x)" />.</p>
                    <p>Aplicando a fórmula:</p>
                    <BlockMath math="\int x \cos(x) dx = x\sin(x) - \int \sin(x) dx" />
                    <p>Resolvendo a integral restante:</p>
                    <BlockMath math="= x\sin(x) - (-\cos(x)) + C = x\sin(x) + \cos(x) + C" />
                 </div>
             }
            />
        </CollapsibleSection>
        
        {/* NOVO CONTEÚDO: APLICAÇÕES DA INTEGRAL */}
        <CollapsibleSection title="Aplicações da Integral Definida">
            <p>Além de calcular a área sob uma curva, as integrais definidas têm muitas outras aplicações.</p>
            <ul>
                <li><b>Área entre Curvas:</b> A área entre <InlineMath math="f(x)" /> e <InlineMath math="g(x)" /> de <InlineMath math="a" /> a <InlineMath math="b" />, onde <InlineMath math="f(x) \geq g(x)" />, é dada por <BlockMath math="A = \int_a^b [f(x) - g(x)] dx" /></li>
                <li><b>Volume de Sólidos de Revolução (Método do Disco):</b> Se a região sob <InlineMath math="y=f(x)" /> de <InlineMath math="a" /> a <InlineMath math="b" /> é rotacionada em torno do eixo x, o volume é: <BlockMath math="V = \pi \int_a^b [f(x)]^2 dx" /></li>
                <li><b>Valor Médio de uma Função:</b> O valor médio de <InlineMath math="f(x)" /> no intervalo <InlineMath math="[a,b]" /> é: <BlockMath math="f_{med} = \frac{1}{b-a} \int_a^b f(x) dx" /></li>
            </ul>
        </CollapsibleSection>

      </div>
    </div>
  );
}