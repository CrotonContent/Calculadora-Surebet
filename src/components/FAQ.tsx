import React from 'react';

export function FAQ() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">O que é Surebet?</h3>
            <p className="text-gray-600">
              Surebet, também conhecida como arbitragem esportiva, é uma técnica de apostas que consiste em aproveitar diferentes odds entre casas de apostas para garantir lucro independentemente do resultado do evento.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Como funciona a arbitragem esportiva?</h3>
            <p className="text-gray-600">
              A arbitragem funciona apostando em todos os possíveis resultados de um evento em diferentes casas de apostas, aproveitando as discrepâncias nas odds para garantir lucro.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">É legal fazer Surebet no Brasil?</h3>
            <p className="text-gray-600">
              Sim, a prática de arbitragem esportiva é legal. No entanto, é importante verificar os termos e condições de cada casa de apostas, pois algumas podem não permitir essa prática.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Qual o investimento mínimo recomendado?</h3>
            <p className="text-gray-600">
              O investimento mínimo varia de acordo com as odds encontradas e os limites mínimos de cada casa de apostas. Recomenda-se começar com um valor que permita cobrir esses limites mínimos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}